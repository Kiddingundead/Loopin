import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

function pageItems(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "ellipsis", total];
  if (current >= total - 2) return [1, "ellipsis", total - 2, total - 1, total];
  return [1, "ellipsis", current, "ellipsis", total];
}

export function Pagination({ currentPage, totalPages, className }: PaginationProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-sm text-neutral-500 disabled:opacity-40"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pageItems(currentPage, totalPages).map((item, index) =>
        item === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-1 text-sm text-neutral-500">
            ...
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-sm text-sm font-medium",
              item === currentPage
                ? "border border-primary-500 text-primary-500"
                : "text-neutral-700 hover:bg-neutral-50"
            )}
          >
            {item}
          </button>
        )
      )}
      <button
        type="button"
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-sm text-neutral-500 disabled:opacity-40"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
