'use client'
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoverEffect } from "./Ui/card-hover-effect";

function Upcomingwebinar() {

  const featuredWebinar = [
   {
     title: "Understanding Music Theory",
     description: "Learn the basics of music theory and how it affects your musical skills. Get ready for an exciting journey of musical discovery.",
     slug: "music-theory",
     isFeatured: true,
   },
   {
     title: "The Art of Songwriting",
     description: "Uncover techniques for writing catchy melodies and powerful lyrics. Perfect for budding songwriters looking to hone their craft.",
     slug: "songwriting",
     isFeatured: true,
   },
   {
     title: "Music Production Essentials",
     description: "Learn how to produce your own music using the latest software tools and production techniques. Ideal for aspiring music producers.",
     slug: "music-production",
     isFeatured: false,
   },
   {
     title: "Exploring Classical Music",
     description: "Dive deep into the history and structure of classical music, and understand its impact on modern compositions.",
     slug: "classical-music",
     isFeatured: true,
   },
   {
     title: "Improvisation Techniques for Musicians",
     description: "Master the art of improvisation in different musical genres. Perfect for musicians looking to enhance their live performances.",
     slug: "music-improvisation",
     isFeatured: false,
   },
   {
     title: "Introduction to Jazz Theory",
     description: "Explore the foundations of jazz theory, from chord progressions to scales. A must-attend for jazz enthusiasts.",
     slug: "jazz-theory",
     isFeatured: true,
   },
 ];

   return (
       <div className="p-12 bg-gray-900">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 ">
           <div className="text-center">
               <h2 className="text-base text-teal-700 font-semibold tracking-wide uppercase">Featured Webinar</h2>
               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance your musical skills</p>
           </div>

           <div className="mt-4">
               <HoverEffect items={featuredWebinar.map(webinar => ({
                   title: webinar.title,
                   description: webinar.description, // Fixed typo here
                   link: `/${webinar.slug}`, // You may want to use the slug for linking
               }))}/>
           </div>

           <div className="mt-10 text-center">
               <Link href={"/"}
               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-100">
                   View All Webinars
               </Link>
           </div>
       </div>  
       </div>
   );
}

export default Upcomingwebinar;
