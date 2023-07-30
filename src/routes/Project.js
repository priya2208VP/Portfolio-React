
import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
     <HeroImg2 heading=" WELCOME TO MY PROJECT SECTION" text="View Some of my latest works!"/>
     <Work/>
    <Pricing/>
    
    <Footer/>
   
    </div>
  );
};

export default Project;