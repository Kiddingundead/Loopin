import { cn } from "@/lib/cn";

export function VertexLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-6 w-6 text-primary-500", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3h6l4 12 4-12h6l-8 18h-4L2 3z" fill="currentColor" />
    </svg>
  );
}
