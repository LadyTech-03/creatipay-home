import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroCounters = [
  { value: "50+", label: "Supported Currencies" },
  { value: "100+", label: "Available Countries" },
  { value: "70+", label: "Payment Methods" },
  { value: "7/24+", label: "Support Team" },
] as const;

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative">
      <div className="relative overflow-hidden border-b border-[#dfe6fb] h-[85vh]  bg-[#f2f3f9]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/images/banner-map.png')] bg-no-repeat bg-position-[top_1rem_right] bg-size-[min(50rem,95%)] md:bg-position-[top_1rem_right] md:bg-auto"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-[1%] left-0 hidden size-96 xl:block motion-safe:animate-[paylio-ripple-alt_4s_linear_infinite]">
            <Image src="/images/banner-box.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-[10%] left-1/2 hidden size-54 -translate-x-1/2 lg:block motion-safe:animate-[paylio-ripple-alt_5s_linear_infinite]">
            <Image src="/images/banner-rocket.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute right-0 bottom-[7%] hidden size-60 xl:size-96 lg:block motion-safe:animate-[paylio-ripple-alt_3s_linear_infinite]">
            <Image src="/images/banner-human.png" alt="" fill className="object-contain object-bottom" />
          </div>
          <div className="absolute -left-12 -top-24 hidden size-110 lg:block">
            <Image src="/images/banner-clock.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="shell-container relative z-10 pb-40 pt-16 sm:pt-20 lg:pb-52 lg:pt-24">
          <div className="relative">
            <div className="absolute left-[54%] top-0 hidden size-46 -translate-x-1/2 xl:block motion-safe:animate-[paylio-ripple_10s_linear_infinite]">
              <Image src="/images/banner-wallet.png" alt="" fill className="object-contain" />
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,430px)]">
              <div className="max-w-3xl">
                <p className="text-2xl font-semibold text-brand-700">
                  Trusted by over 3M customers
                </p>

                <h1
                  id="hero-heading"
                  className="text-7xl font-semibold leading-[1.06] tracking-tight text-[#0c266c]"
                >
                  <span className="block">Pay Anyone,</span>
                  <span className="block">Anywhere</span>
                </h1>

                <p className="mt-4 max-w-2xl text-[clamp(1.2rem,1.5vw,2rem)] leading-[1.35] text-[#1f3a7f]">
                  Quickly and easily send, receive and request money online with
                  CreatiPay.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={"https://creatipay.vercel.app/sign-up"}
                    className="inline-flex min-h-14 min-w-60 items-center justify-center rounded-xl bg-[#4743c9] px-7 text-xl font-semibold text-white transition-colors hover:bg-[#3b37b3]"
                  >
                    Open a Free Account
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex min-h-14 min-w-52 items-center justify-center rounded-xl border border-[#9eacd3] px-7 text-xl font-semibold text-[#0c266c] transition-colors hover:bg-white"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>

              <aside className="w-full max-w-107.5 justify-self-center rounded-xl bg-white p-5 shadow-[2px_3px_24px_0_rgba(106,105,194,0.25)] lg:justify-self-end">
                <div className="rounded-md bg-[#edefff] p-5">
                  <p className="text-base font-semibold text-[#0c266c]">
                    Live Currency or FX conversion will be implemented here (good rates, service fees and more to give the users a real feel of the actual platform and reasonable rates)...
                  </p>
                </div>

                <div className="mt-5 rounded-lg border border-dashed border-[#bcc8ee] bg-[#f7f8ff] px-4 py-10 text-center text-sm font-medium text-[#5d6fa5]">
                  
                </div>

                <Link
                  href="#"
                  className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#4743c9] px-6 text-xl font-semibold text-white transition-colors hover:bg-[#3b37b3]"
                >
                  Get Started
                  <ArrowRight className="size-5" />
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 -mt-20 pb-8">
        <div className="shell-container">
          <div className="mx-auto grid w-full grid-cols-2 gap-y-8 rounded-[20px] bg-white px-6 py-10 shadow-[2px_3px_24px_0_rgba(106,105,194,0.25)] md:w-[90%] md:grid-cols-4 md:px-10">
            {heroCounters.map((counter) => (
              <div key={counter.label} className="text-center">
                <p className="text-5xl font-semibold leading-none text-[#4743c9]">
                  {counter.value}
                </p>
                <p className="mt-3 text-[clamp(1rem,1.2vw,1.75rem)] font-medium text-[#0c266c]">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
