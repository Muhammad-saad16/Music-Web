

function Footer() {
    return(
        <footer className="bg-black text-gray-400 py-12">
           <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-4 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-white text-lg font-semibold mb-4">About Us</h1>
                <p className="mb-4">Music school is a premier institue of music education.
                    We nuture talent from the ground up,
                    fostering musical excellence.
                </p>
            </div>
            <div >
            <h1 className="text-white text-lg font-semibold mb-4">Quick Link</h1>
            <ul>
               <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
               </li>
               <li>
                <a href="#" className="hover:text-white transition-colors duration-300">About</a>
               </li>
               <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Courses</a>
               </li>
               <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
               </li>

            </ul>
            </div>
            <div>
            <h1 className="text-white text-lg font-semibold mb-4">Follow Us</h1>
            <div className="flex space-x-4">
                <ul>
            <li>   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facbook</a></li>
            <li>    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a></li>
            <li>   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Linkedin</a></li>
            </ul>
            </div>
            </div>
            <div>
                <h1 className="text-white text-lg font-semibold mb-4">
                    Contact Us
                </h1>
                <p>Karachi, Sindh</p>
                <p>Pakistan</p>
                <p>Email: saadforyou20@gmail.com</p>
                <p>Phone: 123-456-7890</p>
            </div>
           </div>
            <div className="text-center text-gray-400">
                <p>&copy; 2022 Music School. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;