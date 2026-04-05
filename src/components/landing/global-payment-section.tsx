import Image from "next/image";

const globalPaymentFeatures = [
  {
    icon: "/images/payment-banner-bg.png",
    title: "Secure Global Payouts",
    description:
      "Our Tokenized Infrastructure unlocks programmable, automated payments for highly secure and conditional settlements.",
  },
  {
    icon: "/images/icon/global-payment-icon-2.png",
    title: "Regulated & Compliant",
    description:
      "We operate within Regulated Remittance frameworks to ensure every transaction meets global financial standards.",
  },
  {
    icon: "/images/icon/global-payment-icon-3.png",
    title: "Intelligent FX Optimization",
    description:
      "We optimize currency conversion and payment paths to ensure you get the best possible rates with total fee transparency.",
  },
  {
    icon: "/images/icon/global-payment-icon-4.png",
    title: "Collaborative Distribution",
    description:
      "Our Multi-Party Revenue Distribution system automates complex splits, making it easy to pay collaborators instantly.",
  },
] as const;

export function GlobalPaymentSection() {
  return (
    <section id="global-payment" aria-labelledby="global-payment-heading" className="-mt-5 section-space">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold text-brand-700">Send money in a heartbeat</p>
          <h2
            id="global-payment-heading"
            className="mt-3 text-6xl font-semibold leading-[1.15] text-[#0c266c]"
          >
            The World At Your <br></br> Fingertips
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-2xl leading-[1.45] text-[#1f3a7f]">
            Sign up to start saving on international money transfers and currency
            exchange.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 xl:grid-cols-[0.834fr_1.166fr]">
          <div className="order-2 xl:order-1 xl:[direction:rtl]">
            <Image
              src="/images/global-payment-img.png"
              alt="Woman shopping online with digital payment illustrations"
              width={1200}
              height={936}
              className="h-auto w-full rounded-[20px] object-cover xl:w-[160%] xl:max-w-1020"
            />
          </div>

          <div className="order-1 grid gap-5 sm:grid-cols-2 xl:order-2">
            {globalPaymentFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[20px] border border-[#bec8e5] bg-white px-5 py-10 text-center transition hover:border-transparent hover:shadow-[0_12px_24px_rgba(106,105,194,0.25)]"
              >
                <Image
                  src={feature.icon}
                  alt=""
                  width={78}
                  height={78}
                  className="mx-auto"
                />
                <h3 className="mt-6 text-2xl font-semibold text-[#0c266c]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-xl leading-[1.55] text-[#1f3a7f]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
