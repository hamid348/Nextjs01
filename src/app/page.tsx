import FeaturedCourses from "@/components/FeaturedCourses";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Instructors from "@/components/Instructors";
import HeroSection from "@/components/ui/HeroSection";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "../components/Footer";


export default function Home() {
  return (
   <main className="min-h-screen bg-blacl/[0.96] antialiased bg-grid-white/[0.02]">
   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <InfiniteMovingCardsDemo/>
   <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
   </main>
  );
}
