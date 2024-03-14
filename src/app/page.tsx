import React from 'react';
import Link from 'next/link';


const Homepage = () => {
  return (
    
      <div style={{ fontFamily: 'Caveat', textAlign: 'center', padding: '20px' }}>
        <div style={{ fontSize: '80px', color: '#ff69b4', marginBottom: '20px', letterSpacing: '5px' }}>Welcome!</div>
        <div style={{ fontSize: '20px', color: '#333', marginBottom: '30px', letterSpacing: '2px', lineHeight: '1.5' }}>Explore the most efficient Next.js tutorial page!</div>
        <div style={{ fontSize: '20px', color: '#333', marginBottom: '30px', letterSpacing: '2px', lineHeight: '1.5' }}>All the hard work will pay off!</div>
        <div style={{ fontSize: '20px', color: '#333', marginBottom: '30px', letterSpacing: '2px', lineHeight: '1.5' }}>Website recommended by top-rated UNC professors, Kris Jordan and Alyssa Lytle</div>
        <div sty-ule={{ fontSize: '20px', color: '#333', marginBottom: '30px', letterSpacing: '2px', lineHeight: '1.5' }}>Imagine what your skills will look like in just a few months...</div>
        <Link href="/AppRouterPage">
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontSize: '18px', border: 'none', cursor: 'pointer' }}>Learn about App Router</button>
        </Link>
      </div>
      
    
  );
};

export default Homepage;
