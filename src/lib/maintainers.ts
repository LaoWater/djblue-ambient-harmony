export type Maintainer = {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  contributions: number;
};

type GithubContributor = {
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
  type: string;
};

export const PROJECT_REPO_URL = "https://github.com/RaresKeY/dj-blue-ai";
const MAINTAINERS_API_URL =
  "https://api.github.com/repos/RaresKeY/dj-blue-ai/contributors?per_page=24";
const MIN_MAINTAINER_CONTRIBUTIONS = 2;

const isBotAccount = (contributor: GithubContributor): boolean =>
  contributor.type === "Bot" || contributor.login.endsWith("[bot]");

export const fetchProjectMaintainers = async (
  limit = 6
): Promise<Maintainer[]> => {
  const response = await fetch(MAINTAINERS_API_URL, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch maintainers (${response.status})`);
  }

  const contributors = (await response.json()) as GithubContributor[];

  return contributors
    .filter(
      (contributor) =>
        !isBotAccount(contributor) &&
        contributor.contributions >= MIN_MAINTAINER_CONTRIBUTIONS
    )
    .slice(0, limit)
    .map((contributor) => ({
      username: contributor.login,
      profileUrl: contributor.html_url,
      avatarUrl: contributor.avatar_url,
      contributions: contributor.contributions,
    }));
};
