export type PlatformKey = "macos" | "windows" | "linux";

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GithubLatestRelease = {
  tag_name: string;
  name: string;
  html_url: string;
  published_at: string;
  assets: ReleaseAsset[];
};

export type DownloadAsset = {
  name: string;
  url: string;
  sizeBytes: number;
  sizeLabel: string;
};

export type LatestReleaseData = {
  version: string;
  releaseName: string;
  publishedAt: string;
  releasesUrl: string;
  byPlatform: Record<PlatformKey, DownloadAsset[]>;
  bestByPlatform: Record<PlatformKey, DownloadAsset | null>;
};

type ClientPlatformSignals = {
  platformSource: string;
  isMobileClient: boolean;
};

const RELEASES_API_URL =
  "https://api.github.com/repos/RaresKeY/dj-blue-ai/releases/latest";
export const PROJECT_RELEASES_URL =
  "https://github.com/RaresKeY/dj-blue-ai/releases";

const PLATFORM_ORDER: Record<PlatformKey, RegExp[]> = {
  macos: [/macos$/i, /\.dmg$/i, /\.pkg$/i, /\.zip$/i],
  windows: [/windows\.exe$/i, /\.exe$/i, /\.msi$/i, /\.zip$/i],
  linux: [/\.appimage$/i, /\.deb$/i, /\.rpm$/i, /\.tar\.gz$/i, /linux$/i, /\.zip$/i],
};

const matchesMac = (name: string) =>
  /(\.dmg$|\.pkg$|mac|darwin|osx)/i.test(name);
const matchesWindows = (name: string) =>
  /(\.exe$|\.msi$|windows|win64|win32)/i.test(name);
const matchesLinux = (name: string) =>
  /(\.appimage$|\.deb$|\.rpm$|\.tar\.gz$|linux|ubuntu|debian)/i.test(name);

const classifyPlatform = (assetName: string): PlatformKey | null => {
  if (matchesMac(assetName)) return "macos";
  if (matchesWindows(assetName)) return "windows";
  if (matchesLinux(assetName)) return "linux";
  return null;
};

const formatBytes = (bytes: number): string => {
  if (!Number.isFinite(bytes) || bytes <= 0) return "Unknown size";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  const precision = value >= 10 || unitIndex === 0 ? 0 : 1;
  return `${value.toFixed(precision)} ${units[unitIndex]}`;
};

const sortAssetsByPreference = (
  assets: DownloadAsset[],
  platform: PlatformKey
): DownloadAsset[] => {
  const patterns = PLATFORM_ORDER[platform];
  return [...assets].sort((a, b) => {
    const aIndex = patterns.findIndex((pattern) => pattern.test(a.name));
    const bIndex = patterns.findIndex((pattern) => pattern.test(b.name));
    const safeAIndex = aIndex === -1 ? patterns.length : aIndex;
    const safeBIndex = bIndex === -1 ? patterns.length : bIndex;
    return safeAIndex - safeBIndex;
  });
};

export const detectClientPlatform = (): PlatformKey | null => {
  const signals = getClientPlatformSignals();
  if (!signals) return null;

  if (signals.isMobileClient) return null;
  if (/windows nt|win32|win64|wow64|wince|\bwin\b/.test(signals.platformSource)) return "windows";
  if (/\bcros\b/.test(signals.platformSource)) return "linux";
  if (/macintosh|macintel|macppc|mac68k|macos|os x|darwin/.test(signals.platformSource)) return "macos";
  if (/linux|x11|ubuntu|debian|fedora|red hat|centos|suse|arch/.test(signals.platformSource)) return "linux";
  return null;
};

const getClientPlatformSignals = (): ClientPlatformSignals | null => {
  if (typeof navigator === "undefined") return null;

  const userAgentData = (
    navigator as Navigator & { userAgentData?: { platform?: string; mobile?: boolean } }
  ).userAgentData;
  const uaDataPlatform = userAgentData?.platform || "";
  const navigatorPlatform = navigator.platform || "";
  const userAgent = navigator.userAgent || "";
  const platformSource = `${uaDataPlatform} ${navigatorPlatform} ${userAgent}`.toLowerCase();
  const maxTouchPoints = typeof navigator.maxTouchPoints === "number" ? navigator.maxTouchPoints : 0;

  // iPadOS Safari can present as "MacIntel"; touch points help distinguish it.
  const isIpadDesktopMode =
    /macintel/i.test(navigatorPlatform) &&
    maxTouchPoints > 1 &&
    /(safari|applewebkit)/i.test(userAgent);
  const isMobileClient =
    userAgentData?.mobile === true ||
    isIpadDesktopMode ||
    /android|iphone|ipad|ipod|windows phone|\bmobi\b|\bmobile\b/.test(platformSource);

  return { platformSource, isMobileClient };
};

export const detectMobileOrTabletClient = (): boolean =>
  getClientPlatformSignals()?.isMobileClient ?? false;

export const fetchLatestRelease = async (): Promise<LatestReleaseData> => {
  const response = await fetch(RELEASES_API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch latest release (${response.status})`);
  }

  const release = (await response.json()) as GithubLatestRelease;
  const byPlatform: Record<PlatformKey, DownloadAsset[]> = {
    macos: [],
    windows: [],
    linux: [],
  };

  for (const asset of release.assets || []) {
    const platform = classifyPlatform(asset.name);
    if (!platform) continue;
    byPlatform[platform].push({
      name: asset.name,
      url: asset.browser_download_url,
      sizeBytes: asset.size,
      sizeLabel: formatBytes(asset.size),
    });
  }

  const sortedByPlatform: Record<PlatformKey, DownloadAsset[]> = {
    macos: sortAssetsByPreference(byPlatform.macos, "macos"),
    windows: sortAssetsByPreference(byPlatform.windows, "windows"),
    linux: sortAssetsByPreference(byPlatform.linux, "linux"),
  };

  return {
    version: release.tag_name || "Latest",
    releaseName: release.name || release.tag_name || "Latest release",
    publishedAt: release.published_at,
    releasesUrl: release.html_url || PROJECT_RELEASES_URL,
    byPlatform: sortedByPlatform,
    bestByPlatform: {
      macos: sortedByPlatform.macos[0] || null,
      windows: sortedByPlatform.windows[0] || null,
      linux: sortedByPlatform.linux[0] || null,
    },
  };
};
