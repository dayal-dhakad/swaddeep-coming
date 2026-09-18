"use client";

import { useEffect, useState } from "react";
import { Image as ImageKitImage } from "@imagekit/next";
import styles from "./hero-slider.module.css";

const slides = [
  {
    label: "GBM Masala",
    category: "Packaging design",
    src: "https://ik.imagekit.io/swaddeep/1%20PNG%203d/1%20PNG%203d/Gangwal%20Horeca%20logo%20and%20packagings/70b10099-d3e2-4ddb-aa8b-457e2eb783de.jpg",
    alt: "GBM Masala spice packages on a pale yellow background",
    width: 1600,
    height: 955,
  },
  {
    label: "GBM Masala",
    category: "Packaging design",
    src: "https://ik.imagekit.io/swaddeep/1%20PNG%203d/1%20PNG%203d/Gangwal%20Horeca%20logo%20and%20packagings/7964e07f-f55f-48a6-99b8-20217e3579bf.jpg",
    alt: "GBM Masala spice packages on a dark red background",
    width: 1080,
    height: 668,
  },
  {
    label: "Gangwal Horeca",
    category: "Packaging design",
    src: "https://ik.imagekit.io/swaddeep/1%20PNG%203d/1%20PNG%203d/Gangwal%20Horeca%20logo%20and%20packagings/Horeca%20packaging%20Range%20.png?updatedAt=1789493606593",
    alt: "Seven colorful Gangwal Horeca food packages displayed in a row",
    width: 3963,
    height: 1660,
  },
  {
    label: "Gangwal Salute India",
    category: "Packaging design",
    src: "https://ik.imagekit.io/swaddeep/1%20PNG%203d/1%20PNG%203d/Gangwal%20Salute%20india%20logo%20and%20packagings/Gangwal%20Salute%20india%20packaging%20Rang.png?updatedAt=1789493645735",
    alt: "Four Gangwal Salute India daliya packages displayed in a row",
    width: 5000,
    height: 1041,
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
            key={slide.src}
          >
            <ImageKitImage
              urlEndpoint="https://ik.imagekit.io/swaddeep"
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
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
            key={slide.src}
            className={index === activeSlide ? styles.current : ""}
            aria-label={`Show ${slide.label} slide ${index + 1}`}
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
