import React from 'react'; // Import the React library
import Link from 'next/link'; // Import the Link component from Next.js
import Layout from './layout';
import YourImage from './widesmile.jpg'; // Import your image


const Homepage: React.FC = () => { // Define the Homepage functional component
  return ( // Return JSX
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 text-white font-serif"> {/* Outer div with gradient background */}
      <div className="text-6xl mb-10 font-bold text-center">Welcome!</div> {/* Heading */}
      <img src={YourImage.src} alt="Your Image" className="w-1/4 mb-8" /> {/* Image element using imported image */}
      <div className="text-lg mb-16 text-center">Explore the most efficient Next.js tutorial page!</div> {/* Text */}
      <div className="text-lg mb-16 text-center">All the hard work will pay off!</div> {/* Text */}
      <div className="text-lg mb-16 text-center">Website recommended by top-rated UNC professors, Kris Jordan and Alyssa Lytle</div> {/* Text */}
      <div className="text-lg mb-16 text-center">Imagine what your skills will look like in just a few months...</div> {/* Text */}
      <div className="flex gap-4"> {/* Flex container with gap */}
        <Link href="/AppRouterPage"> {/* Link to AppRouterPage */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg transition-colors duration-300">Learn about App Router</button> {/* Button for App Router */}
        </Link>
        <Link href="/FilePage"> {/* Link to FilePage */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg transition-colors duration-300">Learn about Next JS Files</button> {/* Button for Next JS Files */}
        </Link>
        <Link href="/ServerComponentsPage"> {/* Link to ServerComponentsPage */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg transition-colors duration-300">Learn about Server Components</button> {/* Button for Server Components */}
        </Link>
      </div> {/* Closing tag for flex container */}
    </div> // Closing tag for outer div
    
  ); // Closing tag for return statement
}; // Closing tag for Homepage functional component

export default Homepage; // Export Homepage component as default
