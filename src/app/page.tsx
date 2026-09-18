import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { TriangleMark } from "@/components/triangle-mark";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Swaddeep",
  description:
    "Swaddeep creates brand identities and FMCG packaging that communicate clearly, connect with people, and move markets.",
};

const principles = [
  {
    number: "01",
    title: (
      <>
        Observe
        <br />
        Yourself
      </>
    ),
  },
  {
    number: "02",
    title: (
      <>
        Design
        <br />
        Out
      </>
    ),
  },
  {
    number: "03",
    title: (
      <>
        Speak
        <br />
        Loud
      </>
    ),
  },
];

const marqueeItems = [
  "Packaging Designing",
  "FMCG Packaging",
  "Marcom",
  "Brand Identity",
  "Paper Printing",
  "Collateral Printing",
  "Market Research",
  "Brand Projection",
];

const responsibilityElements = [
  { name: "Earth", variant: "earth" },
  { name: "Fire", variant: "fire" },
  { name: "Water", variant: "water" },
  { name: "Air", variant: "air" },
  { name: "Sky", variant: "sky" },
] as const;

const clientLogos = [
  { title: "Kamal Brand", image: "/client-logos/1.png" },
  { title: "GBM", image: "/client-logos/2.png" },
  { title: "Shree Ganesh Besan Mill", image: "/client-logos/3.png" },
  { title: "Gangwal", image: "/client-logos/4.png" },
  { title: "Dharmesh Masti", image: "/client-logos/5.png" },
  { title: "Ashokraj Resorts and Farms", image: "/client-logos/6.png" },
  { title: "Shubh Life", image: "/client-logos/8.png" },
  { title: "Harsh Inn", image: "/client-logos/9.png" },
  { title: "The Royal Rasoi", image: "/client-logos/10.png" },
  { title: "Hotel Shivani Palace", image: "/client-logos/11.png" },
  { title: "Dollson", image: "/client-logos/12.png" },
  { title: "Citymall", image: "/client-logos/13.png" },
  { title: "Rajputana Vehicle", image: "/client-logos/14.png" },
  { title: "OM Gaurav Hygiene Products", image: "/client-logos/15.png" },
  { title: "DLN", image: "/client-logos/16.png" },
  { title: "Cream Cafe", image: "/client-logos/17.png" },
  { title: "Travel Konnect", image: "/client-logos/18.png" },
  { title: "The Royal Ecole", image: "/client-logos/19.png" },
  { title: "Shree SCM Developers", image: "/client-logos/20.png" },
  { title: "Chhabariya Dental Clinic", image: "/client-logos/21.png" },
  { title: "PWK", image: "/client-logos/22.png" },
  { title: "Chill N Grill", image: "/client-logos/23.png" },
  { title: "7th Heaven", image: "/client-logos/24.png" },
  { title: "Mopo", image: "/client-logos/25.png" },
  { title: "Lioness Agro", image: "/client-logos/26.png" },
  { title: "Jayanti Kalp Investments", image: "/client-logos/27.png" },
  { title: "Lotus Foam", image: "/client-logos/28.png" },
  { title: "Midtown Supermarket", image: "/client-logos/29.png" },
  { title: "Fast Food", image: "/client-logos/30.png" },
  { title: "Harsh Jewellers", image: "/client-logos/31.png" },
  { title: "Suraj Enterprises", image: "/client-logos/32.png" },
  { title: "Fashion House", image: "/client-logos/33.png" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="top">
        <section className={styles.hero} aria-labelledby="home-title">
          <p className={styles.heroKicker}>
            Brand identity · Packaging · Marcom
          </p>
          <div className={styles.heroTitle}>
            <p>Designs speak</p>
            <h1 id="home-title">Your Purpose</h1>
          </div>
          <span className={styles.heroPlane} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <p>
              We at Swaddeep help you find the identity and purpose behind your
              brand and packaging—making it unique enough to speak your language
              to the world.
            </p>
            <p>Your brand identity and designs speak the world within you.</p>
          </div>
          <span className={styles.heroGhost} aria-hidden="true">
            SPEAK
          </span>
          <a
            className={styles.explore}
            href="#work"
            aria-label="Explore our work"
          >
            <span>Explore</span>
            <TriangleMark variant="fire" className={styles.exploreTriangle} />
          </a>
        </section>

        <div id="work">
          <HeroSlider />
          <Link className={styles.workLink} href="/work">
            Explore Work <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <section className={styles.marquee} aria-label="Swaddeep capabilities">
          <div className={styles.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                aria-hidden={index >= marqueeItems.length}
                key={`${item}-${index}`}
              >
                {item}
                <Image
                  src="/paper-plane.svg"
                  alt=""
                  width={44}
                  height={44}
                  className={styles.marqueePlane}
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </section>

        <section
          className={styles.principles}
          aria-labelledby="principles-title"
        >
          <h2 className={styles.srOnly} id="principles-title">
            Our creative principles
          </h2>
          {principles.map((principle) => (
            <article className={styles.principle} key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              {/* {index < principles.length - 1 && <i aria-hidden="true" />} */}
            </article>
          ))}
        </section>

        <section className={styles.challenge} aria-labelledby="challenge-title">
          <div className={styles.challengeMark}>
            <TriangleMark
              variant="progress"
              className={styles.challengeMarkSymbol}
            />
            <span className={styles.challengeMarkLabel}>Progress</span>
          </div>
          <div className={styles.challengeCopy}>
            <h2 id="challenge-title">
              Do you struggle to find the right agency to visualise what is on
              your mind?
            </h2>
            <p>
              Not everyone understands you—friends, family, colleagues or
              collaborators. But there is someone who can understand your brand.
            </p>
            <p>
              Swaddeep reflects the hard work behind your brand and packaging.
              We absorb the vibe, pen it down, design it out and speak your
              language through art.
            </p>
          </div>
        </section>

        <section
          className={styles.capsule}
          aria-label="What a speaking identity requires"
        >
          <div className={styles.capsuleSymbol} aria-hidden="true">
            <TriangleMark
              variant="express"
              className={styles.capsuleSymbolEcho}
            />
            <TriangleMark
              variant="express"
              className={styles.capsuleSymbolMark}
            />
          </div>
          <h2>
            A speaking
            <br />
            identity requires
          </h2>
          <ul>
            <li>
              <strong>INSIGHT</strong> To Understand
            </li>
            <li>
              <strong>CLARITY</strong> In Communication
            </li>
            <li>
              <strong>COURAGE</strong> To Be Distinctive
            </li>
            <li>
              <strong>CRAFT</strong> Across Every Touchpoint
            </li>
          </ul>
        </section>

        <section
          className={styles.identity}
          id="what-we-do"
          aria-labelledby="identity-title"
        >
          <div className={styles.identitySticky}>
            <h2 id="identity-title">
              Brand identity
              <br />
              &amp; packaging
            </h2>
            <p>Designed to Communicate</p>
          </div>
          <div className={styles.identityDetails}>
            <article>
              <TriangleMark variant="explore" className={styles.triangle} />
              <h3>
                Identity with
                <br />a purpose
              </h3>
              <p>
                A brand identity is what you wish to serve to users, clients,
                consumers and everyone still in the pipeline. It turns what you
                believe into something people can see, feel and remember.
              </p>
              <ul>
                <li>Purpose &amp; Positioning</li>
                <li>Visual Identity</li>
                <li>Brand Language</li>
              </ul>
            </article>
            <article>
              <TriangleMark variant="create" className={styles.triangle} />
              <h3>
                Packaging that
                <br />
                speaks clearly
              </h3>
              <p>
                Swaddeep has worked with resorts, cafés, schools and especially
                FMCG packaging. We understand the challenge of reaching rural
                markets, resisting piracy and balancing sales with aesthetics.
              </p>
              <ul>
                <li>FMCG Packaging</li>
                <li>Market Communication</li>
                <li>Distinctive Shelf Presence</li>
              </ul>
            </article>
            <article>
              <TriangleMark variant="combine" className={styles.triangle} />
              <h3>
                Made for
                <br />
                real markets
              </h3>
              <p>
                Awareness of place, language, people and product preference is
                central to our process. When a strong product is not accepted, a
                design glitch may be creating a communication gap.
              </p>
              <p className={styles.pullQuote}>
                “Bad packaging is like an attractive face with a missing tooth.”
              </p>
            </article>
          </div>
        </section>

        <section
          className={styles.manifesto}
          // id="philosophy"
          aria-labelledby="manifesto-title"
        >
          <span>What cannot be measured</span>
          <h2 id="manifesto-title">is worth measuring first.</h2>
          <p>
            In a world of logic and logistics, graphs and taxes, art brings
            every factor to its peak. Emotion and aesthetics move the scales of
            finance, sales and ranking across rural and urban markets. Choose an
            agency that balances art with the business it creates.
          </p>
        </section>

        <section className={styles.aboutCta} aria-labelledby="about-cta-title">
          <h2 id="about-cta-title">
            From instinct
            <br /> to impact
          </h2>
          <div>
            <p>
              The right design does more than look good. It understands where
              you come from, makes your purpose visible and helps your product
              belong in the hands of the people it was made for.
            </p>
            <Link href="/about">
              Know more <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className={styles.clientele} aria-labelledby="clientele-title">
          <div className={styles.clienteleHeading}>
            <p>Selected collaborations</p>
            <h2 id="clientele-title">Our clientele</h2>
          </div>
          <div
            className={styles.logoGrid}
            role="region"
            aria-label="Client logos. Scroll horizontally to see all clients."
            tabIndex={0}
          >
            {clientLogos.map((img) => (
              <figure className={styles.logoCard} key={img.title}>
                <Image
                  src={img?.image}
                  alt={img?.title}
                  fill
                  sizes="(max-width: 640px) 120px, (max-width: 1120px) 160px, 208px"
                  className={styles.clientLogo}
                />
              </figure>
            ))}
          </div>
          <p className={styles.clienteleHint}>
            Scroll sideways to explore <span aria-hidden="true">↔</span>
          </p>
        </section>

        <ContactForm />

        <section
          className={styles.responsibility}
          id="responsibility"
          aria-labelledby="responsibility-title"
        >
          <div className={styles.responsibilityIntro}>
            <div className={styles.responsibilityHeading}>
              <p className={styles.responsibilityEyebrow}>Our responsibility</p>
              <h2 id="responsibility-title">
                Corporate<br />Social<br />
                <span>Responsibility</span>
              </h2>
            </div>
            <div className={styles.responsibilityCopy}>
              <p>
                Swaddeep works in packaging design and paper printing. We ask
                manufacturers to recycle packaging and its waste, and printers
                to recycle offcuts from laminates and packaging.
              </p>
              <p>
                In our paper printing work, we send waste for recycling or for
                use in luggage packaging. We also pass on invitations to people
                who turn them into envelopes.
              </p>
              <p>
                We strongly encourage everyone to recycle laminates and paper.
              </p>
              <p className={styles.responsibilityEmphasis}>
                We ask our associates to use earth friendly laminates so the
                planet stays as clean as our own homes.
              </p>
            </div>
          </div>
          <div className={styles.responsibilityElements}>
            <p className={styles.elementsEyebrow}>The five elements</p>
            <ul className={styles.elementList}>
              {responsibilityElements.map(({ name, variant }) => (
                <li className={styles.elementItem} key={variant}>
                  <TriangleMark
                    variant={variant}
                    className={styles.elementSymbol}
                  />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
