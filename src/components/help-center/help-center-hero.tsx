import Image from "next/image";

export function HelpCenterHero() {
  return (
    <section
      aria-labelledby="help-center-heading"
      className="relative overflow-hidden bg-[#10285c]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/integrations-banner-bg.png')] bg-bottom-right bg-no-repeat"
      />

      <div className="shell-container relative z-10 py-20 text-center">
        <h1
          id="help-center-heading"
          className="text-4xl font-semibold leading-tight text-white"
        >
          How can we help you today?
        </h1>

        <form className="mx-auto mt-8 max-w-4xl" role="search" aria-label="Search knowledge base">
          <label className="relative block">
            <Image
              src="/images/icon/search-icon.png"
              alt=""
              width={20}
              height={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2"
            />
            <input
              type="search"
              placeholder="Search Knowledge base"
              className="h-14 w-full rounded-xl border border-[#86aaee] bg-[#38578f] pl-16 pr-5 text-lg text-white placeholder:text-white/55 focus:outline-none"
            />
          </label>
        </form>
      </div>
    </section>
  );
}
