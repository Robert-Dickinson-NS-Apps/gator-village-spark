import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Users, 
  GraduationCap, 
  Heart, 
  MapPin, 
  TreePine,
  Baby,
  Globe
} from "lucide-react";

export const CommunityFeatures = () => {
  const features = [
    {
      icon: Home,
      title: "Family-Centric Housing",
      description: "Apartment-style units designed for couples and families with children, providing security and community."
    },
    {
      icon: Globe,
      title: "Cultural Diversity",
      description: "A welcoming environment for international scholars with potluck nights and language exchange sessions."
    },
    {
      icon: GraduationCap,
      title: "Academic Convenience",
      description: "On-campus location with easy access to classes, libraries, research labs, and university services."
    },
    {
      icon: Baby,
      title: "Family Support",
      description: "Nearby daycare options, playgrounds, and family-oriented programming for busy graduate students."
    },
    {
      icon: TreePine,
      title: "Green Spaces",
      description: "Community courtyards, butterfly gardens, and green areas that foster neighborly interaction."
    },
    {
      icon: Heart,
      title: "Community Spirit",
      description: "Holiday parties, community grills, basketball courts, and shared spaces that build lasting friendships."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Made Diamond Village UF Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Remembering the unique qualities that shaped our experience as graduate student families
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-gator rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Years of History</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">100+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Family Units</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Countries Represented</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">1000+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Alumni Families</div>
          </div>
        </div>
      </div>
    </section>
  );
};