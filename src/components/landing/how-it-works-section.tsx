import Image from "next/image";

const howItWorksSteps = [
  {
    icon: "/images/icon/how-works-icon-1.png",
    title: "Register for free",
    description: "Simply sign up online for free and verify your identity",
    arrow: "/images/icon/how-works-arrow-1.png",
    arrowClassName: "-right-12 top-[30%]",
  },
  {
    icon: "/images/icon/how-works-icon-2.png",
    title: "Set up your transfer",
    description: "Connect bank or add payment method or create a wallet",
    arrow: "/images/icon/how-works-arrow-2.png",
    arrowClassName: "-right-12 top-[25%]",
  },
  {
    icon: "/images/icon/how-works-icon-3.png",
    title: "Make your payment",
    description: "Send and receive funds with ease",
    arrow: "/images/icon/how-works-arrow-1.png",
    arrowClassName: "-right-12 top-[30%]",
  },
  {
    icon: "/images/icon/how-works-icon-4.png",
    title: "You're all done!",
    description: "We inform you when the money has been sent/received",
    arrow: null,
    arrowClassName: "",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="section-space">
      <div className="shell-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl font-semibold text-brand-700">
            How it works?
          </p>

          <h2
            id="how-it-works-heading"
            className="mt-3 text-6xl font-semibold leading-[1.15] text-[#0c266c]"
          >
            Just few steps to start
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl leading-[1.45] text-[#1f3a7f]">
            It&apos;s easier than you think. Follow these simple steps
          </p>
        </div>

        <div className="mt-12 grid gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <article key={step.title} className="relative px-4 text-center">
              <Image src={step.icon} alt="" width={60} height={60} className="mx-auto" />

              {step.arrow ? (
                <Image
                  src={step.arrow}
                  alt=""
                  width={90}
                  height={90}
                  className={`absolute ${step.arrowClassName} hidden xl:block`}
                />
              ) : null}

              <h3 className="mt-6 text-2xl font-semibold text-[#0c266c]">
                {step.title}
              </h3>
              <p className="mt-4 text-xl leading-[1.55] text-[#1f3a7f]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
