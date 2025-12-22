import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbox } from "@/components/ui/lightbox";
import { ZoomIn } from "lucide-react";
import diamondVillageMain from "@/assets/diamond-village-main.jpg";
import diamondVillageMap from "@/assets/diamond-village-map.jpg";
import diamondVillageCommunity from "@/assets/diamond-village-community.jpg";
import diamondVillageBuilding from "@/assets/diamond-village-building.jpg";
import diamondVillageBees from "@/assets/diamond-village-bees.jpg";
import diamondVillageCouple from "@/assets/diamond-village-couple.jpg";
import diamondVillageStudents from "@/assets/diamond-village-students.png";

export const CommunityGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: diamondVillageMain,
      alt: "Diamond Village UF aerial view",
      title: "Diamond Village UF Overview",
      description: "Graduate and family housing community at the heart of UF campus"
    },
    {
      src: diamondVillageBuilding,
      alt: "Diamond Village UF building exterior",
      title: "Building Exterior",
      description: "Classic architecture of the Diamond Village UF apartment buildings"
    },
    {
      src: diamondVillageCommunity,
      alt: "Diamond Village UF community life",
      title: "Community Living",
      description: "Students and families enjoying the close-knit atmosphere"
    },
    {
      src: diamondVillageStudents,
      alt: "Diamond Village UF students at community event",
      title: "Community Events",
      description: "Students enjoying food and fellowship at Diamond Village UF gatherings"
    },
    {
      src: diamondVillageBees,
      alt: "Diamond Village UF resident beekeeping",
      title: "Academic Pursuits",
      description: "A resident works on beekeeping as part of her UF studies"
    },
    {
      src: diamondVillageCouple,
      alt: "Diamond Village UF couple",
      title: "Family Life",
      description: "Couples and families thrive in the supportive Diamond Village UF community"
    },
    {
      src: diamondVillageMap,
      alt: "Diamond Village UF location map",
      title: "Campus Location",
      description: "Strategic location near UF Shands and the College of Medicine"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Diamond Village UF Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the beautiful community that has been home to generations of Gator families
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Click any image to view in full screen
          </p>
        </div>
        
        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0 h-full">
                <div className="relative overflow-hidden h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index === 0 ? 'h-full min-h-[400px]' : 'h-48 md:h-56'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Count */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">{images.length}</span> photos documenting Diamond Village UF history
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </section>
  );
};
