import Image from "next/image";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="grid min-h-screen place-items-center bg-[#f8f8f7]"
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/preloader.gif"
          alt=""
          width={220}
          height={220}
          unoptimized
          priority
        />
        <p className="text-sm font-medium text-[#5f6e9c]">Loading content...</p>
      </div>
      <span className="sr-only">Loading content</span>
    </div>
  );
}
