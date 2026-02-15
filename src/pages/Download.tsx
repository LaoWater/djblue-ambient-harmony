import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Code,
  Download as DownloadIcon,
  ExternalLink,
  Monitor,
  RefreshCw,
} from "lucide-react";
import {
  detectClientPlatform,
  fetchLatestRelease,
  type LatestReleaseData,
  type PlatformKey,
  PROJECT_RELEASES_URL,
} from "@/lib/releases";

const platformMeta: Record<
  PlatformKey,
  {
    label: string;
    description: string;
    icon: typeof Apple;
  }
> = {
  macos: {
    label: "macOS",
    description: "Native macOS desktop binary",
    icon: Apple,
  },
  windows: {
    label: "Windows",
    description: "Windows 10 and Windows 11",
    icon: Monitor,
  },
  linux: {
    label: "Linux",
    description: "Native Linux desktop binary",
    icon: Code,
  },
};

const formatPublishedDate = (isoDate: string | undefined): string => {
  if (!isoDate) return "Latest alpha";
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "Latest alpha";
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const Download = () => {
  const [release, setRelease] = useState<LatestReleaseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const detectedPlatform = useMemo(() => detectClientPlatform(), []);
  const appImageAsset =
    release?.byPlatform.linux.find((asset) => /\.appimage$/i.test(asset.name)) || null;
  const recommendedPlatform: PlatformKey = appImageAsset
    ? "linux"
    : detectedPlatform || "macos";

  useEffect(() => {
    let cancelled = false;

    const loadRelease = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const latestRelease = await fetchLatestRelease();
        if (!cancelled) setRelease(latestRelease);
      } catch {
        if (!cancelled) {
          setRelease(null);
          setLoadError("Could not load release metadata. Showing fallback links.");
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    void loadRelease();

    return () => {
      cancelled = true;
    };
  }, []);

  const recommendedAsset =
    appImageAsset || release?.bestByPlatform[recommendedPlatform] || null;
  const releasesUrl = release?.releasesUrl || PROJECT_RELEASES_URL;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse"
              style={{ animationDelay: "1.8s" }}
            />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-12 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                Download <span className="gradient-text">DJ Blue Alpha</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Install the newest build for your platform, or browse all releases.
              </p>

              <div className="glass-strong rounded-2xl p-6 space-y-4 text-left md:text-center">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3">
                  {recommendedAsset ? (
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow">
                      <a href={recommendedAsset.url}>
                        <DownloadIcon className="w-4 h-4" />
                        {appImageAsset
                          ? "Download AppImage (Linux)"
                          : `Download for ${platformMeta[recommendedPlatform].label}`}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow">
                      <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
                        <DownloadIcon className="w-4 h-4" />
                        View Alpha Releases
                      </a>
                    </Button>
                  )}

                  <Button asChild size="lg" variant="outline" className="glass">
                    <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View All Releases
                    </a>
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-2">
                  <span>{release?.version || "Latest alpha"}</span>
                  <span>•</span>
                  <span>{formatPublishedDate(release?.publishedAt)}</span>
                  {recommendedAsset && (
                    <>
                      <span>•</span>
                      <span>{recommendedAsset.sizeLabel}</span>
                    </>
                  )}
                </div>

                {isLoading && (
                  <p className="text-sm text-muted-foreground text-center">
                    Fetching latest release metadata...
                  </p>
                )}

                {loadError && (
                  <div className="text-sm text-amber-300/90 bg-amber-500/10 border border-amber-400/30 rounded-lg px-3 py-2 inline-flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    {loadError}
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {(Object.keys(platformMeta) as PlatformKey[]).map((platform, index) => {
                const meta = platformMeta[platform];
                const Icon = meta.icon;
                const bestAsset = release?.bestByPlatform[platform] || null;
                const assetCount = release?.byPlatform[platform]?.length || 0;
                const isRecommended = platform === recommendedPlatform;

                return (
                  <div
                    key={platform}
                    className="rounded-2xl p-7 transition-all duration-500 border border-border/70 bg-card/70"
                  >
                    <div className={`${isRecommended ? "ring-2 ring-primary/60 rounded-xl p-3 -m-3" : ""}`}>
                      <div
                        className="space-y-5 animate-slide-up"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: "both",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          {isRecommended && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
                              Recommended
                            </span>
                          )}
                        </div>

                        <div>
                          <h3 className="text-2xl font-display font-bold">{meta.label}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{meta.description}</p>
                        </div>

                        <div className="text-xs text-muted-foreground border-t border-border/50 pt-4 space-y-1">
                          <p>{release?.version || "Latest alpha"}</p>
                          <p>{bestAsset ? bestAsset.name : "Open release page for assets"}</p>
                          <p>{bestAsset ? bestAsset.sizeLabel : `${assetCount} assets found`}</p>
                        </div>

                        {bestAsset ? (
                          <Button asChild className="w-full bg-primary hover:bg-primary/90">
                            <a href={bestAsset.url}>
                              <DownloadIcon className="w-4 h-4" />
                              Download {meta.label}
                            </a>
                          </Button>
                        ) : (
                          <Button asChild variant="outline" className="w-full glass">
                            <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              View {meta.label} Builds
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="max-w-3xl mx-auto text-center glass rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-muted-foreground mb-4">
                Looking for an older build or release notes?
              </p>
              <Button asChild variant="outline" className="glass">
                <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Browse GitHub Releases
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
