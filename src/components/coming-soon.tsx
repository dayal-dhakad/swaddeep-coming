import Image from "next/image";
import styles from "./coming-soon.module.css";

export function ComingSoon() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Image
          src="https://ik.imagekit.io/swaddeep/homepage/download.png"
          alt="Swaddeep"
          width={1937}
          height={812}
          priority
          className={styles.logo}
        />
        {/* <span>Seoni · India</span> */}
      </header>

      <section className={styles.content} aria-labelledby="coming-soon-title">
        <h1 id="coming-soon-title">
          Coming
          <span>Soon</span>
        </h1>
      </section>

      {/* <footer className={styles.footer}>
        <p>Brand identity &amp; packaging</p>
        <a href="mailto:swaddeep99@gmail.com">swaddeep99@gmail.com</a>
      </footer> */}
    </main>
  );
}
