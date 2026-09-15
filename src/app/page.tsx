import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
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
            Brand identity · Packaging · Communication
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
            aria-label="Explore our approach"
          >
            <span>Explore</span>
            <TriangleMark variant="fire" className={styles.exploreTriangle} />
          </a>
        </section>

        <div id="work">
          <HeroSlider />
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
                  src="/icon.png"
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
          <div className={styles.challengeMark} aria-hidden="true">
            <TriangleMark
              variant="progress"
              className={styles.challengeMarkSymbol}
            />
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
              <strong>INSIGHT</strong> to understand
            </li>
            <li>
              <strong>CLARITY</strong> in communication
            </li>
            <li>
              <strong>COURAGE</strong> to be distinctive
            </li>
            <li>
              <strong>CRAFT</strong> across every touchpoint
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
            <p>Designed to communicate</p>
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
                <li>Purpose &amp; positioning</li>
                <li>Visual identity</li>
                <li>Brand language</li>
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
                <li>FMCG packaging</li>
                <li>Market communication</li>
                <li>Distinctive shelf presence</li>
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
          id="philosophy"
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
            {/* <span aria-hidden="true">33</span> */}
          </div>
          <div className={styles.logoGrid}>
            {clientLogos.map((img, index) => (
              <figure
                className={styles.logoCard}
                key={`${img?.title}-${index}`}
              >
                <Image
                  src={img?.image}
                  alt={img?.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1120px) 33vw, 17vw"
                  className={styles.clientLogo}
                />
              </figure>
            ))}
          </div>
        </section>

        <ContactForm />
      </main>

      <footer className={styles.footer} id="site-footer">
        {/* <div className={styles.footerLead}>
          <p>Have something meaningful in mind?</p>
          <h2>Let your design</h2>
          <a href="mailto:swaddeep99@gmail.com">
            <span>speak</span>
            <i aria-hidden="true">↗</i>
          </a>
        </div> */}

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
            <Link href="/about">About</Link>
            <a href="#what-we-do">What we do</a>
            <a href="#work">Work</a>
            <a href="#philosophy">Philosophy</a>
          </nav>
          {/* <div className={styles.footerContact}>
            <span>Contact</span>
            <address>
              Behind Corp Bank, Barapatthar,
              <br />
              Seoni - 480661 (M.P)
              <br />
              <a href="tel:+919407053365">+91 9407053365</a>
              <br />
              <a href="mailto:swaddeep99@gmail.com">swaddeep99@gmail.com</a>
            </address>
          </div> */}
        </div>

        {/* Element symbols temporarily hidden. */}
        {/* <ElementMarks className={styles.elementMarks} /> */}

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
    </>
  );
}
