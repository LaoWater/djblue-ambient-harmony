import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const stackSuitesRoot = path.join(repoRoot, "tests/stack");

const suiteDirs = fs
  .readdirSync(stackSuitesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(stackSuitesRoot, entry.name))
  .sort();

if (suiteDirs.length === 0) {
  console.error("No test suites found under tests/stack");
  process.exit(1);
}

for (const suiteDir of suiteDirs) {
  const result = spawnSync(process.execPath, ["--test", suiteDir], {
    cwd: repoRoot,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
