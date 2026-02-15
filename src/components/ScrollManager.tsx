import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET_PX = 96;

const scrollToTopInstant = () => {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousBehavior;
  });
};

export const ScrollManager = () => {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      scrollToTopInstant();
      return;
    }

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    const scrollToHashTarget = () => {
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
      window.scrollTo({ top, left: 0, behavior: "smooth" });
    };

    scrollToHashTarget();
    requestAnimationFrame(scrollToHashTarget);
  }, [pathname, search, hash]);

  return null;
};
