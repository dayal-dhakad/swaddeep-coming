import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TriangleMark } from "@/components/triangle-mark";
import styles from "./swati-shobha.module.css";

export const metadata: Metadata = {
  title: "Dr. Swati Shobha",
  description:
    "Meet Dr. Swati Shobha, founder and brand consultant at Swaddeep, and explore the education, ideas, and experiences behind her work.",
};

const education = [
  {
    year: "2018—2022",
    degree: "Ph.D. in Advertising",
    place: "Department of Mass Communication, Renaissance University, Indore",
  },
  {
    year: "2013—2015",
    degree: "M.A. in English Literature",
    place: "RDVV, Jabalpur · PG College, Seoni",
  },
  {
    year: "2009—2011",
    degree: "M.A. in Mass Communication",
    place: "School of Journalism, DAVV, Indore",
  },
  {
    year: "2006—2009",
    degree: "B.Sc. in Biotech & Bioinformatics",
    place: "Mata Gujari College, DAVV, Indore",
  },
];

const principles = [
  {
    question: "Where does the real struggle begin?",
    answer:
      "When a product has to communicate clearly on the founder’s behalf.",
  },
  {
    question: "How do you understand a market?",
    answer:
      "Spend qualitative time inside it—combining observation with intellect.",
  },
  {
    question: "What should come before product design?",
    answer:
      "Clarity about the audience, launch region, price, purpose, and the market the product must enter.",
  },
  {
    question: "Why can a well-designed product still fail?",
    answer:
      "Poor market knowledge, unsuitable packaging, weak materials, printing issues, or a failure to understand regional influence.",
  },
];

const consultingClients = [
  "Swadeep Edible Oil",
  "Gangwal",
  "Shree Ganesh Besan Mill",
  "GBM",
  "SGT",
];

const consultingFor = [
  "Businesses already in the market but new to packaging",
  "Brands whose packaging or rebranding has not worked",
  "Teams facing copyright disputes with rivals",
  "Products needing cylinder and colour planning",
  "Founders choosing a final name and logo",
  "Industrialists launching late in a competitive market",
];

export default function SwatiShobhaPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="top">
        <section className={styles.hero} aria-labelledby="swati-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Founder · Brand consultant · Writer</p>
            <h1 id="swati-title">
              <span>Dr. Swati</span>
              <strong>Shobha</strong>
            </h1>
            <p className={styles.intro}>
              A multidisciplinary thinker shaping regional brands with research,
              language, culture, and commercial clarity.
            </p>
            <blockquote className={styles.heroQuote}>
              <p>
                I welcome you to take the <em>next flight</em> of your brand
                with Swaddeep. Strategies of the market are built in the brain
                and not in the market. Let us build something really creative
                and strongest for you.
              </p>
              <footer>
                <cite>Dr. Swati Shobha Sevlani</cite>
                <span>Ph.D. in Advertising</span>
              </footer>
            </blockquote>
          </div>

          <div className={styles.portraitWrap}>
            {/* <span className={styles.index}>01 / Portrait</span> */}
            <Image
              src="/swati-shobha/dr-swati-portrait.png"
              alt="Illustrated portrait of Dr. Swati Shobha holding a cup and tablet"
              width={966}
              height={1289}
              priority
              sizes="(max-width: 760px) 100vw, 47vw"
              className={styles.portrait}
            />
          </div>

          <TriangleMark variant="progress" className={styles.heroMark} />
        </section>

        <section className={styles.statement} aria-label="Guiding belief">
          <p className={styles.kicker}>Her point of view</p>
          <p className={styles.statementLine}>
            Building regional brands with the clarity to become
            <em> visible.</em>
          </p>
        </section>

        <section
          className={styles.story}
          id="story"
          aria-labelledby="story-title"
        >
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>Being an entrepreneur</p>
          </div>
          <div className={styles.storyBody}>
            <h2 id="story-title">From a visiting card to the whole shelf.</h2>
            <div className={styles.columns}>
              <p>
                Dr. Swati founded Swaddeep in 2014. Over a twelve-year journey,
                the studio evolved from making visiting cards into a specialist
                brand identity and FMCG packaging practice in Central India.
              </p>
              <p>
                Her work crosses disciplines—from graphics and illustration to
                copywriting, photography, printing, intellectual property, and
                regulatory awareness. That breadth is held together by one aim:
                helping local and regional entrepreneurs take their next flight.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.method} aria-labelledby="method-title">
          <div className={styles.methodIntro}>
            <p className={styles.kicker}>Questions before answers</p>
            <h2 id="method-title">Observe first. Design with context.</h2>
            <p>
              Her approach begins with an open conversation about the market,
              not an elaborate description of the solution. The aim is to
              replace visual guesswork with clarity about people, place, price,
              and purpose.
            </p>
          </div>
          <div className={styles.questionList}>
            {principles.map((principle, index) => (
              <article key={principle.question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.question}</h3>
                  <p>{principle.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.consulting}
          id="consulting"
          aria-labelledby="consulting-title"
        >
          <div className={styles.consultingTop}>
            <div className={styles.consultingPortrait}>
              <Image
                src="/swati-shobha/dr-swati-consultant.png"
                alt="Illustration of Dr. Swati Shobha in a dark blazer, gesturing beside paper planes"
                width={1086}
                height={1448}
                sizes="(max-width: 760px) 100vw, 38vw"
              />
            </div>
            <div className={styles.consultingNarrative}>
              <div className={styles.consultingLead}>
                <p className={styles.kicker}>Being a brand consultant</p>
                <h2 id="consulting-title">The Soya Queen of packaging.</h2>
                <p>
                  Dr. Swati Sevlani is known as the Soya Queen for her soybean
                  oil packaging work across Madhya Pradesh.
                </p>
                <p className={styles.consultingMetric}>
                  <strong>100+</strong>
                  <span>soybean oil brands with packaging designed in Madhya Pradesh</span>
                </p>
              </div>

              <div className={styles.consultingBrands}>
                <p className={styles.kicker}>FMCG consulting</p>
                <h3>Brands behind the brief.</h3>
                <ul>
                  {consultingClients.map((client, index) => (
                    <li key={client}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{client}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.consultingPractice}>
                <p className={styles.kicker}>Consulting with clarity</p>
                <h3>Before the next move.</h3>
                <p>
                  Packaging and branding involve investment, time and instinct.
                  Understanding the market and adapting to competition call for
                  transparent, open-ended discussion.
                </p>
                <p>
                  As founder of Swaddeep, Dr. Swati also consults on rural
                  market segmentation.
                </p>
                <div className={styles.consultingPracticeList}>
                  <h4>Consultation is for</h4>
                  <ol>
                    {consultingFor.map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <p className={styles.consultingNote}>
                  The work brings clarity to market requirements, direction and
                  the details missing from a branding process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.education} aria-labelledby="education-title">
          <div className={styles.educationIntro}>
            <p className={styles.kicker}>A layered education</p>
            <h2 id="education-title">Science. Story. Strategy.</h2>
            <p>
              Her academic path moves between biotechnology, mass communication,
              literature, and advertising—an unusual combination that informs
              how she reads both products and people.
            </p>
          </div>
          <ol className={styles.educationList}>
            {education.map((item, index) => (
              <li key={item.degree}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{item.year}</p>
                  <h3>{item.degree}</h3>
                  <p>{item.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p>Meet the studio her thinking shaped.</p>
          <h2 id="closing-title">From an igniting idea to a glowing era.</h2>
          <Link href="/about">
            Explore Swaddeep <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
