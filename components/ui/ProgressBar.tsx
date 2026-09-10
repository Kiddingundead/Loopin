import { cn } from "@/lib/cn";

interface ProgressBarProps {
  percent: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ percent, label, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));
  return (
    <div className={cn("flex w-full items-center gap-3", className)}>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
        <div
          className="h-full rounded-full bg-primary-500"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="whitespace-nowrap text-sm text-neutral-500">
        {label ?? `${clamped}% complete`}
      </span>
    </div>
  );
}
