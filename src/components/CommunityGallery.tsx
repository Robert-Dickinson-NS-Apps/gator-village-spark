import { Card, CardContent } from "@/components/ui/card";
import diamondVillageMain from "@/assets/diamond-village-main.jpg";
import diamondVillageMap from "@/assets/diamond-village-map.jpg";
import diamondVillageCommunity from "@/assets/diamond-village-community.jpg";

export const CommunityGallery = () => {
  const images = [
    {
      src: diamondVillageMain,
      alt: "Diamond Village aerial view",
      title: "Diamond Village Overview",
      description: "Graduate and family housing community at the heart of UF campus"
    },
    {
      src: diamondVillageCommunity,
      alt: "Diamond Village community life",
      title: "Community Living",
      description: "Students and families enjoying the close-knit atmosphere"
    },
    {
      src: diamondVillageMap,
      alt: "Diamond Village location map",
      title: "Campus Location",
      description: "Strategic location near UF Shands and the College of Medicine"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Diamond Village Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the beautiful community that has been home to generations of Gator families
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};