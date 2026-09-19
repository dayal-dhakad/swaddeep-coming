import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";
import { FooterNavigation } from "./footer-navigation";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.footerDetails}>
        <div className={styles.footerIdentity}>
          <Image
            src="/plane-outline-white.png"
            alt="Outline paper plane"
            width={1254}
            height={1254}
            sizes="(max-width: 768px) 6rem, 8rem"
            className={styles.footerLogo}
          />
          <span>Brand identity &amp; packaging</span>
        </div>
        <FooterNavigation groupLabelClassName={styles.groupLabel} />
        <div className={styles.footerContact}>
          <p className={styles.groupLabel}>Contact</p>
          <address>
            <a href="tel:+919407053365">+91 9407053365</a>
            <br />
            <a href="mailto:swaddeep99@gmail.com">swaddeep99@gmail.com</a>
          </address>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/swaddeep_packaging/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SiInstagram size={26} aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/message/4BRHRNCVOSPFK1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <SiWhatsapp size={26} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={26} aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <SiYoutube size={26} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBase}>
        <span>India</span>
        <span>© {new Date().getFullYear()} Swaddeep</span>
        <a href="#top">Back to top ↑</a>
      </div>

      <p className={styles.legalNotice}>
        All the copyrights of clientele artwork are reserved with respective
        associates. Reproducing or imitating them for business allows our
        associates to take legal action. None of the copyrights are with
        Swaddeep. Swaddeep is displaying the catalogue via this website.
      </p>
    </footer>
  );
}
