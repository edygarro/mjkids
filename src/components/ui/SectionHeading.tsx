import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4",
      align === 'center' ? "text-center mx-auto max-w-2xl" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 rounded-full bg-brand-orange",
        align === 'center' ? "mx-auto" : ""
      )} />
    </div>
  );
}
