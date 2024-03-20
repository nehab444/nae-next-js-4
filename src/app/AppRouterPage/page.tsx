import React from 'react'; // Import React Library
import Link from 'next/link'; // Import Link component from Next.js

const AppRouterPage = () => { // Define functional component AppRouterPage
  return ( // Return JSX
    <div className="bg-gradient-to-br from-purple-700 to-blue-500 min-h-screen flex items-center justify-center">{/* Opening tag for outer div with gradient background */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"> {/* Opening tag for inner div with white background, padding, rounded corners, and shadow */}
        <h1 className="text-3xl font-bold text-center mb-6 text-white">What is an App Router?</h1> {/* Opening tag for heading with white text */}
        <div className="bg-gray-200 p-6 rounded-lg"> {/* Opening tag for inner div with gray background, padding, and rounded corners */}
          <p className="text-lg leading-relaxed text-gray-700"> {/* Opening tag for paragraph with gray text */}
            An app router is a component or library used in web development to manage the navigation
            and routing of a single-page application (SPA). It allows users to navigate between different
            pages or views of the application without the need to reload the entire page.
          </p> {/* Closing tag for paragraph with gray text */}
          
        </div>{/* Closing tag for inner div with gray background, padding, and rounded corners */}
        <Link href="/"> {/* Opening tag for Link component to navigate back to the home page */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {/* Opening tag for button with blue background, white text, padding, and rounded corners */}
            Back to Home
          </button> {/* Closing tag for button with blue background, white text, padding, and rounded corners */}
        </Link> {/* Closing tag for Link component to navigate back to the home page */}
      </div> {/* Closing tag for inner div with white background, padding, rounded corners, and shadow */}
    </div> // Closing tag for outer div with gradient background 
  );// Closing tag for return statement
}; // Closing tag for AppRouterPage functional component

export default AppRouterPage; // Export AppRouterPage component
