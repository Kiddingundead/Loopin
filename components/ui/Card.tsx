import { BarChart2, Clock, ExternalLink, FileText, Folder, Play } from "lucide-react";
import { cn } from "@/lib/cn";
import { Badge } from "./Badge";

function CardShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CourseCardProps {
  title: string;
  description: string;
  avatarLabel: string;
  icon?: React.ReactNode;
  iconBg?: string;
  level: string;
  duration: string;
  moduleCount: number;
  className?: string;
}

export function CourseCard({
  title,
  description,
  avatarLabel,
  icon,
  iconBg = "bg-neutral-900",
  level,
  duration,
  moduleCount,
  className,
}: CourseCardProps) {
  return (
    <CardShell className={className}>
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-sm font-bold text-white",
            iconBg
          )}
        >
          {icon ?? avatarLabel}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-neutral-500">
        <span className="flex items-center gap-1.5">
          <BarChart2 className="h-4 w-4" /> {level}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Folder className="h-4 w-4" /> {moduleCount} modules
        </span>
      </div>
    </CardShell>
  );
}

interface LessonCardProps {
  kind: "video" | "lesson";
  title: string;
  description: string;
  meta: string;
  actionLabel: string;
  className?: string;
}

export function LessonCard({ kind, title, description, meta, actionLabel, className }: LessonCardProps) {
  return (
    <CardShell className={className}>
      <Badge variant={kind}>{kind}</Badge>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{meta}</span>
        <span className="flex items-center gap-1.5 font-medium text-primary-500">
          {kind === "video" ? (
            <Play className="h-3.5 w-3.5 fill-primary-500" />
          ) : (
            <ExternalLink className="h-3.5 w-3.5" />
          )}
          {actionLabel}
        </span>
      </div>
    </CardShell>
  );
}

interface ResourceCardProps {
  title: string;
  description: string;
  meta: string;
  className?: string;
}

export function ResourceCard({ title, description, meta, className }: ResourceCardProps) {
  return (
    <CardShell className={className}>
      <div className="flex items-start gap-3">
        <FileText className="h-8 w-8 shrink-0 text-neutral-500" />
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{meta}</span>
        <ExternalLink className="h-4 w-4 text-primary-500" />
      </div>
    </CardShell>
  );
}
