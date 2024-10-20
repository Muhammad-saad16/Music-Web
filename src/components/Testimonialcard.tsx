'use client'
import { InfiniteMovingCards } from "./Ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      name: "John Doe",
      title: "Musician",
      feedback: "This website has transformed the way I discover new artists and collaborate with others."
    },
    {
      name: "Sarah Smith",
      title: "DJ & Producer",
      feedback: "It's amazing how easy it is to find inspiration and new tracks on this platform."
    },
    {
      name: "Mike Williams",
      title: "Band Leader",
      feedback: "The seamless navigation makes it simple for our band to upload music and interact with fans."
    },
    {
      name: "Emily Clarke",
      title: "Singer-Songwriter",
      feedback: "I love how the platform connects musicians and makes collaboration effortless."
    },
    {
      name: "David Lee",
      title: "Sound Engineer",
      feedback: "The sound quality and tools provided here are perfect for professional-level work."
    },
    {
      name: "Olivia Harris",
      title: "Music Producer",
      feedback: "This platform is a game-changer for producing, mixing, and sharing tracks with others."
    },
  ];
  

function MusicSchoolTestimonials(){
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.02] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-white justify-center align-center text-center z-10 mb-8">Hear Our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6x1">
                <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="left"
        speed="slow"
      />
                </div>
            </div>
        </div>
    )
}

export default MusicSchoolTestimonials