import { CheckCircle2, Lock, LoaderCircle, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type StatusVariant = "in-progress" | "completed" | "now-playing" | "locked";

interface StatusIndicatorProps {
  variant: StatusVariant;
  label?: string;
  className?: string;
}

const defaultLabels: Record<StatusVariant, string> = {
  "in-progress": "In Progress",
  completed: "Completed",
  "now-playing": "Now Playing",
  locked: "Locked",
};

export function StatusIndicator({ variant, label, className }: StatusIndicatorProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-sm text-neutral-900", className)}>
      {variant === "in-progress" && <LoaderCircle className="h-4 w-4 text-primary-500" />}
      {variant === "completed" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
      {variant === "now-playing" && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-500">
          <Play className="h-2.5 w-2.5 fill-white text-white" />
        </span>
      )}
      {variant === "locked" && <Lock className="h-4 w-4 text-neutral-500" />}
      {label ?? defaultLabels[variant]}
    </span>
  );
}
