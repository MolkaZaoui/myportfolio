"use client"

import { AnimatedSection } from "./animated-section"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import emailjs from '@emailjs/browser'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Let's"} Work Together
          </h2>
          <p className="mb-12 max-w-2xl text-base text-muted-foreground">
            I{"'"}m currently open to new opportunities and would love to connect.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:molka.zaouii@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary">
                    molka.zaouii@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+21655631515"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary">
                    +(216) 55 631 515
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">
                    Ben Arous, Tunisia
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/MolkaZaoui"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/molka-zaoui-1151a8232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
         </AnimatedSection>

<AnimatedSection delay={0.2}>
  <form
    className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
    onSubmit={(e) => {
      e.preventDefault()
      const form = e.currentTarget as HTMLFormElement

      emailjs.sendForm(
        'service_rbj0rvy',  
        'template_m495jbh',  
        form,
        'BXv9iwKUnnUqKVDVp'    
      )
      .then(
        () => {
          alert('Message envoyé avec succès ! ✨')
          form.reset()
        },
        (error: any) => {
          alert('Erreur lors de l’envoi. Réessayez plus tard.')
          console.error(error)
        }
      )
    }}
  >
    <h3 className="mb-2 font-mono text-xs font-semibold tracking-widest text-primary uppercase">
      Send a Message
    </h3>

    <div>
      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        placeholder="Your name"
      />
    </div>

    <div>
      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        placeholder="your@email.com"
      />
    </div>

    <div>
      <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        placeholder="Your message..."
      />
    </div>

    <button
      type="submit"
      className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <Send size={16} />
      Send Message
    </button>
  </form>
</AnimatedSection>

        </div>
      </div>
    </section>
  )
}
