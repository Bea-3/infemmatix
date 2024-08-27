import React from 'react';


const Hero = () => {
  return (
    <div className=' w-full min-h-[400px] flex pt-9 absolute top-40'>
        <div className='max-w-[500px] flex flex-col gap-9 justify-center m-3 '>
            <h1 className='text-4xl text-white'>THE <span className='textGradient'>POWER</span> OF <span className='textGradient'>DATA</span> IN <span className='text-primaryPurple'>WOMEN'S</span> HANDS</h1>

            <div className='w-2/3 flex gap-4 p-2'>
                <button className='py-2 px-4 rounded-lg bg-primaryPurple'>Get Started</button>
                <button className='p-3 font-medium'
                style={{
                    border: '2px solid transparent',
                    borderRadius: '8px',
                    background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #8C52FF, #55EECC) border-box',
                }}
                ><span className='textGradient'>Learn More</span></button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero