import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          {"© 2026 Molka Zaoui. All rights reserved."}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MolkaZaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/molka-zaoui-1151a8232/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:molka.zaouii@gmail.com"
            aria-label="Send email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
