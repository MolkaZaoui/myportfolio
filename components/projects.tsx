"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedSection } from "./animated-section"
import { Folder, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Online Recruitment Platform",
    description:
      "Full-stack recruitment management system for enterprises, with role-based access, job posting, candidate tracking, and analytics dashboard.",
    tech: ["Angular 19", "Spring Boot", "MySQL"],
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "Ticket Management System",
    description:
      "Comprehensive support ticket management platform enabling teams to create, assign, track, and resolve tickets with real-time status updates.",
    tech: ["Angular", "Spring Boot", "REST API"],
    accent: "bg-chart-2/10 text-chart-2",
  },
  {
    title: "Internship Management System",
    description:
      "End-to-end internship lifecycle management with authentication, progress monitoring, integrated messaging, and automated reminders.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    accent: "bg-chart-4/10 text-chart-4",
  },
  {
    title: "Invoice Management System",
    description:
      "Dynamic invoicing web application for creating, managing, and tracking invoices with automated calculations and PDF export functionality.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    accent: "bg-chart-1/10 text-chart-1",
  },
  {
    title: "Stock Management System",
    description:
      "Inventory tracking and stock management solution with real-time updates, low-stock alerts, and comprehensive reporting capabilities.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "Real-time Agent Tracker",
    description:
      "Geolocation-powered platform for tracking field agents in real-time with interactive dashboards and optimized route management.",
    tech: ["Geolocation API", "Real-time", "Dashboard"],
    accent: "bg-chart-2/10 text-chart-2",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.08 * index, ease: "easeOut" }}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${project.accent}`}>
          <Folder size={18} />
        </div>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        />
      </div>

      <h3 className="mb-2 text-base font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Projects
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Work
          </h2>
          <p className="mb-12 max-w-2xl text-base text-muted-foreground">
            A selection of projects that showcase my expertise in building full-stack
            web applications across multiple technology stacks.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
