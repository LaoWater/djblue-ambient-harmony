# Stack Test Suites

- `tests/stack/*` contains implementation-focused test suites grouped by domain.
- `tests/run-all.mjs` is the wrapper entrypoint that runs all stack suites.
- Current suites:
  - `platform-detection/`: behavioral tests for `detectClientPlatform()` (download-page OS detection heuristics) using Node `vm` + local TypeScript transpilation of `src/lib/releases.ts`.
  - `video-assets/`: mascot alpha source asset, mobile fallback asset contract, UI component fallback wiring checks, and a visual HTML harness for frame capture/download testing.
