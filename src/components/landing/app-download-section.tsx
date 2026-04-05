import Image from "next/image";

const appFeatures = [
  "Login with fingerprint or Face ID.",
  "Simple few Taps to send/receive money",
  "View transaction history.",
  "Get instant App notifications.",
] as const;

export function AppDownloadSection() {
  return (
    <section id="app-download" aria-labelledby="app-download-heading" className="section-space-tight">
      <div className="shell-container">
        <div className="grid items-center gap-32 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 lg:order-1 lg:[direction:rtl]">
            <Image
              src="/images/app-download-img.png"
              alt="Mobile app interface preview"
              width={1000}
              height={1100}
              className="h-auto w-full lg:w-[130%] lg:max-w-none"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-2xl font-semibold text-brand-700">
              App Download <sup className="text-sm italic">(Coming Soon*)</sup>
            </p>

            <h2
              id="app-download-heading"
              className="mt-3 text-6xl font-semibold leading-[1.15] text-[#0c266c]"
            >
              Fast, Secure Money Transfers
            </h2>

            <p className="mt-5 text-xl leading-normal text-[#1f3a7f]">
              Access your account via your mobile phone. View balance, transfer
              funds, view transactions wherever you are.
            </p>

            <ul className="mt-6 space-y-4">
              {appFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-xl text-[#0c266c]">
                  <Image src="/images/icon/check.png" alt="" width={20} height={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href="#" className="transition hover:drop-shadow-[0_12px_24px_rgba(106,105,194,0.25)]">
                <Image src="/images/GooglePlay-btn.png" alt="Get it on Google Play" width={190} height={56} />
              </a>
              <a href="#" className="transition hover:drop-shadow-[0_12px_24px_rgba(106,105,194,0.25)]">
                <Image src="/images/apple-btn.png" alt="Download on the App Store" width={191} height={56} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
