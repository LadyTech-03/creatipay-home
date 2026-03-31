import Link from "next/link";

export function HelpCenterSupportCta() {
  return (
    <section className="pb-20 pt-4 md:pb-36">
      <div className="shell-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold text-brand-700">
            Let us help you!
          </p>

          <h2 className="mt-3 text-6xl font-semibold leading-[1.16] text-[#0c266c]">
            Didn&apos;t find what you were looking for?
          </h2>

          <div className="mt-8">
            <Link
              href="/help-center"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-[#4743c9] px-8 text-lg font-semibold text-white transition hover:bg-[#3f3bb8]"
            >
              Submit a request
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
