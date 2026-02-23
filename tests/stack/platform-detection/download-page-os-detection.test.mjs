import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");
const releasesPath = path.join(repoRoot, "src/lib/releases.ts");
const releasesSource = fs.readFileSync(releasesPath, "utf8");

const transpiledReleases = ts.transpileModule(releasesSource, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.CommonJS,
  },
  fileName: "releases.ts",
}).outputText;

const loadReleasesModule = (navigatorValue) => {
  const module = { exports: {} };
  const context = vm.createContext({
    module,
    exports: module.exports,
    navigator: navigatorValue,
    fetch: () => {
      throw new Error("fetch should not be called in platform detection tests");
    },
    console,
  });

  vm.runInContext(transpiledReleases, context, { filename: "releases.test.cjs" });
  return module.exports;
};

const detectWithNavigator = (navigatorValue) => {
  const { detectClientPlatform } = loadReleasesModule(navigatorValue);
  return detectClientPlatform();
};

const detectMobileWithNavigator = (navigatorValue) => {
  const { detectMobileOrTabletClient } = loadReleasesModule(navigatorValue);
  return detectMobileOrTabletClient();
};

test("returns null when navigator is unavailable", () => {
  const { detectClientPlatform } = loadReleasesModule(undefined);
  assert.equal(detectClientPlatform(), null);
});

test("detects Windows desktop", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
      platform: "Win32",
      maxTouchPoints: 0,
    }),
    "windows",
  );
});

test("detects macOS desktop from uaData platform", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
      platform: "",
      maxTouchPoints: 0,
      userAgentData: { platform: "macOS", mobile: false },
    }),
    "macos",
  );
});

test("detects Linux desktop", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
      platform: "Linux x86_64",
      maxTouchPoints: 0,
    }),
    "linux",
  );
});

test("maps ChromeOS to linux fallback", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (X11; CrOS x86_64 15964.42.0) AppleWebKit/537.36 Chrome/122 Safari/537.36",
      platform: "Linux x86_64",
      maxTouchPoints: 0,
    }),
    "linux",
  );
});

test("treats Android mobile as unsupported", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/122 Mobile Safari/537.36",
      platform: "Linux armv8l",
      maxTouchPoints: 5,
    }),
    null,
  );
});

test("reports Android client as mobile/tablet", () => {
  assert.equal(
    detectMobileWithNavigator({
      userAgent:
        "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/122 Mobile Safari/537.36",
      platform: "Linux armv8l",
      maxTouchPoints: 5,
    }),
    true,
  );
});

test("treats iPhone mobile as unsupported", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1",
      platform: "iPhone",
      maxTouchPoints: 5,
    }),
    null,
  );
});

test("treats iPadOS desktop-mode Safari as unsupported", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15",
      platform: "MacIntel",
      maxTouchPoints: 5,
    }),
    null,
  );
});

test("reports iPadOS desktop-mode Safari as mobile/tablet", () => {
  assert.equal(
    detectMobileWithNavigator({
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15",
      platform: "MacIntel",
      maxTouchPoints: 5,
    }),
    true,
  );
});

test("treats uaData mobile=true as unsupported even on desktop-like strings", () => {
  assert.equal(
    detectWithNavigator({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
      platform: "Win32",
      maxTouchPoints: 0,
      userAgentData: { platform: "Windows", mobile: true },
    }),
    null,
  );
});

test("returns null for unknown platforms", () => {
  assert.equal(
    detectWithNavigator({
      userAgent: "CustomAgent/1.0",
      platform: "Unknown",
      maxTouchPoints: 0,
    }),
    null,
  );
});

test("reports desktop Windows as not mobile/tablet", () => {
  assert.equal(
    detectMobileWithNavigator({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
      platform: "Win32",
      maxTouchPoints: 0,
      userAgentData: { platform: "Windows", mobile: false },
    }),
    false,
  );
});
