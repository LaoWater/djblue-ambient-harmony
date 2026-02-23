import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");

const read = (repoPath) => fs.readFileSync(path.join(repoRoot, repoPath), "utf8");

test("visual HTML test harness exists and includes capture/save workflow", () => {
  const html = read("tests/stack/video-assets/visual/index.html");

  assert.match(html, /Mascot Video Visual HTML Test/);
  assert.match(html, /id="mascotVideo"/);
  assert.match(html, /type="video\/webm"/);
  assert.match(html, /\/media\/singing-mascot\.webm/);
  assert.doesNotMatch(html, /type="video\/mp4"/);
  assert.match(html, /id="apngFallback"/);
  assert.match(html, /\/media\/singing-mascot-mobile-alpha\.png/);
  assert.match(html, /id="captureBtn"/);
  assert.match(html, /id="saveBtn"/);
  assert.doesNotMatch(html, /id="latestImage"/);
  assert.doesNotMatch(html, /localStorage\./);
  assert.match(html, /canvas\.toDataURL\("image\/png"\)/);
  assert.match(html, /a\.download = DOWNLOAD_NAME/);
  assert.match(html, /mascot-video-capture\.png/);
});

test("visual HTML test server exists", () => {
  const serverSource = read("tests/stack/video-assets/visual/serve.mjs");
  assert.match(serverSource, /http\.createServer/);
  assert.match(serverSource, /video\/webm/);
  assert.doesNotMatch(serverSource, /video\/mp4/);
  assert.match(serverSource, /tests\/stack\/video-assets\/visual\/index\.html/);
});
