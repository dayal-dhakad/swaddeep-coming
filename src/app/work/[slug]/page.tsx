import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { workProjects } from "@/lib/work-projects";
import styles from "../work.module.css";

export const dynamicParams = false;

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = workProjects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} — Work` : "Work",
    description: project
      ? `View the ${project.title} image gallery at Swaddeep.`
      : undefined,
  };
}

export default async function WorkProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = workProjects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();

  const project = workProjects[index];
  const relatedProjects = workProjects.filter(
    (item) => item.kind === project.kind,
  );
  const relatedIndex = relatedProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const nextProject =
    relatedProjects.length > 1
      ? relatedProjects[(relatedIndex + 1) % relatedProjects.length]
      : undefined;

  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="top">
        <section className={styles.detailHero} aria-labelledby="project-title">
          <div className={styles.detailTopline}>
            <Link href="/work">← Work</Link>
          </div>
          <div className={styles.detailTitleRow}>
            <div>
              {project.kind === "photography" && <p>Photography</p>}
              <h1 id="project-title">{project.title}</h1>
              <span>{project.line}</span>
            </div>
            {project.logo && (
              <div className={styles.detailLogo}>
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  fill
                  sizes="(max-width: 700px) 96px, 160px"
                />
              </div>
            )}
          </div>
        </section>

        <section
          className={styles.gallerySection}
          aria-labelledby="gallery-title"
        >
          <div className={styles.galleryIntro}>
            <h2 id="gallery-title">
              {project.collections.length > 1
                ? "Packaging collections"
                : project.kind === "photography"
                  ? "Photographs"
                  : "Packaging images"}
            </h2>
          </div>
          {project.collections.map((collection, collectionIndex) => (
            <section
              className={styles.collection}
              key={collection.title}
              aria-label={collection.title}
            >
              {project.collections.length > 1 && (
                <div className={styles.collectionHeading}>
                  <h3>{collection.title}</h3>
                </div>
              )}
              <div
                className={`${styles.galleryGrid} ${project.kind === "photography" ? styles.foodGallery : ""}`}
              >
                {collection.images.map((image, imageIndex) => (
                  <figure className={styles.galleryItem} key={image.src}>
                    <div className={styles.galleryFrame}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        priority={collectionIndex === 0 && imageIndex === 0}
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </section>

        <nav
          className={styles.nextProject}
          aria-label="Continue exploring work"
        >
          <span>{nextProject ? "Up next" : "Explore more"}</span>
          <Link href={nextProject ? `/work/${nextProject.slug}` : "/work"}>
            {nextProject ? nextProject.title : "Work"}
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
