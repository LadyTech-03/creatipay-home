import Image from "next/image";

const solutionItems = [
  {
    icon: "/images/icon/our-solutions-icon-1.png",
    title: "Payments",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "/images/icon/our-solutions-icon-2.png",
    title: "Collections",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "/images/icon/our-solutions-icon-3.png",
    title: "Conversions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "/images/icon/our-solutions-icon-4.png",
    title: "Global Account",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
] as const;

export function OurSolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="bg-[url('/images/our-solutions-bg.png')] bg-top bg-no-repeat"
    >
      <div className="shell-container pb-24 pt-24 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold text-[#00fe83]">
            High speeds. Low fees. No hassle.
          </p>

          <h2
            id="solutions-heading"
            className="mt-3 text-6xl font-semibold leading-[1.15] text-white"
          >
            All Your Payments In One Place
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl leading-[1.45] text-white">
            Get used to low fees and great exchange rates on international money
            transfers.Expand your business worldwide
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {solutionItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] bg-white px-4 py-10 text-center shadow-[2px_3.464px_24px_0_rgba(106,105,194,0.25)]"
            >
              <Image src={item.icon} alt="" width={80} height={80} className="mx-auto" />
              <h3 className="mt-6 text-2xl font-semibold text-[#0c266c]">
                {item.title}
              </h3>
              <p className="mt-4 text-xl leading-[1.55] text-[#1f3a7f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
