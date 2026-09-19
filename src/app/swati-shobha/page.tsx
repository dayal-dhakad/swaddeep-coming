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

const questions = [
  {
    question: "Where does the real struggle begin?",
    answer: ["It begins when our product starts communicating on our behalf."],
  },
  {
    question: "How do you choose the right agency?",
    answer: [
      "The right agency will not leave you confused with too many options. It will offer a clear solution and design for the market you want to reach.",
    ],
  },
  {
    question: "How do you understand the market?",
    answer: [
      "Be part of it for quality time. No one learns a market in a few weeks. Get in sync with it.",
    ],
  },
  {
    question: "How do you begin with product designing?",
    answer: [
      "Begin with clarity about your target audience, launch region, and product price. These help you understand how to brand it and plan its marketing communication. An associate should know why, when, where, how, and what about the product.",
    ],
  },
  {
    question: "How about using AI instead of hiring an agency?",
    answer: [
      "Bingo! Go ahead. Put a few prompts into AI and other software and apps. They do not understand the market, darling. New tools will keep coming, but they can divert us from the authenticity of artists and creative minds. They are not roadmaps or signboards; beware of instant gratification that pulls you away from the goal.",
    ],
  },
  {
    question: "How do you become popular without relying on marketing?",
    answer: [
      "Write your story. Everyone is a story. People want to know how you came up with your ideas, not only what those ideas and products are.",
    ],
  },
  {
    question: "What about failures after branding and packaging design?",
    answer: [
      "There can be many reasons. A client once applied strategies from abroad to a regional market and wanted pastel shades in a small town. It failed. To help people accept your strategies, make a place in their hearts. Listen to your consumers, then gradually bring them with you.",
      "Market research can feel like diving into the Pacific Ocean for a pearl or blasting through coal mines for one diamond. Even leading companies have failed after decent packaging. Packaging is like clothing: sometimes you buy the wrong outfit and never wear it. The same can happen to your product. Relax, learn from it, and work toward better sales.",
    ],
  },
];

const consultingMilestones = [
  "100 plus Edible Oil Brand",
  "350 plus Clients",
  "1 agency majorly focusing on Rural and Regional Brand Development",
  "12 years of Swaddeep but 16 years of experiences",
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

        <section className={styles.statement} aria-labelledby="statement-title">
          <div className={styles.statementContent}>
            <p className={styles.kicker}>A layered education</p>
            <h2 className={styles.statementLine} id="statement-title">
              Literature.
              <br />
              Psychology &
              <br />
              <span>Advertising.</span>
            </h2>
            <p className={styles.statementCopy}>
              Her academic path moves between biotechnology, mass communication,
              literature, and advertising—an unusual combination that informs
              how she reads both products and people.
            </p>
          </div>
          <div className={styles.statementVisual} aria-hidden="true">
            <TriangleMark
              variant="combine"
              className={styles.statementSymbolSmall}
            />
            <TriangleMark
              variant="combine"
              className={styles.statementSymbolLarge}
            />
          </div>
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

        <section
          className={styles.consulting}
          id="consulting"
          aria-labelledby="consulting-title"
        >
          <div className={styles.consultingTop}>
            <div className={styles.consultingPortrait}>
              <Image
                src="https://ik.imagekit.io/swaddeep/caricature/49588708-fac3-4dc8-833c-32a9780c16cf.jpg"
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
                  <span>
                    soybean oil brands with packaging designed in Madhya Pradesh
                  </span>
                </p>
              </div>

              <div className={styles.consultingBrands}>
                <p className={styles.kicker}>FMCG consulting</p>
                <h3>To be continued.</h3>
                <ul>
                  {consultingMilestones.map((milestone, index) => (
                    <li key={milestone}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{milestone}</span>
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

        <section className={styles.qa} aria-labelledby="qa-title">
          <div className={styles.qaIntro}>
            <p className={styles.kicker}>In conversation</p>
            <h2 id="qa-title">Namaste!</h2>
            <div className={styles.qaMotif} aria-hidden="true">
              <TriangleMark variant="progress" className={styles.qaMotifMark} />
            </div>
          </div>
          <div className={styles.qaList}>
            {questions.map((item, index) => (
              <details
                name="swati-questions"
                open={index === 0}
                key={item.question}
              >
                <summary>
                  <span>{item.question}</span>
                  <span className={styles.qaIcon} aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className={styles.qaAnswer}>
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p>Her point of view</p>
          <h2 id="closing-title">
            Building regional brands
            <br />
            with the clarity to become
            <em>visible.</em>
          </h2>
          <Link href="/about">
            Explore Swaddeep <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
