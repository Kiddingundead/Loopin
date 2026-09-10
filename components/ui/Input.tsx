import { InputHTMLAttributes, forwardRef } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon = true, hint, ...props }, ref) => {
    return (
      <div className="relative flex h-11 w-full items-center">
        {icon && (
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-neutral-500" />
        )}
        <input
          ref={ref}
          className={cn(
            "h-11 w-full rounded-md border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-primary-400 focus:outline-none",
            icon ? "pl-11" : "pl-4",
            hint ? "pr-14" : "pr-4",
            className
          )}
          {...props}
        />
        {hint && (
          <span className="pointer-events-none absolute right-4 rounded border border-neutral-200 px-1.5 py-0.5 text-xs text-neutral-500">
            {hint}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
