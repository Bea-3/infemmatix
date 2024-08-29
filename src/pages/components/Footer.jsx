import React from 'react';
import logo from "../../assets/icons/infemmatix-logo.svg";

const Footer = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-between footer'>
      <div className='w-full md:w-[25%]'>
        <img src={logo} alt="" className='md:w-3/4' />
        <p className='my-5'>Empowering women by providing the data and information tools they need to combat gender-based issues.</p>
      </div>

      <div className='md:w-1/3 flex justify-around'>
      <div className=''>
      <h3 className=' font-medium my-5'>Quick links</h3>
        <ul>
          <li>About Us</li>
          <li>Info Hub</li>
          <li>Data Tracker</li>
          <li>Community</li>
          <li>Safety Tools</li>
        </ul>
      </div>
      
      </div>

      <div className='w-1/3 flex justify-around'>
      <div className=''>
      <h3 className=' font-medium my-5'>Contacts</h3>
        <ul>
          <li>www.infemmatix.com</li>
          <li>hello@infemmatix.com</li>
          <li>location line 1</li>
          <li>location line 2</li>
          <li>Tel : +237 600000000</li>
        </ul>
      </div>
      
      </div>

      <hr  className='hrGradient my-5'/>
      <div className='w-full'>
        <p className='text-sm'>@Copyright inFEMMATIX , 2024</p></div>
    </div>
  )
}

export default Footer