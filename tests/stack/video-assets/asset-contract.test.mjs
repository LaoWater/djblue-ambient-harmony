import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");

const assets = [
  {
    label: "alpha video source (webm)",
    repoPath: "public/media/singing-mascot.webm",
    required: true,
  },
  {
    label: "poster fallback image",
    repoPath: "public/media/singing-mascot-poster.png",
    required: true,
  },
  {
    label: "mobile fallback animation (apng)",
    repoPath: "public/media/singing-mascot-mobile-alpha.png",
    required: false,
  },
];

for (const asset of assets) {
  test(`video asset contract: ${asset.label}`, (t) => {
    const fullPath = path.join(repoRoot, asset.repoPath);
    const exists = fs.existsSync(fullPath);

    if (!exists && !asset.required) {
      t.skip(
        `Optional generated asset missing: ${asset.repoPath}. Run scripts/media/generate-mascot-mobile-fallbacks.sh once ffmpeg is installed.`
      );
      return;
    }

    assert.equal(exists, true, `Missing asset: ${asset.repoPath}`);
    const stats = fs.statSync(fullPath);
    assert.equal(stats.isFile(), true, `Expected file: ${asset.repoPath}`);
    assert.ok(stats.size > 0, `Expected non-empty file: ${asset.repoPath}`);
  });
}

test("video asset contract: generation script exists", () => {
  const scriptPath = path.join(repoRoot, "scripts/media/generate-mascot-mobile-fallbacks.sh");
  assert.equal(fs.existsSync(scriptPath), true, "Missing generation script");
});
