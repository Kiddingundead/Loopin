import {
  Bell,
  Bookmark,
  Clock,
  FileText,
  Search,
  User,
  Play,
  BarChart2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CourseCard, LessonCard, ResourceCard } from "@/components/ui/Card";
import { NavBar } from "@/components/ui/NavBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pagination } from "@/components/ui/Pagination";

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
      <h2 className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-neutral-900">
        <span className="text-primary-500">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-16 rounded-md sm:h-20 sm:w-20"
        style={{ backgroundColor: hex }}
      />
      <div className="text-xs text-neutral-500">
        <div className="font-medium text-neutral-900">{name}</div>
        {hex}
      </div>
    </div>
  );
}

const typeScale = [
  { style: "Display 1", font: "Playfair Display", size: "48 / 56", weight: "Bold", use: "Page titles" },
  { style: "Display 2", font: "Playfair Display", size: "36 / 44", weight: "Bold", use: "Section titles" },
  { style: "Heading 1", font: "Inter", size: "28 / 36", weight: "Semi Bold", use: "Card titles" },
  { style: "Heading 2", font: "Inter", size: "22 / 30", weight: "Semi Bold", use: "Sub section" },
  { style: "Heading 3", font: "Inter", size: "18 / 26", weight: "Medium", use: "Small titles" },
  { style: "Body Large", font: "Inter", size: "16 / 24", weight: "Regular", use: "Body copy" },
  { style: "Body", font: "Inter", size: "14 / 20", weight: "Regular", use: "Supporting text" },
  { style: "Small", font: "Inter", size: "12 / 16", weight: "Regular", use: "Captions, meta" },
];

const spacingScale = [
  { px: 4, rem: "0.25rem" },
  { px: 8, rem: "0.5rem" },
  { px: 12, rem: "0.75rem" },
  { px: 16, rem: "1rem" },
  { px: 24, rem: "1.5rem" },
  { px: 32, rem: "2rem" },
  { px: 40, rem: "2.5rem" },
  { px: 48, rem: "3rem" },
  { px: 64, rem: "4rem" },
];

const radiusScale = [
  { name: "4px (xs)", className: "rounded-xs" },
  { name: "8px (sm)", className: "rounded-sm" },
  { name: "12px (md)", className: "rounded-md" },
  { name: "16px (lg)", className: "rounded-lg" },
  { name: "24px (xl)", className: "rounded-xl" },
  { name: "Full (circle)", className: "rounded-full" },
];

const shadowScale = [
  { name: "Sm", className: "shadow-sm", value: "0 1px 2px 0 rgba(15, 23, 42, 0.05)" },
  { name: "Md", className: "shadow-md", value: "0 4px 12px -2px rgba(15, 23, 42, 0.08)" },
  { name: "Lg", className: "shadow-lg", value: "0 12px 24px -4px rgba(15, 23, 42, 0.1)" },
  { name: "Xl", className: "shadow-xl", value: "0 20px 40px -8px rgba(15, 23, 42, 0.12)" },
];

export default function StyleGuidePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 bg-neutral-50 p-4 sm:p-8">
      <header>
        <h1 className="font-display text-4xl font-bold text-neutral-900 sm:text-5xl">
          Vertex Design System
        </h1>
        <p className="mt-2 max-w-xl text-sm text-neutral-500 sm:text-base">
          A unified design language for the Vertex learning platform. Clean, modern and focused
          on clarity, consistency and intuitive learning experiences.
        </p>
      </header>

      <Section number="01" title="Colors">
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-700">Primary</p>
            <div className="flex flex-wrap gap-4">
              <Swatch name="Primary 500" hex="#F97316" />
              <Swatch name="Primary 400" hex="#FB923C" />
              <Swatch name="Primary 300" hex="#FDBA74" />
              <Swatch name="Primary 200" hex="#FED7AA" />
              <Swatch name="Primary 100" hex="#FFEEE5" />
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-700">Neutral</p>
            <div className="flex flex-wrap gap-4">
              <Swatch name="Neutral 900" hex="#0F172A" />
              <Swatch name="Neutral 700" hex="#33415F" />
              <Swatch name="Neutral 500" hex="#64748B" />
              <Swatch name="Neutral 300" hex="#CBD5E1" />
              <Swatch name="Neutral 200" hex="#E2E8F0" />
              <Swatch name="Neutral 100" hex="#F1F5F9" />
              <Swatch name="Neutral 50" hex="#FAFAFC" />
              <Swatch name="White" hex="#FFFFFF" />
            </div>
          </div>
        </div>
      </Section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Section number="02" title="Typography">
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-display text-4xl">Ag</p>
              <p className="mt-1 text-sm text-neutral-500">
                Playfair Display &middot; Elegant &middot; Readable &middot; Timeless
              </p>
            </div>
            <div>
              <p className="font-sans text-4xl">Ag</p>
              <p className="mt-1 text-sm text-neutral-500">
                Inter &middot; Clean &middot; Modern &middot; Highly legible
              </p>
            </div>
          </div>
        </Section>

        <Section number="03" title="Type Scale">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="text-xs uppercase text-neutral-500">
                  <th className="pb-2 pr-4">Style</th>
                  <th className="pb-2 pr-4">Size / LH</th>
                  <th className="pb-2 pr-4">Weight</th>
                  <th className="pb-2">Use</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((row) => (
                  <tr key={row.style} className="border-t border-neutral-100">
                    <td className="py-2 pr-4 font-semibold text-neutral-900">{row.style}</td>
                    <td className="py-2 pr-4 text-neutral-500">{row.size}</td>
                    <td className="py-2 pr-4 text-neutral-500">{row.weight}</td>
                    <td className="py-2 text-neutral-500">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Section number="04" title="Spacing System">
          <p className="mb-4 text-sm text-neutral-500">Base unit: 4px</p>
          <div className="flex flex-wrap items-end gap-4">
            {spacingScale.map((s) => (
              <div key={s.px} className="flex flex-col items-center gap-2">
                <div
                  className="rounded-sm bg-primary-200"
                  style={{ width: s.px, height: s.px }}
                />
                <span className="text-xs text-neutral-500">
                  {s.px}
                  <br />
                  {s.rem}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section number="05" title="Radius & Shadows">
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold text-neutral-700">Radius</p>
              <div className="flex flex-wrap gap-4">
                {radiusScale.map((r) => (
                  <div key={r.name} className="flex flex-col items-center gap-2">
                    <div className={`h-12 w-12 border border-neutral-300 ${r.className}`} />
                    <span className="text-xs text-neutral-500">{r.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-neutral-700">Shadows</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {shadowScale.map((s) => (
                  <div
                    key={s.name}
                    className={`rounded-md bg-white p-3 text-xs text-neutral-500 ${s.className}`}
                  >
                    <div className="font-semibold text-neutral-900">{s.name}</div>
                    {s.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Section number="06" title="Icons">
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-neutral-700">Outline Style</p>
              <div className="flex flex-wrap gap-4 text-neutral-700">
                <Bell className="h-6 w-6" />
                <Search className="h-6 w-6" />
                <Play className="h-6 w-6" />
                <FileText className="h-6 w-6" />
                <Bookmark className="h-6 w-6" />
                <BarChart2 className="h-6 w-6" />
                <Clock className="h-6 w-6" />
                <User className="h-6 w-6" />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-neutral-700">Filled Style</p>
              <div className="flex flex-wrap gap-4 text-neutral-900">
                <Bell className="h-6 w-6 fill-current" />
                <Search className="h-6 w-6 fill-current" />
                <Play className="h-6 w-6 fill-current" />
                <FileText className="h-6 w-6 fill-current" />
                <Bookmark className="h-6 w-6 fill-current" />
                <BarChart2 className="h-6 w-6 fill-current" />
              </div>
            </div>
            <p className="text-xs text-neutral-500">
              24x24px grid &middot; 2px stroke width (outline) &middot; Rounded line caps &middot;
              Consistent optical balance
            </p>
          </div>
        </Section>

        <Section number="07" title="Buttons">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Explore Courses</Button>
              <Button variant="tertiary">View Lesson</Button>
              <Button variant="text">Watch Video</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" disabled>
                Get Started
              </Button>
              <Button variant="secondary" disabled>
                Explore Courses
              </Button>
              <Button variant="tertiary" disabled>
                View Lesson
              </Button>
              <Button variant="text" disabled>
                Watch Video
              </Button>
            </div>
            <p className="text-xs text-neutral-500">
              Height: 44px &middot; Padding: 0 16px (lg), 0 12px (md) &middot; Radius: 12px &middot;
              Font: Inter Medium (14-16px)
            </p>
          </div>
        </Section>

        <Section number="08" title="Inputs">
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-neutral-700">Search / Text Input</p>
              <Input placeholder="Search anything..." hint="⌘ K" />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-neutral-700">Select</p>
              <Select defaultValue="relevant">
                <option value="relevant">Most Relevant</option>
                <option value="newest">Newest</option>
              </Select>
            </div>
            <p className="text-xs text-neutral-500">
              Height: 44px &middot; Radius: 12px &middot; Border: 1px solid #E2E8F0 &middot; Padding:
              0 16px &middot; Focus: Border color #FB923C
            </p>
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Section number="09" title="Badges / Tags">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-neutral-500">Video</span>
              <Badge variant="video">Video</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-neutral-500">Lesson</span>
              <Badge variant="lesson">Lesson</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-neutral-500">Popular</span>
              <Badge variant="popular">Popular</Badge>
            </div>
          </div>
        </Section>

        <Section number="10" title="Status / Indicators">
          <div className="flex flex-wrap gap-6">
            <StatusIndicator variant="in-progress" />
            <StatusIndicator variant="completed" />
            <StatusIndicator variant="now-playing" />
            <StatusIndicator variant="locked" />
          </div>
        </Section>

        <Section number="11" title="Progress Bar">
          <ProgressBar percent={35} />
        </Section>
      </div>

      <Section number="12" title="Cards">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-neutral-500">Course Card</span>
            <CourseCard
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              avatarLabel="N"
              level="Intermediate"
              duration="18h 24m"
              moduleCount={12}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-neutral-500">Lesson Card (Video)</span>
            <LessonCard
              kind="video"
              title="Data Fetching in Server Components"
              description="Learn how to fetch data on the server using async/await and Next.js best practices."
              meta="Lesson 5.1 · 12:45"
              actionLabel="Watch from 12:45"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-neutral-500">Lesson Card (Lesson)</span>
            <LessonCard
              kind="lesson"
              title="Data Fetching & Caching"
              description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
              meta="Module 5"
              actionLabel="View lesson"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-neutral-500">Resource Card</span>
            <ResourceCard
              title="Caching and Revalidation Guide"
              description="Deep dive into Next.js caching strategies."
              meta="PDF · 1.2 MB"
            />
          </div>
        </div>
      </Section>

      <Section number="13" title="Navigation">
        <div className="flex flex-col gap-6">
          <NavBar />
          <div>
            <p className="mb-2 text-sm font-semibold text-neutral-700">Breadcrumbs</p>
            <Breadcrumbs items={["All Courses", "Next.js for Production", "Data Fetching & Caching"]} />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-neutral-700">Pagination</p>
            <Pagination currentPage={1} totalPages={8} />
          </div>
        </div>
      </Section>

      <Section number="14" title="Principles">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-neutral-900">Clarity First</p>
            <p className="text-sm text-neutral-500">Every element should communicate clearly.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Consistency</p>
            <p className="text-sm text-neutral-500">
              Use components and patterns consistently across the platform.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Focus &amp; Calm</p>
            <p className="text-sm text-neutral-500">Remove noise and help learners focus on what matters.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Accessible</p>
            <p className="text-sm text-neutral-500">Design with accessibility and inclusivity in mind.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
