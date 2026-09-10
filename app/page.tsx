import Link from "next/link";
import { ArrowRight, Bell, Star } from "lucide-react";
import { CourseCard } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { VertexLogo } from "@/components/ui/VertexLogo";

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-500" fill="currentColor">
      <path d="M22.5 9.6c-.6-.4-1.5-.5-2.3-.4-.1-.9-.6-1.6-1.4-2.2l-.4-.3-.3.4c-.4.5-.6 1.3-.5 2 0 .3.1.7.3 1-.3.2-.6.3-.9.4H2.8c-.2 1.4 0 2.9.7 4.2.8 1.5 2.1 2.4 3.8 2.7.7.1 1.4.2 2.1.2 3.1 0 5.5-1 7-2.9.7-.9 1.2-1.9 1.6-3h.2c1 0 2-.2 2.6-.9.2-.2.4-.5.5-.7l.1-.3-.2-.2z" />
      <rect x="4.6" y="10.4" width="1.9" height="1.7" />
      <rect x="7" y="10.4" width="1.9" height="1.7" />
      <rect x="9.4" y="10.4" width="1.9" height="1.7" />
      <rect x="9.4" y="8.2" width="1.9" height="1.7" />
      <rect x="11.8" y="10.4" width="1.9" height="1.7" />
      <rect x="11.8" y="8.2" width="1.9" height="1.7" />
      <rect x="14.2" y="10.4" width="1.9" height="1.7" />
    </svg>
  );
}

const courses = [
  {
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    avatarLabel: "N",
    iconBg: "bg-neutral-900",
    level: "Intermediate",
    duration: "18h 24m",
    moduleCount: 12,
  },
  {
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    avatarLabel: "",
    icon: <DockerIcon />,
    iconBg: "bg-neutral-50",
    level: "Beginner",
    duration: "10h 12m",
    moduleCount: 8,
  },
  {
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    avatarLabel: "TS",
    iconBg: "bg-blue-600",
    level: "Intermediate",
    duration: "14h 36m",
    moduleCount: 10,
  },
];

const barHeights = [40, 64, 96, 64, 40, 20, 88, 120, 72, 96, 56];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <div className="mx-auto flex w-full max-w-360 flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 sm:px-10">
        <div className="flex items-center gap-10">
          <span className="flex items-center gap-2 font-display text-lg font-bold text-neutral-900">
            <VertexLogo />
            Vertex
          </span>
          <nav className="hidden items-center gap-6 sm:flex">
            <Link href="/courses" className="text-sm font-medium text-neutral-700">
              Courses
            </Link>
            <Link href="/my-learning" className="text-sm font-medium text-neutral-700">
              My Learning
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-50"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
            <svg viewBox="0 0 40 40" className="h-full w-full text-neutral-400" fill="currentColor">
              <circle cx="20" cy="15" r="7" />
              <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" />
            </svg>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="flex flex-col items-center gap-6 px-6 py-24 text-center sm:px-10">
          <span className="rounded-full border border-primary-200 bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
            Intelligent Learning
          </span>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.1] text-neutral-900 sm:text-6xl lg:text-[64px]">
            Search your learning
            <br />
            in plain English.
          </h1>
          <p className="max-w-xl text-base text-neutral-500 sm:text-lg">
            Vertex understands what you want to learn and finds the exact lessons across all your
            courses.
          </p>
          <Link
            href="/courses"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-primary-500 px-4 text-sm font-medium text-white transition-colors hover:bg-primary-400"
          >
            Explore Courses
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-4 w-full max-w-xl">
            <Input
              type="search"
              placeholder="Ask anything about your learning..."
              hint="⌘K"
              className="h-14 rounded-xl text-base shadow-md"
            />
          </div>
        </section>

        <section className="border-t border-neutral-200 px-6 py-16 sm:px-10">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-neutral-900">All Courses</h2>
              <Link
                href="/courses"
                className="flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-400"
              >
                View all courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        <div className="flex items-center gap-4 px-6 py-4 sm:px-10">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="flex shrink-0 items-center gap-2 text-sm text-neutral-500">
            <Star className="h-4 w-4 text-primary-400" />
            New courses and lessons added every week.
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div
          aria-hidden
          className="flex h-40 items-end justify-center gap-3 overflow-hidden px-6 pb-0 sm:gap-5 sm:px-10"
        >
          {barHeights.map((height, i) => (
            <div
              key={i}
              style={{
                height: `${height}px`,
                background: "linear-gradient(180deg, var(--color-primary-300), var(--color-primary-100) 70%, transparent)",
              }}
              className="w-8 shrink-0 rounded-t-sm sm:w-12"
            />
          ))}
        </div>
      </main>
      </div>
    </div>
  );
}
