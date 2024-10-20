import Link from 'next/link'; 
import { Spotlight } from './Ui/Spotlight';
import { Button } from "./Ui/moving-border";


function heroSection() {  
    return (
        <div
        className="h-auto md:h-[40rem] w-full rounded-m flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
            />
                
            <div className="p-4 relative z-10 w-full text-center">
            
               <h1
               className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-nuetral-400"
               >Master The Art Of Coding</h1>
               <p
               className="mt-4 font-medium text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                Mastering the art of coding is about turning ideas into reality through problem-solving and creativity.With strong fundamentals and hands-on experience, coding becomes a powerful tool for innovation.</p>
               <div className="m-4">
               <Link href="/courses">
               <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">       
                    Explore Courses
               </Button>
               </Link>
               </div>
            </div>
        </div>
    )
 }
 export default heroSection;