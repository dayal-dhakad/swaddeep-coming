"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const navigation = [
  { label: "About", href: "/about" },
  { label: "About DR. Swati Shobha", href: "/swati-shobha" },
  { label: "What we do", href: "/about#what-we-do" },
  { label: "Work", href: "/work" },
  // { label: "Philosophy", href: "/#philosophy" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-[clamp(1.25rem,4vw,4.7rem)] py-[clamp(0.75rem,1.5vw,1.5rem)] bg-brand`}
    >
      <Link
        className="relative z-[102] grid aspect-[1937/812] w-[clamp(11rem,41.6vw,15rem)] place-items-center min-[781px]:w-[clamp(11rem,14vw,15rem)]"
        href="/"
        aria-label="Swaddeep home"
      >
        <Image
          src="https://ik.imagekit.io/swaddeep/homepage/download.png"
          alt="Swaddeep — Nurturing Your Brands"
          width={1937}
          height={812}
          preload
          className="size-full object-contain"
        />
      </Link>

      <div className="relative z-[102] flex items-center gap-[clamp(1rem,2.5vw,2.75rem)]">
        <Link
          className="hidden h-[2.11rem] w-[5.44rem] items-center justify-center rounded-[1.94rem] border-[0.06rem] border-solid border-white bg-transparent font-work-sans text-[0.78rem] leading-[1.11rem] font-normal text-white no-underline not-italic transition-colors duration-200 hover:bg-white hover:text-brand focus-visible:bg-white focus-visible:text-brand min-[781px]:flex"
          href="/#contact"
        >
          Hola!
        </Link>
        <button
          className="relative h-13 w-[clamp(2.8rem,11.8vw,4.25rem)] shrink-0 cursor-pointer border-0 bg-transparent p-0 text-white min-[781px]:h-12.5 min-[781px]:w-[clamp(2.8rem,3.6vw,3.55rem)]"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={`absolute right-0 h-px w-full bg-current transition-[top,transform,opacity] duration-300 ${isOpen ? "top-6 rotate-[-28deg]" : "top-[0.15rem] min-[781px]:top-[0.55rem]"}`}
          />
          <span
            className={`absolute top-[1.6rem] right-0 h-px w-full bg-current transition-opacity duration-200 min-[781px]:top-6 ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute right-0 h-px w-full bg-current transition-[top,transform,opacity] duration-300 ${isOpen ? "top-6 rotate-28" : "top-[3.05rem] min-[781px]:top-[2.45rem]"}`}
          />
        </button>
      </div>

      <div
        id="site-menu"
        className={`fixed inset-0 z-[101] flex flex-col items-start justify-start overflow-auto bg-brand px-[clamp(1.25rem,4vw,4.7rem)] pt-[clamp(8.25rem,12vw,10rem)] pb-[clamp(2rem,5vh,4rem)] transition-[transform,opacity,visibility] duration-650 ease-[cubic-bezier(0.77,0,0.18,1)] ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"}`}
      >
        <nav
          className="flex flex-col items-start"
          aria-label="Primary navigation"
        >
          {navigation.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              className={`relative block whitespace-nowrap font-bebas text-[clamp(1.8rem,7.5vw,2.8rem)] leading-[1.02] font-bold text-white/75 no-underline transition-[color,opacity,transform] duration-300 ease-linear hover:text-white focus-visible:text-white min-[781px]:text-[clamp(3rem,4.5vw,4.3rem)] min-[781px]:leading-[.98] ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${280 + index * 55}ms` : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav
          className="mt-auto flex flex-wrap items-center gap-3 pt-8 pb-4"
          aria-label="Social links"
        >
          <a
            href="https://www.instagram.com/swaddeep_packaging/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid size-12 place-items-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-brand focus-visible:bg-white focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <SiInstagram size={26} aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/message/4BRHRNCVOSPFK1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid size-12 place-items-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-brand focus-visible:bg-white focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <SiWhatsapp size={26} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
