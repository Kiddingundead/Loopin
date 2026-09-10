import { cn } from "@/lib/cn";
import { VertexLogo } from "./VertexLogo";

interface NavBarProps {
  activeHref?: string;
  className?: string;
}

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/my-learning", label: "My Learning" },
];

export function NavBar({ activeHref = "/courses", className }: NavBarProps) {
  return (
    <nav className={cn("flex items-center gap-10", className)}>
      <span className="flex items-center gap-2 font-display text-lg font-bold text-neutral-900">
        <VertexLogo />
        Vertex
      </span>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium",
              link.href === activeHref ? "text-primary-500" : "text-neutral-700"
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
