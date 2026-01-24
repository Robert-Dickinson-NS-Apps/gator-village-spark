import { Linkedin, Mail, Users } from "lucide-react";
import { GatorButton } from "@/components/ui/gator-button";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Were you a Diamond Village UF resident? I'd love to hear your stories and memories. 
            Let's reconnect and share our experiences from this special community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <GatorButton
              variant="hero"
              size="xl"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/robert-dickinson-00b04a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </GatorButton>

            <GatorButton
              variant="gator-outline"
              size="xl"
              asChild
            >
              <a
                href="mailto:rodickinson@gmail.com?subject=Diamond Village UF Alumni Connection"
                className="inline-flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
            </GatorButton>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Fellow Alumni</h3>
            </div>
            <p className="text-muted-foreground">
              If you lived at Diamond Village UF between 1966 and 1974, I'd especially love to hear from you. 
              Share your photos, stories, or just say hello. This archive grows richer with every connection we make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
