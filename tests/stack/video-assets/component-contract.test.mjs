import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");

const read = (repoPath) => fs.readFileSync(path.join(repoRoot, repoPath), "utf8");

test("MascotVideo prefers APNG on mobile and keeps WebM+error fallback on non-mobile", () => {
  const source = read("src/components/MascotVideo.tsx");

  assert.match(source, /shouldPreferMascotApngOnMobile/);
  assert.match(source, /useState\(\s*\(\)\s*=>\s*shouldPreferMascotApngOnMobile\(\)/);
  assert.match(source, /poster=\{MASCOT_VIDEO_POSTER_PUBLIC_PATH\}/);
  assert.match(source, /type="video\/webm"/);
  assert.match(source, /MASCOT_VIDEO_MOBILE_APNG_PUBLIC_PATH/);
  assert.match(source, /<img/);
  assert.match(source, /onError=\{\(\) => setShowAnimatedFallback\(true\)\}/);
  assert.match(source, /playsInline/);
  assert.match(source, /muted/);
  assert.match(source, /preload="metadata"/);
});

test("mascot video helper includes mobile heuristics for APNG-first rendering", () => {
  const source = read("src/lib/mascotVideo.ts");

  assert.match(source, /shouldPreferMascotApngOnMobile/);
  assert.match(source, /userAgentData\?\.mobile/);
  assert.match(source, /Android\|iPhone\|iPod\|Windows Phone/);
  assert.match(source, /iPad/);
  assert.match(source, /platform === "MacIntel"/);
  assert.match(source, /navigator\.maxTouchPoints/);
});

for (const repoPath of ["src/components/Hero.tsx", "src/pages/About.tsx"]) {
  test(`${repoPath} uses shared MascotVideo component`, () => {
    const source = read(repoPath);
    assert.match(source, /import\s+\{\s*MascotVideo\s*\}\s+from\s+"@\/components\/MascotVideo"/);
    assert.match(source, /<MascotVideo\b/);
    assert.doesNotMatch(source, /import\s+singingMascot\s+from\s+"@\/assets\/singing-mascot\.webm"/);
  });
}
