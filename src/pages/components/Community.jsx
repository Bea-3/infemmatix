import React from 'react';
import heartImage from '../../assets/images/heart.png';

const Community = () => {
  return (
    <div className='container mx-auto min-h-[400px] md:flex gap-5 justify-between'>
        <div className='w-[40%]'>
            <img src={heartImage} alt="A heart illustration" /></div>
        <div className='text-primaryText flex flex-col justify-center gap-5 md:w-[57%] py-4 md:px-6'>
            <h2 className='text-5xl'>Community</h2>

            <p>Join a thriving community of women where you can connect, share, and grow. Our Community Hub offers a vibrant space for open conversations, support, and inspiration. Engage in live discussions, participate in thought-provoking threads, and build lasting connections with like-minded individuals.</p>

            <button
            className='py-2 px-4 font-medium w-fit'
            style={{
                border: '2px solid transparent',
                borderRadius: '8px',
                background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #8C52FF, #55EECC) border-box',
            }}>Join Our Community</button>
        </div>
    </div>
  )
}

export default Community