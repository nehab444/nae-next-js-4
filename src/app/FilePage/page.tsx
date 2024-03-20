import React from 'react'; // Import the React library
import Link from 'next/link'; // Import the Link component from Next.js

const FilePage = () => { // Define the FilePage functional component
  return ( // Return JSX
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 text-white p-8"> {/* Outer div with gradient background */}
      <h1 className="text-4xl font-bold mb-6 text-center">Next.js Project File Overview</h1> {/* Heading */}
      <p className="text-lg mb-8 text-center"> {/* Paragraph */}
        This document provides an overview of the purpose of each file in our Next.js project.
      </p>

      <div className="max-w-lg w-full bg-white bg-opacity-25 p-6 rounded-lg shadow-lg"> {/* Inner div with white background, opacity, padding, rounded corners, and shadow */}
        <h2 className="text-2xl font-bold mb-4">AppRouterPage Folder</h2> {/* Heading */}
        <ul className="list-disc pl-6 mb-6"> {/* Unordered list */}
          <li><strong>page.tsx</strong>: The page describing the AppRouter functionality.</li> {/* List item */}
        </ul>

        <h2 className="text-2xl font-bold mb-4">App (Main) Folder</h2> {/* Heading */}
        <ul className="list-disc pl-6 mb-6"> {/* Unordered list */}
          <li><strong>page.tsx</strong>: The homepage of our application.</li> {/* List item */}
          <li><strong>global.css</strong>: Contains global styles applied to the entire application.</li> {/* List item */}
          <li><strong>favicon.ico</strong>: The favicon for our application.</li> {/* List item */}
          <li><strong>layout.tsx</strong>: A template that helps maintain a consistent structure and design across multiple pages of a website or application.</li> {/* List item */}
        </ul>

        <h2 className="text-2xl font-bold mb-4">FilePage Folder</h2> {/* Heading */}
        <ul className="list-disc pl-6 mb-6"> {/* Unordered list */}
          <li><strong>page.tsx</strong>: The page describing what each file in the Next.js application is.</li> {/* List item */}
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">ServerComponents Folder</h2> {/* Heading */}
        <ul className="list-disc pl-6 mb-6"> {/* Unordered list */}
          <li><strong>page.tsx</strong>: The page describing what server components are.</li> {/* List item */}
        </ul>

        {/* Various file descriptions */}
        <h2 className="text-2xl font-bold mb-4">.eslintrc.json</h2>
        <p className="mb-6">Sets up rules for how your JavaScript code should be written and formatted.</p>
        
        {/* Other file descriptions */}
        <h2 className="text-2xl font-bold mb-4">.gitignore</h2>
        <p className="mb-6">Used to specify which files and directories Git should ignore when tracking changes in a repository, preventing them from being committed.</p>
        
        {/* More file descriptions */}
        <h2 className="text-2xl font-bold mb-4">next-env.d.ts</h2>
        <p className="mb-6">Helps TypeScript understand Next.js-specific types and functions, making it easier to work with Next.js in a TypeScript project. </p>

        {/* Link to go back to the home page */}
        <h2 className="text-2xl font-bold mb-4">README.md</h2>
        <p className="mb-6">A text file that typically contains information about a project, including how to set it up, how to use it, and any other relevant details. </p>
        
        {/* Button to go back to the home page */}
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {/* Button with blue background, white text, padding, and rounded corners */}
            Back to Home
          </button>
        </Link> {/* Closing tag for Link component */}
      </div> {/* Closing tag for inner div */}
    </div> // Closing tag for outer div
  ); // Closing tag for return statement
}; // Closing tag for FilePage functional component

export default FilePage; // Export FilePage component as default
