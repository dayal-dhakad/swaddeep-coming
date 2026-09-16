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

const interests = [
  "World cinema",
  "Creative writing & poetry",
  "10 m air-pistol shooting",
  "Swimming & weight lifting",
  "Meditation, long walks & yoga",
];

const principles = [
  {
    question: "Where does the real struggle begin?",
    answer: "When a product has to communicate clearly on the founder’s behalf.",
  },
  {
    question: "How do you understand a market?",
    answer: "Spend qualitative time inside it—combining observation with intellect.",
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

const consultingFor = [
  "Businesses moving from market entry to professional packaging",
  "Brands reassessing packaging or positioning after unsuccessful attempts",
  "Teams navigating copyright or intellectual-property concerns",
  "Products requiring precise print and colour planning",
  "Founders struggling to commit to a final name, identity, or artwork",
  "Industrialists preparing an accelerated market launch",
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
              A multidisciplinary thinker shaping regional brands with
              research, language, culture, and commercial clarity.
            </p>
            <a className={styles.scrollCue} href="#story">
              <span>Discover her story</span>
              <i aria-hidden="true">↓</i>
            </a>
          </div>

          <div className={styles.portraitWrap}>
            <span className={styles.index}>01 / Portrait</span>
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

        <section className={styles.story} id="story" aria-labelledby="story-title">
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

        <section className={styles.impact} aria-labelledby="impact-title">
          <div className={styles.impactLead}>
            <p className={styles.kicker}>Work with consequence</p>
            <h2 id="impact-title">Creative work, grounded in real markets.</h2>
          </div>
          <div className={styles.impactGrid}>
            <article>
              <span>100+</span>
              <p>Edible-oil projects referenced in the portfolio.</p>
            </article>
            <article>
              <span>2014</span>
              <p>The year her entrepreneurial journey at Swaddeep began.</p>
            </article>
            <article>
              <span>01</span>
              <p>Goal: empower branding and business understanding in rural areas.</p>
            </article>
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

        <section className={styles.consulting} aria-labelledby="consulting-title">
          <div className={styles.consultingHeading}>
            <p className={styles.kicker}>Brand consultation</p>
            <h2 id="consulting-title">Clarity before irreversible decisions.</h2>
            <p>
              Packaging and branding demand investment, time, instinct, market
              understanding, and the ability to adapt. Dr. Swati’s consulting
              practice is built around transparent discussion before those
              decisions become costly to reverse.
            </p>
          </div>
          <div className={styles.consultingPanel}>
            <p>Consulting is designed for</p>
            <ol>
              {consultingFor.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className={styles.consultingNote}>
              Her portfolio describes a balance of professional strategy and
              straight talk—helping clients understand market scenarios with
              transparency and a clear course of action.
            </p>
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

        <section className={styles.outside} aria-labelledby="outside-title">
          <div className={styles.outsideTitle}>
            <p className={styles.kicker}>Beyond the studio</p>
            <h2 id="outside-title">Curiosity has many forms.</h2>
          </div>
          <div className={styles.outsideGrid}>
            <article className={styles.languageCard}>
              <span>Languages</span>
              <h3>Hindi, Sindhi & English</h3>
              <p>Speaks all three; writes in Hindi and English.</p>
            </article>
            <article className={styles.interestsCard}>
              <span>Interests</span>
              <ul>
                {interests.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </article>
            <article className={styles.wordsCard}>
              <span>Words & publishing</span>
              <h3>Research papers and two anthologies.</h3>
              <p>
                A regular participant in national conferences and workshops;
                co-author of <em>Gestures</em> and <em>InkLinks</em>.
              </p>
            </article>
            <article className={styles.communityCard}>
              <span>Community</span>
              <h3>Ideas must move beyond the page.</h3>
              <p>
                Her portfolio records blood-donation initiatives in Seoni,
                including the women’s blood-donation awareness campaign.
              </p>
            </article>
          </div>
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
