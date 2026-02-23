import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");

const read = (repoPath) => fs.readFileSync(path.join(repoRoot, repoPath), "utf8");

test("Download page shows a mobile-specific desktop-only message and avoids AppImage-first recommendation on mobile", () => {
  const source = read("src/pages/Download.tsx");

  assert.match(source, /useClientPlatform/);
  assert.match(source, /const \{ detectedPlatform, isMobileClient \} = useClientPlatform\(\)/);
  assert.match(source, /useQuery\(latestReleaseQueryOptions\)/);
  assert.match(source, /const recommendedPlatform: PlatformKey \| null = !isMobileClient && appImageAsset/);
  assert.match(source, /Mobile app coming later\./);
  assert.match(source, /desktop only/);
});
