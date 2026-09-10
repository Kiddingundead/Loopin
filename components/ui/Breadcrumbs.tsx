import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface BreadcrumbsProps {
  items: string[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2 text-sm text-neutral-500", className)}>
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
          {item}
        </span>
      ))}
    </div>
  );
}
