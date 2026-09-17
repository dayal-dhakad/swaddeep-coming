"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./site-intro.module.css";

type Phase = "playing" | "leaving" | "done";

export function SiteIntro() {
  const [phase, setPhase] = useState<Phase>("playing");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setPhase("done"));
      return () => window.cancelAnimationFrame(frame);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leave = window.setTimeout(() => setPhase("leaving"), 2300);
    const finish = window.setTimeout(() => setPhase("done"), 2850);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(finish);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`${styles.intro} ${phase === "leaving" ? styles.leaving : ""}`}
      role="status"
      aria-label="Swaddeep is opening"
    >
      <div className={styles.content} aria-hidden="true">
        <Image
          className={styles.plane}
          src="/plane-outline-white.png"
          alt=""
          width={220}
          height={220}
          priority
        />
        <span className={styles.progress}><span /></span>
      </div>
    </div>
  );
}
