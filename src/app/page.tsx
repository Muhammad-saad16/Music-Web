import FeaturedCourses from "@/components/featured-courses";
import Herosection from "../components/Herosection";
import MusicSchoolTestimonials from "@/components/Testimonialcard";
import Upcomingwebinar from "@/components/Upcomingwebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <Herosection />
     <FeaturedCourses />
     <MusicSchoolTestimonials />
     <Upcomingwebinar />
     <Instructors />
     <Footer />
    </main>
  );
}   
