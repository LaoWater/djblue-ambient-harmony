import { fetchLatestRelease } from "@/lib/releases";
import { fetchProjectMaintainers } from "@/lib/maintainers";

export const githubQueryKeys = {
  latestRelease: ["github", "latest-release"] as const,
  maintainers: (limit = 6) => ["github", "maintainers", limit] as const,
};

export const latestReleaseQueryOptions = {
  queryKey: githubQueryKeys.latestRelease,
  queryFn: fetchLatestRelease,
  staleTime: 5 * 60 * 1000,
} as const;

export const maintainersQueryOptions = (limit = 6) =>
  ({
    queryKey: githubQueryKeys.maintainers(limit),
    queryFn: () => fetchProjectMaintainers(limit),
    staleTime: 10 * 60 * 1000,
  }) as const;
