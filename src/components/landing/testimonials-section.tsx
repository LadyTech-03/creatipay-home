"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Courtney Henry",
    role: "Balance Studio",
    image: "/images/testimonials-img-2.png",
    quote:
      '"Payuno has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Payuno to businesses with regular overseas payments."',
  },
  {
    name: "Aspen Press",
    role: "Web Designer",
    image: "/images/testimonials-img-1.png",
    quote:
      '"Payuno has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Payuno to businesses with regular overseas payments."',
  },
  {
    name: "Courtney Henry",
    role: "Balance Studio",
    image: "/images/testimonials-img-2.png",
    quote:
      '"Payuno has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Payuno to businesses with regular overseas payments."',
  },
  {
    name: "Paul Howell",
    role: "President of Sales",
    image: "/images/testimonials-img-3.png",
    quote:
      '"Payuno has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Payuno to businesses with regular overseas payments."',
  },
];

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

function TestimonialCard({
  testimonial,
  muted = false,
}: {
  testimonial: Testimonial;
  muted?: boolean;
}) {
  return (
    <article
      className={cn(
        "rounded-[20px] bg-white px-8 py-8 shadow-[2px_3.464px_24px_0_rgba(106,105,194,0.25)] transition-opacity",
        muted && "opacity-35",
      )}
    >
      <div className="flex items-center gap-2 text-[#e4ab19]" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>

      <h3 className="pb-7 pt-6 text-2xl font-semibold text-[#0c266c]">
        Great Fast Reliable Service
      </h3>

      <p className="text-2xl leading-[1.55] text-[#1f3a7f]">
        {testimonial.quote}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={54}
          height={54}
          className="rounded-full"
        />

        <div>
          <p className="text-xl font-semibold text-[#0c266c]">
            {testimonial.name}
          </p>
          <p className="text-xl text-[#4743c9]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const visibleDesktopIndexes = useMemo(() => {
    const total = testimonials.length;
    return [
      wrapIndex(activeIndex - 1, total),
      wrapIndex(activeIndex, total),
      wrapIndex(activeIndex + 1, total),
    ];
  }, [activeIndex]);

  const goPrevious = () => {
    setActiveIndex((current) => wrapIndex(current - 1, testimonials.length));
  };

  const goNext = () => {
    setActiveIndex((current) => wrapIndex(current + 1, testimonials.length));
  };

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-[#f6f5ff] section-space">
      <div className="md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold text-brand-700">
            Testimonials
          </p>

          <h2
            id="testimonials-heading"
            className="mt-3 text-6xl font-semibold leading-[1.15] text-[#0c266c]"
          >
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-[1.45] text-[#1f3a7f]">
            245m+ happy clients all around the world. Don&apos;t just take our word for it
          </p>
        </div>

        <div className="mt-12 lg:hidden">
          <TestimonialCard testimonial={testimonials[activeIndex]} />
        </div>

        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          {visibleDesktopIndexes.map((index, slot) => (
            <TestimonialCard
              key={`${testimonials[index].name}-${slot}`}
              testimonial={testimonials[index]}
              muted={slot !== 1}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="View previous testimonial"
            className="inline-flex h-10 w-[70px] items-center justify-center rounded-[10px] bg-white transition hover:shadow-[0_12px_24px_rgba(106,105,194,0.25)]"
          >
            <Image src="/images/icon/left-arrow.png" alt="" width={30} height={20} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="View next testimonial"
            className="inline-flex h-10 w-17.5 items-center justify-center rounded-[10px] bg-white transition hover:shadow-[0_12px_24px_rgba(106,105,194,0.25)]"
          >
            <Image src="/images/icon/right-arrow.png" alt="" width={30} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
