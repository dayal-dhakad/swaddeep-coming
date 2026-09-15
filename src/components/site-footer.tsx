import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";
import { ElementMarks } from "./triangle-mark";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerLead}>
        <p>Have something meaningful in mind?</p>
        <h2>Let your design</h2>
        <a href="mailto:swaddeep99@gmail.com">
          <span>speak</span>
          <i aria-hidden="true">↗</i>
        </a>
      </div>

      <div className={styles.footerDetails}>
        <div className={styles.footerIdentity}>
          <Image
            src="https://ik.imagekit.io/swaddeep/homepage/download.png"
            alt="Swaddeep"
            width={1937}
            height={812}
            sizes="(max-width: 768px) 12rem, 16rem"
            className={styles.footerLogo}
          />
          <span>Brand identity &amp; packaging</span>
        </div>
        <nav aria-label="Footer navigation">
          <p className={styles.groupLabel}>Explore</p>
          <Link href="/about">About</Link>
          <Link href="#">About DR. Swati Shobha</Link>
          <Link href="/about#what-we-do">What we do</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#philosophy">Philosophy</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className={styles.footerContact}>
          <p className={styles.groupLabel}>Contact</p>
          <address>
            <a href="tel:+919407053365">+91 9407053365</a>
            <br />
            <a href="mailto:swaddeep99@gmail.com">swaddeep99@gmail.com</a>
          </address>
        </div>
      </div>

      <ElementMarks className={styles.elementMarks} />

      <div className={styles.footerBase}>
        <span>India</span>
        <span>© {new Date().getFullYear()} Swaddeep</span>
        <a href="#top">Back to top ↑</a>
      </div>

      <p className={styles.legalNotice}>
        All copyrights in clientele artwork are reserved by the respective
        clients and associates; Swaddeep displays this work solely as part of
        its website catalogue, holds no copyright in it, and unauthorized
        reproduction or imitation for commercial purposes may result in legal
        action by the respective rights holders.
      </p>
    </footer>
  );
}
