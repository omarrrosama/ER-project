"use client";

import { useEffect, useState } from "react";

const PRELOADER = {
  background: "#000000",
  bar: "#f4f4f1",
  barSize: "4px",
  gap: "4px",
  travel: "24px",
  duration: "1700ms",
  stagger: "80ms",
  minimumDisplay: 1500,
  fadeDuration: 500,
} as const;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let sessionSeen = false;
    try {
      sessionSeen = sessionStorage.getItem("eyad-preloader-seen") === "true";
      if (!sessionSeen) sessionStorage.setItem("eyad-preloader-seen", "true");
    } catch {
      // A restricted storage context should still get a functional loader.
    }

    if (sessionSeen) {
      const frame = window.requestAnimationFrame(() => setVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }

    const startedAt = performance.now();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minimumDisplay = reducedMotion ? 500 : PRELOADER.minimumDisplay;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let fadeTimer: number | undefined;
    let finishTimer: number | undefined;

    const finish = () => {
      document.fonts.ready.then(() => {
        const remaining = Math.max(0, minimumDisplay - (performance.now() - startedAt));
        finishTimer = window.setTimeout(() => {
          setExiting(true);
          fadeTimer = window.setTimeout(() => {
            document.body.style.overflow = previousOverflow;
            setVisible(false);
          }, PRELOADER.fadeDuration);
        }, remaining);
      });
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      if (finishTimer) window.clearTimeout(finishTimer);
      if (fadeTimer) window.clearTimeout(fadeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  const style = {
    "--preloader-background": PRELOADER.background,
    "--preloader-bar": PRELOADER.bar,
    "--preloader-bar-size": PRELOADER.barSize,
    "--preloader-gap": PRELOADER.gap,
    "--preloader-travel": PRELOADER.travel,
    "--preloader-duration": PRELOADER.duration,
    "--preloader-stagger": PRELOADER.stagger,
  } as React.CSSProperties;

  return (
    <div
      className={`fixed inset-0 z-9999 grid place-items-center opacity-100 transition-opacity duration-500 ease-in-out bg-(--preloader-background)${exiting ? " opacity-0 pointer-events-none" : ""}`}
      style={style}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading</span>
      <div
        className="flex items-center gap-(--preloader-gap) h-[calc(var(--preloader-travel)*2+var(--preloader-bar-size)*6)]"
        aria-hidden="true"
      >
        {[3, 2, 1, 0].map((stagger, index) => <span
          key={index}
          className="block w-(--preloader-bar-size) h-(--preloader-bar-size) bg-(--preloader-bar) origin-center animate-preloader-cascade motion-reduce:animate-none"
          style={{ animationDelay: `calc(var(--preloader-stagger) * ${stagger})` }}
        />)}
      </div>
    </div>
  );
}