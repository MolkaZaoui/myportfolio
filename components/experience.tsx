"use client"

import { AnimatedSection } from "./animated-section"
import { Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Novatis",
    role: "Web Project Manager & Digital Commercial",
    period: "Sep 2025",
    description:
      "Managing and tracking web projects, business development, client relations, and coordinating technical teams for digital growth.",
    tags: ["Project Management", "Web Development", "Client Relations"],
  },
  {
    company: "Vermeg",
    role: "End of Studies Internship",
    period: "2024 - 2025",
    description:
      "Designed and developed a full-stack online recruitment platform enabling companies to streamline their hiring process with modern web technologies.",
    tags: ["Angular 19", "Spring Boot", "Recruitment Platform"],
  },
  {
    company: "Tritux Group",
    role: "Summer Internship",
    period: "Jun - Aug 2024",
    description:
      "Built an internship management system featuring authentication, progress tracking, integrated communication channels, and automated reminders.",
    tags: ["MERN Stack", "Authentication", "Real-time"],
  },
  {
    company: "Prisma",
    role: "Summer Internship",
    period: "Jul 2023",
    description:
      "Developed a real-time agent tracking platform with geolocation capabilities and an interactive dashboard for optimized field management.",
    tags: ["Geolocation", "Dashboard", "Real-time Tracking"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Experience
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I{"'"}ve Worked
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={0.1 * i}>
                <div className="group relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden shrink-0 md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                      <Briefcase
                        size={18}
                        className="text-muted-foreground transition-colors group-hover:text-primary"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-colors group-hover:border-primary/30">
                    <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="flex items-center gap-1.5 text-sm font-medium text-primary">
                          {exp.company}
                          <ExternalLink size={12} />
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
