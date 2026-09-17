"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "About DR. Swati Shobha", href: "/swati-shobha" },
  { label: "What we do", href: "/about#what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Contact", href: "/#contact" },
];

export function FooterNavigation({
  groupLabelClassName,
}: {
  groupLabelClassName: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Footer navigation">
      <p className={groupLabelClassName}>Explore</p>
      {links
        .filter((link) => link.href !== pathname)
        .map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
    </nav>
  );
}
