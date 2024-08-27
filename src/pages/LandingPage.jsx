import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Infohub from './components/Infohub';
import DataTracker from './components/DataTracker';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import textGlitch from '../assets/icons/glitch.svg';
import textGlitch2 from '../assets/icons/glitch2.svg';


const LandingPage = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col gap-9">
        <Navbar/>
        <div className='heroImage-waves w-full min-h-[400px] relative mt-9'></div>
        <div className='w-full min-h-[400px] absolute top-20 -right-80 heroImage-hand'></div>
        <Hero/>
      
        <section className='flex justify-center my-20' >
          {/* <h2 className='text-center'>- Empowering Women Through Information -</h2> */}
          <img src={textGlitch} alt="" />
        </section>

      <Infohub/>
      
      <DataTracker/>

      <Community/>

      <section className='flex justify-center my-20' >
          <img src={textGlitch2} alt="" />
        </section>

        <Testimonials/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default LandingPage;
