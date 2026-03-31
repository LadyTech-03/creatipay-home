import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  footerLegalLinks,
  footerPrimaryLinks,
  socialLinks,
} from "@/content/navigation";
import Link from "next/link";
import BackToTopButton from "../others/back-to-top-button";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" aria-labelledby="newsletter-title" className="relative mt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-28 bg-[#072d54]"
      />

      <div className="shell-container relative pb-10">
        <section
          className="relative flex flex-col items-center justify-center z-10 mx-auto -mt-16 h-72 max-w-5xl rounded-3xl px-5 py-8 text-white shadow-lifted sm:px-10 sm:py-10 md:-mt-20"
          style={{
            backgroundColor: "#4743c9",
            backgroundImage:
              "url('/images/footer-bg-left.png'), url('/images/footer-bg-right.png')",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "left 20px center, right bottom",
          }}
        >
          <h2
            id="newsletter-title"
            className="text-center text-3xl font-bold sm:text-4xl"
          >
            Subscribe to Our Newsletter
          </h2>

          <form className="mx-auto mt-5 w-full md:w-3/5" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Your Email Address
            </label>
            <div className="relative rounded-full border border-[#e2e2ea] bg-white p-2">
              <Input
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                placeholder="Your Email Address"
                className="h-10 rounded-full border-transparent bg-transparent px-4 pr-14 text-xl text-brand-900 placeholder:text-[#6f82af] focus-visible:border-transparent focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="absolute top-1/2 right-2 size-10 -translate-y-1/2 rounded-full bg-[#4a46cc] text-white hover:bg-[#3f3bb8]"
                aria-label="Subscribe"
              >
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </form>
        </section>

        <div className="mt-8 text-white md:mt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {footerPrimaryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base font-semibold transition-colors hover:text-brand-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-3" aria-label="Social links">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="place-items-center"
                    aria-label={item.label}
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      width={26}
                      height={26}
                      className="hover:scale-110 transition-transform"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/30" />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base text-white/95">
              Copyright {"\u00a9"} {currentYear} Payuno. All Rights Reserved.
            </p>

            <ul className="flex items-center gap-6">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base font-semibold transition-colors hover:text-brand-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <BackToTopButton />
      </div>
    </footer>
  );
}
