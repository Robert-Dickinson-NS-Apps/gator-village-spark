import { DiamondVillageHero } from "@/components/DiamondVillageHero";
import { CommunityFeatures } from "@/components/CommunityFeatures";
import { CommunityGallery } from "@/components/CommunityGallery";
import { LeadershipSection } from "@/components/LeadershipSection";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <DiamondVillageHero />
      <CommunityFeatures />
      <CommunityGallery />
      <LeadershipSection />
      <HistoryTimeline />
      <ContactSection />
    </main>
  );
};

export default Index;
