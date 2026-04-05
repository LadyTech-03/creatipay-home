"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  businessHelpTopics,
  personalHelpTopics,
  type HelpCenterGroup,
} from "@/content/help-center";

export function HelpCenterTopicsSection() {
  const [activeTab, setActiveTab] = useState<HelpCenterGroup>("business");

  const topics = useMemo(
    () => (activeTab === "personal" ? personalHelpTopics : businessHelpTopics),
    [activeTab],
  );

  return (
    <section className="relative -mt-10 pb-24">
      <div className="shell-container">
        {/* <div className="flex justify-center">
          <div className="inline-flex rounded-[30px] border border-[#e7e7ff] bg-white px-2 py-2">
            <button
              type="button"
              onClick={() => setActiveTab("personal")}
              className={`min-w-40 rounded-[30px] px-2 py-3 text-base font-semibold capitalize transition ${
                activeTab === "personal"
                  ? "bg-[#4743c9] text-white shadow-[2px_3.464px_20px_0_rgba(30,48,111,0.1)]"
                  : "bg-white text-[#1f3a7f] shadow-[2px_3.464px_20px_0_rgba(30,48,111,0.1)]"
              }`}
            >
              personal
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("business")}
              className={`ml-4 min-w-40 rounded-[30px] px-2 py-3 text-base font-semibold capitalize transition ${
                activeTab === "business"
                  ? "bg-[#4743c9] text-white shadow-[2px_3.464px_20px_0_rgba(30,48,111,0.1)]"
                  : "bg-white text-[#1f3a7f] shadow-[2px_3.464px_20px_0_rgba(30,48,111,0.1)]"
              }`}
            >
              business
            </button>
          </div>
        </div> */}

        <div className="mt-20 grid justify-center gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={`${activeTab}-${topic.slug}`}
              href={`/help-center/${topic.slug}`}
              className="rounded-[30px] border border-[#cadfff] bg-white px-3 py-12 text-center transition hover:border-transparent hover:shadow-[2px_3.464px_24px_0_rgba(0,0,3,0.3)]"
            >
              <Image
                src={topic.icon}
                alt=""
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="mt-6 text-xl font-semibold text-[#0c266c]">
                {topic.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
