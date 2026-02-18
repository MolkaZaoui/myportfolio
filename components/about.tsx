"use client"

import { AnimatedSection } from "./animated-section"
import { GraduationCap, MapPin, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            About Me
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Who I Am
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              I am a Software Engineering graduate from{" "}
              <span className="font-medium text-foreground">
                {"l'"}{"École"} Polytechnique de Sousse
              </span>{" "}
              with a deep passion for building robust, scalable web applications. My
              expertise spans across modern full-stack technologies, from crafting
              dynamic front-end interfaces with React and Angular to building powerful
              back-end services with Spring Boot and Node.js.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Beyond coding, I lead as the{" "}
              <span className="font-medium text-foreground">IEEE WIE Chair</span> at
              my university, driving initiatives that bridge the gender gap in STEM
              and foster technical innovation. I thrive in collaborative
              environments and am actively seeking opportunities to contribute
              internationally.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    Education
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Software Engineering, {"École"} Polytechnique de Sousse (2022-2025)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Integrated Preparatory Cycle (2020-2022)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ben Arous, Tunisia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    Languages
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    French, Arabic, English
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
