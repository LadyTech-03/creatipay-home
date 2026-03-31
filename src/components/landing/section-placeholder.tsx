import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

type SectionPlaceholderProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  placeholders: number;
  compact?: boolean;
};

export function SectionPlaceholder({
  id,
  eyebrow,
  title,
  description,
  placeholders,
  compact = false,
}: SectionPlaceholderProps) {
  const headingId = `${id}-heading`;

  return (
    <SectionShell
      id={id}
      aria-labelledby={headingId}
      spacing={compact ? "tight" : "default"}
      className=""
    >
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: placeholders }, (_, index) => (
          <Card key={index} className="surface-card">
            <CardHeader>
              <CardTitle className="text-base">Placeholder Card {index + 1}</CardTitle>
              <CardDescription>
                This block will be replaced with real {title.toLowerCase()} content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-2 w-2/3 rounded-full bg-brand-200" />
              <div className="mt-3 h-2 w-full rounded-full bg-muted" />
              <div className="mt-2 h-2 w-5/6 rounded-full bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
