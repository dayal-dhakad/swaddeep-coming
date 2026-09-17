import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { workProjects } from "@/lib/work-projects";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Swaddeep's brand packaging and food photography galleries.",
};

const brandProjects = workProjects.filter(
  (project) => project.kind !== "photography",
);
const brandCards = [
  ...brandProjects.slice(0, 3),
  null,
  ...brandProjects.slice(3),
];
const photographyProject = workProjects.find(
  (project) => project.kind === "photography",
);

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="top">
        <section className={styles.hero} aria-labelledby="work-title">
          <div className={styles.heroTopline}>
            <span>Swaddeep / Work</span>
            <span>Brand identity / Packaging</span>
          </div>
          <h1 id="work-title">
            The Edit<span className={styles.period}>.</span>
          </h1>
          <div className={styles.heroBottom}>
            <p>Explore the brands and packaging in our portfolio.</p>
            <a href="#projects">
              View brands <span aria-hidden="true">↘</span>
            </a>
          </div>
        </section>

        <section
          className={styles.projects}
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="projects-title">Brands</h2>
          </div>
          <div className={styles.projectGrid}>
            {brandCards.map((project, index) =>
              project ? (
                <Link
                  className={styles.projectCard}
                  href={`/work/${project.slug}`}
                  key={project.slug}
                  aria-label={`View ${project.title} gallery`}
                >
                  <div className={styles.cardCaption}>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.line}</p>
                    </div>
                    {project.logo && (
                      <div className={styles.cardLogo}>
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          sizes="96px"
                        />
                      </div>
                    )}
                  </div>
                  <div className={styles.cardVisual}>
                    <Image
                      src={project.coverSrc}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      className={styles.cardImage}
                      priority={index < 2}
                    />
                    <span className={styles.cardArrow} aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </Link>
              ) : (
                <article className={styles.pendingCard} key="swadeep-oil">
                  <div className={styles.cardCaption}>
                    <div>
                      <h3>Swadeep Oil</h3>
                      <p>Images to be added</p>
                    </div>
                  </div>
                  <div className={styles.pendingVisual} aria-hidden="true">
                    <span>
                      Swadeep
                      <br />
                      Oil
                    </span>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        {photographyProject && (
          <section
            className={styles.photographySection}
            aria-labelledby="photography-title"
          >
            <div className={styles.photographyCopy}>
              <span>Photography</span>
              <h2 id="photography-title">Food photography</h2>
              <p>A separate collection of food images.</p>
              <Link href={`/work/${photographyProject.slug}`}>
                View photography <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <Link
              className={styles.photographyVisual}
              href={`/work/${photographyProject.slug}`}
              aria-label="View food photography gallery"
            >
              <Image
                src={photographyProject.coverSrc}
                alt="Food photography preview"
                fill
                sizes="(max-width: 700px) 100vw, 55vw"
              />
            </Link>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
