import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import StickyPlanCard from "@/components/hero/StickyPlanCard";
import Header from "@/components/navbar/Header";
import TrackProgress from "@/components/trackprogress/TrackProgress";
import BoardSection from "@/components/boardsection/BoardSection";
import AllInOneApp from "@/components/allinone/AllInOneApp";
import StopSwitching from "@/components/stopswitching/StopSwitching";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <TrackProgress />
      <BoardSection />
      <AllInOneApp />
      <StopSwitching />
      <Footer />
      <StickyPlanCard />
    </>
  );
}
