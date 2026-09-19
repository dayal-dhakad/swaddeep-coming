import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TriangleMark } from "@/components/triangle-mark";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Swaddeep",
  description:
    "Discover Swaddeep’s 12-year journey and its awareness-led approach to brand identity, packaging, and marketing communication.",
};

const stakeholderNeeds = [
  {
    number: "01",
    title: "The Buyer",
    copy: "Sparking immediate trust and impulse on the shelf.",
  },
  {
    number: "02",
    title: "The Wholesaler & Dealer",
    copy: "Aligning with commercial margins and distributor confidence.",
  },
  {
    number: "03",
    title: "The Brand Owner",
    copy: "Creating an unwavering, doubt-free foundation.",
  },
];

const process = [
  {
    number: "01",
    title: "Market & Sales Decoding",
    copy: "We analyze real shelf-level physics—where products actually win or lose in high-friction retail environments.",
  },
  {
    number: "02",
    title: "Socio-Geographic & Cultural Resonance",
    copy: "We dig deep into local consumer psychology to align your brand with regional nuances and cultural truths.",
  },
  {
    number: "03",
    title: "Materializing Strategy into Identity",
    copy: "We translate strategy into tangible packaging and visual identity systems that build trust across generations.",
  },
];

const services = [
  "Brand Identity and Packaging",
  "Marcom & Copywriting",
  "Strategic Brand Planning",
  "Advertising Campaigns",
  "Invitation and Paper Printing",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="top">
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={styles.heroTopline}>
            <span>Est. 12 years ago</span>
            <span>India</span>
          </div>
          <div className={styles.heroTitle}>
            <p>About</p>
            <h1 id="about-title">Swaddeep</h1>
          </div>
          <div className={styles.heroBottom}>
            <Image
              src="/plane-outline-white.png"
              alt=""
              width={1254}
              height={1254}
              sizes="(max-width: 672px) 4.5rem, 8rem"
              className={styles.heroPlane}
            />
            <p>
              We stand at the beginning with ambitious founders and breathe new
              life into established FMCG producers.
            </p>
          </div>
        </section>

        <section className={styles.legacy} aria-labelledby="legacy-title">
          <p className={styles.eyebrow}>Our story</p>
          <div className={styles.legacyGrid}>
            <div className={styles.legacyTitle}>
              <h2 id="legacy-title">
                From Red Turtle
                <br />
                to Swaddeep
              </h2>
              <p className={styles.nameLockup}>
                <strong className={styles.nameSwati}>
                  <span className={styles.nameRed}>SWA</span>
                  <span className={styles.nameBlack}>TI</span>
                </strong>
                <span className={styles.nameSecondLine}>
                  <span className={styles.namePlus}>+</span>
                  <span className={styles.nameDeepa}>
                    <span className={styles.nameRed}>DEEP</span>
                    <span className={styles.nameBlack}>A</span>
                  </span>
                </span>
              </p>
            </div>
            <div className={styles.legacyCopy}>
              <p className={styles.lede}>A 12-year legacy.</p>
              <p>
                What started twelve years ago as Red Turtle Branding Solutions
                has grown into Swaddeep—a full-service agency providing brand
                identity, custom illustration, paper printing, and structural
                packaging design across India and export markets.
              </p>
              <p>
                Even as our reach expands into Tier-3 hubs and international
                borders, our founding principle stays firm: to stand at the
                beginning with ambitious founders and breathe new life into
                established FMCG producers.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.why} aria-labelledby="why-title">
          <div className={styles.whyIntro}>
            <p className={styles.eyebrow}>Why us?</p>
            <h2 id="why-title">Awareness before aesthetics.</h2>
            <p>
              Dr. Swati’s core philosophy is simple: deep awareness, slowing
              down, and complete alignment save brands from costly missteps. It
              bridges intuitive conviction with cold, hard commercial reality.
            </p>
          </div>
          <blockquote>
            If art doesn’t bring business,
            <br />
            it’s useless.
          </blockquote>
        </section>

        <section
          id="awareness"
          className={styles.awareness}
          aria-labelledby="awareness-title"
        >
          <div className={styles.awarenessLead}>
            <p className={styles.eyebrow}>The Swaddeep philosophy</p>
            <h2 id="awareness-title">
              We pay a heavy price in business when we act without{" "}
              <span>deep awareness.</span>
            </h2>
            <p>
              The finest packaging and brand identities aren’t rushed—they are
              born from slowing down, observing the market, and listening to the
              world within and around us. Any agency can deliver a pretty
              layout. But true packaging design must earn a unanimous “Yes”
              across the entire value chain.
            </p>
          </div>
          <div className={styles.stakeholders}>
            {stakeholderNeeds.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <p className={styles.decision}>
            If there is confusion or doubt, we discard it. You cannot build an
            enduring FMCG brand on shaky ground.
          </p>
        </section>

        <section className={styles.business} aria-labelledby="business-title">
          <TriangleMark
            variant="progress"
            className={`${styles.triangle} ${styles.businessStar}`}
          />
          <div>
            <p className={styles.eyebrow}>The commercial test</p>
            <h2 id="business-title">
              Our art brings business—or it doesn’t leave the studio.
            </h2>
          </div>
          <div className={styles.businessCopy}>
            <p>
              Launching an FMCG brand without exhaustive market research feels
              like climbing a mountain blindfolded. For 12 years, Swaddeep has
              served as that crucial safety net.
            </p>
            <p>
              We back your visual identity with rock-solid Marketing
              Communication (MarCom) and technical printing precision—saving you
              from catastrophic hidden costs, bad color choices, and unforced
              errors.
            </p>
            <strong>
              Partnering with Swaddeep isn’t an expense. It’s insurance for your
              capital.
            </strong>
          </div>
        </section>

        <section className={styles.physics} aria-labelledby="physics-title">
          <div className={styles.physicsHeading}>
            <p className={styles.eyebrow}>The physics of brand identity</p>
            <h2 id="physics-title">
              Quality gets you repeat customers. Design gets them to buy the
              first time.
            </h2>
            <TriangleMark
              variant="combine"
              className={`${styles.triangle} ${styles.physicsTriangle}`}
            />
          </div>
          <div className={styles.physicsBody}>
            <p>
              In the Indian market, we often hear two extremes: “If the quality
              is good, design doesn’t matter” or “If the design is pretty,
              people will buy.”
            </p>
            <p>
              The truth? A successful FMCG brand lives in the balance between
              internal substance and external projection—logic and emotion.
            </p>
            <p className={styles.question}>
              Are you parenting your brand from the inside out, or just reacting
              from the outside in?
            </p>
            <p>
              Finding your brand’s true identity isn’t an overnight trend. It’s
              built like the iconic border design of a Marie biscuit—a mix of
              distinct cultural recognition, consistent projection, and deep
              psychological connection with the consumer.
            </p>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.processHeader}>
            <p className={styles.eyebrow}>Our method</p>
            <h2 id="process-title">How we build brands that endure</h2>
          </div>
          <div className={styles.processList}>
            {process.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.noFix} aria-labelledby="no-fix-title">
          <div className={styles.noFixTitle}>
            <span>No</span>
            <h2 id="no-fix-title">Quick Fix</h2>
          </div>
          <div className={styles.noFixCopy}>
            <p className={styles.lede}>
              We don’t design for already-famous brands—we initiate them.
            </p>
            <p>
              Some agencies only work with established giants. Swaddeep builds
              brands from the ground up. From grassroots—naming them, working on
              the core to let its crust shine. From an igniting idea to the
              glowing era.
            </p>
            <p>
              From the local <em>kirana dukan</em> to national supermarket
              shelves, we turn regional FMCG products into market leaders. We
              believe building a lasting identity takes patience, strategy, and
              deep cultural roots.
            </p>
            <strong>
              No shortcuts, no quick fixes, at its own pace—just real brands
              built to last.
            </strong>
          </div>
        </section>

        <section className={styles.signature} aria-labelledby="signature-title">
          <div className={styles.signatureIntro}>
            <p>Our promise, in one line</p>
            {/* <span aria-hidden="true">01</span> */}
          </div>
          <h2 id="signature-title">
            <span>Product mein</span>
            <strong>dum,</strong>
            <span>Packaging mein</span>
            <strong>hum.</strong>
          </h2>
          <div className={styles.signatureSeal} aria-hidden="true">
            <i />
            <i />
            <i />
            <Image
              src="/plane-outline-white.png"
              alt=""
              width={64}
              height={64}
              className={styles.signaturePlane}
            />
          </div>
          <p className={styles.signatureNote}>
            Your product brings the substance.
            <br />
            We make sure the packaging carries its power.
          </p>
        </section>

        <section
          className={styles.lines}
          id="what-we-do"
          aria-labelledby="what-we-do-title"
        >
          <div className={styles.linesHeader}>
            <p className={styles.eyebrow}>Swaddeep services</p>
            <h2 id="what-we-do-title">What We Do</h2>
            <p>From the first strategic thought to the final printed piece.</p>
          </div>
          <div className={styles.servicePanel}>
            <ul aria-label="Our services">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div className={styles.contactCta}>
            <p>Ready to build a brand that lasts?</p>
            <Link href="mailto:swaddeep99@gmail.com">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
