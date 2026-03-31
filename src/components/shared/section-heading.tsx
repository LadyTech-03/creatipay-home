import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  titleAs = "h2",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const TitleTag = titleAs;
  const centered = align === "center";

  return (
    <header className={cn(centered && "mx-auto text-center", className)}>
      {eyebrow ? <p className="text-eyebrow">{eyebrow}</p> : null}
      <TitleTag id={id} className={cn("mt-3 text-3xl sm:text-4xl", titleClassName)}>
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base leading-7 text-muted-foreground",
            centered && "mx-auto max-w-3xl",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
