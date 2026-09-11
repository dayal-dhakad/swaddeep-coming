"use client";

import { useEffect, useState } from "react";
import { Image as ImageKitImage } from "@imagekit/next";
import styles from "./hero-slider.module.css";

const slides = [
  {
    label: "Ramaiah",
    category: "Brand experience",
    src: "/homepage/Screenshot 2026-09-08 203325.png",
    alt: "Ramaiah institutional event stage and environmental branding",
  },
  {
    label: "Anna Chandy",
    category: "Brand identity",
    src: "/homepage/Screenshot 2026-09-08 203345.png",
    alt: "Anna Chandy identity against a deep green illustrated landscape",
  },
  {
    label: "Agami Summit",
    category: "Campaign design",
    src: "/homepage/Screenshot 2026-09-08 203144.png",
    alt: "Agami Summit Touch Feel Shape environmental graphic",
  },
  {
    label: "Cities",
    category: "Editorial design",
    src: "/homepage/image1.png",
    alt: "Open Cities publication displayed against a yellow background",
  },
];

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className={styles.slider}
      aria-roledescription="carousel"
      aria-label="How design communicates"
    >
      <div className={styles.slides} aria-live="polite">
        {slides.map((slide, index) => (
          <article
            className={`${styles.slide} ${index === activeSlide ? styles.active : ""}`}
            aria-hidden={index !== activeSlide}
            key={slide.label}
          >
            <ImageKitImage
              urlEndpoint="https://ik.imagekit.io/swaddeep"
              src={slide.src}
              alt={slide.alt}
              width={1680}
              height={945}
              sizes="100vw"
              className={styles.image}
              priority={index === 0}
            />
            <div className={styles.caption}>
              <span>{slide.category}</span>
              <strong>{slide.label}</strong>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.controls} aria-label="Choose a slide">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.label}
            className={index === activeSlide ? styles.current : ""}
            aria-label={`Show ${slide.label} project`}
            aria-current={index === activeSlide ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
