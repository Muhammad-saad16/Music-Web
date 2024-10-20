import { WavyBackground } from "./Ui/wavy-background";
import { AnimatedTooltip } from "./Ui/animated-tooltip";
import Image from "next/image";
const instructors = [
  {
    id: 1,
    name: "Muhammad Saad",
    designation: "Web designer",
    image: "https://plus.unsplash.com/premium_photo-1661440102417-fe9ea01d0518?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 

  },
  {
    id: 2,
    name: "Asad Raza",
    designation: "Web developer",
    image: "https://plus.unsplash.com/premium_photo-1661505361428-d01c4d6d88a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Corrected path
  },
  {
    id: 3,
    name: "Naseem Ahmed",
    designation: "Vocal coach",
    image: "https://images.unsplash.com/photo-1514543250559-83867827ecce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHdvcmtpbmclMjBvbiUyMGNvbXB1dGVyfGVufDB8fDB8fHww", // Corrected path
  },
  {
    id: 4,
    name: "Ahmed",
    designation: "UI Designer",
    image: "https://plus.unsplash.com/premium_photo-1661632826973-64b80d95cf6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hbiUyMHdvcmslMjBvbiUyMGNvbXB1dGVyfGVufDB8fDB8fHww", // Corrected path
  }
];

function Instructors() {
  return (
    <div className="h-[40rem] w-full relative flex items-center justify-center overflow-hidden">
      <WavyBackground className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl">Meet Our Instructors</h1>
        <p className="text-white text-lg mt-4">
          Our experienced instructors will guide you through every step of your
          musical journey.
        </p>
        <div className="flex flex-row items-center justify-center m-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
