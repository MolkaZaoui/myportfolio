"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedSection } from "./animated-section"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Java", level: 90 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 75 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Angular 19", level: 88 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Spring Boot", level: 88 },
      { name: "Laravel", level: 78 },
      { name: "Symfony", level: 72 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Git / GitHub", level: 90 },
      { name: "UML", level: 80 },
    ],
  },
]

const techStack = [
  "React", "Angular", "Spring Boot", "Node.js", "MongoDB",
  "MySQL", "Laravel", "Symfony", "Flutter", "Docker",
  "JavaScript", "Java", "Python", "PHP", "HTML/CSS",
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Technical Skills
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            My Tech Stack
          </h2>
          <p className="mb-12 max-w-2xl text-base text-muted-foreground">
            Skilled across the full development lifecycle with expertise in modern
            frameworks and technologies.
          </p>
        </AnimatedSection>

        {/* Scrolling tech tags */}
        <AnimatedSection delay={0.1}>
          <div className="mb-14 overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-3"
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 rounded-full border border-border bg-secondary px-4 py-1.5 font-mono text-xs text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Skill categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection key={category.title} delay={0.1 * catIdx}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-5 font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.1 * skillIdx}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
