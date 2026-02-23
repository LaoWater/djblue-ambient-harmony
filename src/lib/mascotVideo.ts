export const MASCOT_VIDEO_SOURCE_WEBM_REPO_PATH = "public/media/singing-mascot.webm";
export const MASCOT_VIDEO_MOBILE_APNG_REPO_PATH = "public/media/singing-mascot-mobile-alpha.png";
export const MASCOT_VIDEO_POSTER_REPO_PATH = "public/media/singing-mascot-poster.png";

export const MASCOT_VIDEO_SOURCE_WEBM_PUBLIC_PATH = "/media/singing-mascot.webm";
export const MASCOT_VIDEO_MOBILE_APNG_PUBLIC_PATH = "/media/singing-mascot-mobile-alpha.png";
export const MASCOT_VIDEO_POSTER_PUBLIC_PATH = "/media/singing-mascot-poster.png";

export const MASCOT_VIDEO_CONSUMER_COMPONENTS = [
  "src/components/Hero.tsx",
  "src/pages/About.tsx",
] as const;

export const shouldPreferMascotApngOnMobile = () => {
  if (typeof navigator === "undefined") {
    return false;
  }

  const userAgentDataMobile = (
    navigator as Navigator & { userAgentData?: { mobile?: boolean } }
  ).userAgentData?.mobile;
  if (typeof userAgentDataMobile === "boolean") {
    return userAgentDataMobile;
  }

  const userAgent = navigator.userAgent || "";
  const platform = navigator.platform || "";

  // Treat touch-first mobile and tablet browsers as APNG-first to avoid WebM alpha issues.
  if (/Android|iPhone|iPod|Windows Phone|Opera Mini|Mobile/i.test(userAgent)) {
    return true;
  }

  if (/iPad|Tablet/i.test(userAgent)) {
    return true;
  }

  if (platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1) {
    return true;
  }

  return false;
};
