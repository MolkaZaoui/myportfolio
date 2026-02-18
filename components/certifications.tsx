"use client"

import { AnimatedSection } from "./animated-section"
import { Award, Users, Calendar } from "lucide-react"

const certifications = [
  {
    title: "Artificial Intelligence Certificate",
    date: "May 2025",
    icon: Award,
  },
  {
    title: "JavaScript Certificate",
    date: "April 2024",
    icon: Award,
  },
]

const engagements = [
  { title: "Chair IEEE WIE EPS SB", icon: Users },
  { title: "Participant at SYP Grenoble 2024", icon: Calendar },
  { title: "Media Management IEEE EPS SB", icon: Users },
  { title: "Google Club Member", icon: Users },
  { title: "Participant at Nuit de l'info", icon: Calendar },
  { title: "Participant at TSYP 2023", icon: Calendar },
  { title: "Organization of TCPC 2024", icon: Calendar },
  { title: "Participant at Extreme", icon: Calendar },
]

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Certifications & Leadership
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Achievements & Engagement
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Certifications */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-5 font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-center gap-4 rounded-lg border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <cert.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-xs text-muted-foreground">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Engagements */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-5 font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                Community & Leadership
              </h3>
              <div className="flex flex-col gap-3">
                {engagements.map((engagement) => (
                  <div
                    key={engagement.title}
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <engagement.icon size={14} />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {engagement.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
