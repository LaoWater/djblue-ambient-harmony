import { useState } from "react";
import {
  MASCOT_VIDEO_SOURCE_WEBM_PUBLIC_PATH,
  MASCOT_VIDEO_MOBILE_APNG_PUBLIC_PATH,
  MASCOT_VIDEO_POSTER_PUBLIC_PATH,
  shouldPreferMascotApngOnMobile,
} from "@/lib/mascotVideo";

type MascotVideoProps = {
  className?: string;
};

export const MascotVideo = ({ className }: MascotVideoProps) => {
  const [showAnimatedFallback, setShowAnimatedFallback] = useState(
    () => shouldPreferMascotApngOnMobile(),
  );

  if (showAnimatedFallback) {
    return (
      <img
        src={MASCOT_VIDEO_MOBILE_APNG_PUBLIC_PATH}
        alt="Animated DJ Blue mascot"
        className={className}
      />
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={MASCOT_VIDEO_POSTER_PUBLIC_PATH}
      className={className}
      aria-label="Animated DJ Blue mascot"
      onError={() => setShowAnimatedFallback(true)}
    >
      <source src={MASCOT_VIDEO_SOURCE_WEBM_PUBLIC_PATH} type="video/webm" />
    </video>
  );
};
