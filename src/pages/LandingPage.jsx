import React from 'react';
import Navbar from './components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
        <Navbar/>
        <div className='w-fit bg-slate-50 h-fit'>Landing</div>
    </div>
  )
}

export default LandingPage;
