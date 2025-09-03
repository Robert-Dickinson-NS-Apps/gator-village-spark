import { DiamondVillageHero } from "@/components/DiamondVillageHero";
import { CommunityFeatures } from "@/components/CommunityFeatures";
import { CommunityGallery } from "@/components/CommunityGallery";
import { LeadershipSection } from "@/components/LeadershipSection";
import { HistoryTimeline } from "@/components/HistoryTimeline";

const Index = () => {
  return (
    <main className="min-h-screen">
      <DiamondVillageHero />
      <CommunityFeatures />
      <CommunityGallery />
      <LeadershipSection />
      <HistoryTimeline />
    </main>
  );
};

export default Index;
