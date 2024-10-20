'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./Ui/background-gradient"

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    interface Course {
        id: number,
        title: string,
        discription: string,
        slug: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
    }
    return(
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-700 font-semibold tracking-wide uppercase">Featured Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
                </div>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {
                    featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-centre">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm ">
                                <div className="p-4 sm:p-6 flex flex-col item-centre text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-nuetral-200">{course.title}</p>
                                    <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 flex-grow">{course.discription}</p>
                                    <Link href={`/courses/${course.slug}`}>
                                    <button className="mt-4">Learn More</button>
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
              </div>
            </div>
            <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-100">
            View All Courses
            </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses