import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  containerClassName?: string;
  spacing?: "default" | "tight" | "none";
};

const spacingClassNames: Record<NonNullable<SectionShellProps["spacing"]>, string> = {
  default: "section-space",
  tight: "section-space-tight",
  none: "",
};

export function SectionShell({
  children,
  className,
  containerClassName,
  spacing = "default",
  ...props
}: SectionShellProps) {
  return (
    <section className={cn(spacingClassNames[spacing], className)} {...props}>
      <div className={cn("shell-container", containerClassName)}>{children}</div>
    </section>
  );
}
