import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GatorButton } from "@/components/ui/gator-button";
import { ExternalLink, MapPin, Calendar, Users } from "lucide-react";

export const LeadershipSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Leadership Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How Diamond Village UF's unique governance model shaped my path from student leader to engineering professional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Leadership Profile Card */}
          <Card className="shadow-elegant hover:shadow-gator transition-all duration-300">
            <CardHeader className="bg-gradient-gator text-white rounded-t-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  RD
                </div>
                <div>
                  <CardTitle className="text-2xl">Robert Dickinson</CardTitle>
                  <p className="text-white/90">Former Diamond Village UF Mayor</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Village Mayor</Badge>
                <Badge variant="secondary">Community Leader</Badge>
                <Badge variant="secondary">SWMM Expert</Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Leadership Tenure: Mid-1980s to Early 1990s</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Autodesk Technologist - SWMM Networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>20 Years at Innovyze/Autodesk</span>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                During my time as Village Mayor, I had the privilege of fostering community building through 
                holiday parties, potlucks, and family outings. These leadership experiences helped establish 
                traditions that enriched our quality of life and shaped my career path.
              </p>
              
              <div className="pt-4">
                <GatorButton 
                  variant="gator-outline" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/pulse/diamond-village-university-florida-swmm-25-3-4-xpswmm-dickinson-a4rje/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View LinkedIn Article
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </GatorButton>
              </div>
            </CardContent>
          </Card>

          {/* Governance Structure */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Unique Governance Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Diamond Village UF operates under a distinctive leadership structure with elected 
                  mayors and vice mayors, giving residents direct voice in community decisions.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Village Mayor and Vice Mayor positions</li>
                  <li>Participation in UF's Mayors' Council</li>
                  <li>Student-led policy advocacy</li>
                  <li>Community event organization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Training Ground for Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many residents credit their leadership roles for teaching valuable organizational 
                  and civic engagement skills, from budget management to conflict resolution.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Cultural Diversity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Mayors' Council welcomes leaders from diverse backgrounds, creating a 
                  rich cultural exchange that enhances the entire UF community experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};