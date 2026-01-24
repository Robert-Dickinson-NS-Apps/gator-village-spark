import { DiamondVillageHero } from "@/components/DiamondVillageHero";
import { CommunityFeatures } from "@/components/CommunityFeatures";
import { CommunityGallery } from "@/components/CommunityGallery";
import { LeadershipSection } from "@/components/LeadershipSection";
import { SwmmCareerSection } from "@/components/SwmmCareerSection";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <DiamondVillageHero />
      <CommunityFeatures />
      <CommunityGallery />
      <LeadershipSection />
      <SwmmCareerSection />
      <HistoryTimeline />
      <ContactSection />
    </main>
  );
};

export default Index;
