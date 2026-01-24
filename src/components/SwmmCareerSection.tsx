import { Code, Droplets, Award, Building2, Rocket, GraduationCap } from "lucide-react";

export const SwmmCareerSection = () => {
  const milestones = [
    {
      year: "1971",
      icon: GraduationCap,
      title: "The Foundation",
      description:
        "While living at Diamond Village UF as a graduate student, I was introduced to the emerging field of computational hydrology. The collaborative spirit of the village—where engineers, scientists, and students from diverse backgrounds shared ideas—sparked my passion for solving complex water management challenges through software.",
    },
    {
      year: "1974",
      icon: Code,
      title: "Birth of SWMM",
      description:
        "The Storm Water Management Model (SWMM) was developed by the EPA, and I joined the pioneering team working on its early versions. The problem-solving skills and interdisciplinary thinking I developed at Diamond Village UF proved invaluable in tackling this groundbreaking project.",
    },
    {
      year: "1980s",
      icon: Droplets,
      title: "Advancing the Science",
      description:
        "Through decades of development, SWMM evolved from a research tool into the world's most widely used urban drainage modeling software. The community-focused mindset from my Diamond Village UF days shaped how I approached making the software accessible and practical for engineers worldwide.",
    },
    {
      year: "2000s",
      icon: Building2,
      title: "Innovyze Era",
      description:
        "Joining Innovyze allowed me to expand SWMM's capabilities and integrate it with modern infrastructure management systems. The lessons from managing community resources as Diamond Village UF Mayor translated directly into understanding how cities manage their water infrastructure.",
    },
    {
      year: "2021",
      icon: Rocket,
      title: "Autodesk Acquisition",
      description:
        "When Autodesk acquired Innovyze, it marked a new chapter in bringing water infrastructure software to a global audience. After 50 years, the journey that began in a small graduate housing community continues to impact how cities around the world manage stormwater.",
    },
    {
      year: "Today",
      icon: Award,
      title: "A Lasting Legacy",
      description:
        "SWMM is now used by thousands of engineers in over 100 countries. Looking back, the collaborative environment of Diamond Village UF—where young families and students supported each other's ambitions—was the perfect incubator for a career dedicated to improving communities through technology.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Professional Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Diamond Village UF to SWMM: A 50-Year Career
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How a graduate housing community shaped a career in stormwater management software 
              that would impact cities worldwide.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ml-20 md:ml-0 ${
                        isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div
                        className={`bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow ${
                          isEven ? "md:mr-6" : "md:ml-6"
                        }`}
                      >
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto">
              "The sense of community at Diamond Village UF taught me that the best solutions 
              come from collaboration. That lesson guided every line of code I've ever written."
            </blockquote>
            <p className="mt-4 text-primary font-semibold">— Robert Dickinson</p>
          </div>
        </div>
      </div>
    </section>
  );
};
