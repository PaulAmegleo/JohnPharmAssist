import React from 'react';
import '../../App.css'; // Updated import path
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Navbar from '../Navbar';



function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
