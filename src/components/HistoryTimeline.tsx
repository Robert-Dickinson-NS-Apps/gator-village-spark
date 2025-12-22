import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const HistoryTimeline = () => {
  const timelineEvents = [
    {
      year: "Post-WWII Era",
      title: "Origins & Foundation",
      description: "Diamond Village UF conceived to house returning veterans and their families under the GI Bill, replacing Flavet I and II housing.",
      badge: "Foundation",
      color: "bg-primary"
    },
    {
      year: "1965",
      title: "Official Construction",
      description: "Designed by Forrest Kelly at a cost of $1,388,500, with 24 additional apartments near Corry Village.",
      badge: "Construction",
      color: "bg-secondary"
    },
    {
      year: "1980s-1990s",
      title: "Leadership Era",
      description: "Robert Dickinson's tenure as mayor, establishing community traditions like holiday parties and family outings.",
      badge: "Leadership",
      color: "bg-primary"
    },
    {
      year: "Present Day",
      title: "Modern Community",
      description: "Continues as a model for graduate family housing with ongoing renovations and diverse international community.",
      badge: "Evolution",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            A Legacy of Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From post-war housing to modern family community - the Diamond Village UF story
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-gator transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`${event.color} text-white`}>
                          {event.badge}
                        </Badge>
                        <span className="text-lg font-bold text-primary">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* SWMM Connection */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-gator-orange/10 to-gator-blue/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Diamond Village UF & SWMM Legacy
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Diamond Village UF's connection to UF's engineering excellence continues through 
                alumni like Robert Dickinson, who has spent 50 years advancing SWMM (Storm Water 
                Management Model) technology at Innovyze/Autodesk, bridging the gap between 
                academic research and real-world applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};