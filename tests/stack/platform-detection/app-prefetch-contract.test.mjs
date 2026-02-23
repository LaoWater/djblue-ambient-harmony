import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");

const read = (repoPath) => fs.readFileSync(path.join(repoRoot, repoPath), "utf8");

test("App prefetches latest release at site entry and provides stable client platform context", () => {
  const appSource = read("src/App.tsx");

  assert.match(appSource, /QueryClientProvider client=\{queryClient\}/);
  assert.match(appSource, /ClientPlatformProvider/);
  assert.match(appSource, /AppBootstrap/);
  assert.match(appSource, /queryClient\.prefetchQuery\(latestReleaseQueryOptions\)/);
});

test("Navbar prefetches maintainers on Philosophy link intent", () => {
  const navbarSource = read("src/components/Navbar.tsx");

  assert.match(navbarSource, /prefetchPhilosophyMaintainers/);
  assert.match(navbarSource, /queryClient\.prefetchQuery\(maintainersQueryOptions\(\)\)/);
  assert.match(navbarSource, /onMouseEnter=\{link\.path === "\/philosophy" \? prefetchPhilosophyMaintainers : undefined\}/);
  assert.match(navbarSource, /onFocus=\{link\.path === "\/philosophy" \? prefetchPhilosophyMaintainers : undefined\}/);
});
