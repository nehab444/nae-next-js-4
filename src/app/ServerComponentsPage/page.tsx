import React from 'react'; // Import the React library
import Link from 'next/link'; // Import the Link component from Next.js

const ServerComponentsPage = () => { // Define the ServerComponentsPage functional component
  return ( // Return JSX
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500"> {/* Outer div with gradient background */}
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden"> {/* Inner div with max width, margin auto, padding, white background, shadow, rounded corners, and hidden overflow */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Server Components in Next.js</h1> {/* Heading */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 w-24 mx-auto mb-6 rounded-full"></div> {/* Div for gradient line */}
        <p className="text-lg text-gray-800 mb-8 leading-relaxed"> {/* Paragraph */}
          Server components in Next.js allow you to render parts of your website on the server instead of the client&apos;s browser. This can improve performance because the server can pre-render content, reducing the amount of work the browser needs to do. It can also enable features like streaming updates, where parts of the page can be updated without needing a full page reload.
        </p>
        <Link href="/"> {/* Link component to navigate back to the home page */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {/* Button with blue background, white text, padding, and rounded corners */}
            Back to Home
          </button>
        </Link> {/* Closing tag for Link component */}
      </div> {/* Closing tag for inner div */}
    </div> // Closing tag for outer div
  ); // Closing tag for return statement
}; // Closing tag for ServerComponentsPage functional component

export default ServerComponentsPage; // Export ServerComponentsPage component as default
