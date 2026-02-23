import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../../..");

const port = Number(process.env.PORT || 4174);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webm": "video/webm",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  const requestPath = (req.url || "/").split("?")[0];
  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const fsPath = path.join(repoRoot, safePath === "/" ? "tests/stack/video-assets/visual/index.html" : safePath);

  if (!fsPath.startsWith(repoRoot)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(fsPath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }
    const ext = path.extname(fsPath).toLowerCase();
    res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Visual video test server: http://localhost:${port}/tests/stack/video-assets/visual/index.html`);
});
