import { GatorButton } from "@/components/ui/gator-button";
import heroImage from "@/assets/uf-diamond-village-hero.jpg";

export const DiamondVillageHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80 drop-shadow-lg">
          A Personal History
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
          The Diamond Village UF Archives
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-4 max-w-3xl mx-auto drop-shadow-lg">
          Memories, Photos & Stories from UF's Historic Graduate Housing Community
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 drop-shadow-lg">
          A personal collection documenting life, leadership, and lasting connections forged in this unique Gator community
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <GatorButton variant="hero" size="xl">
            Explore the Archives
          </GatorButton>
          <GatorButton variant="gator-outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
            View Photo Gallery
          </GatorButton>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};