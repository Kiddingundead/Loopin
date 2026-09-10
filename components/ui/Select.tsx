import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative flex h-11 w-full items-center">
        <select
          ref={ref}
          className={cn(
            "h-11 w-full appearance-none rounded-md border border-neutral-200 bg-white pl-4 pr-10 text-sm text-neutral-900 focus:border-primary-400 focus:outline-none",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-neutral-500" />
      </div>
    );
  }
);
Select.displayName = "Select";
