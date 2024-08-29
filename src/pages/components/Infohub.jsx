import React from 'react';
import infohubImg from '../../assets/icons/infoHub-palm.svg';

const Infohub = () => {
  return (
    <div className='container mx-auto md:flex gap-5 justify-around infohub'>
        <div className='w-auto'>
        <img src={infohubImg} alt="Info hub image" />
        </div>
        <div className='text-primaryText flex flex-col justify-center gap-5 md:w-2/3 py-4 md:px-6'>
            <h2 className='text-5xl'>Info Hub</h2>

            <p>Discover a wealth of knowledge and resources at your fingertips. From comprehensive guides and expert advice to data-driven insights and inspiring stories from women like you, our Info Hub is your go-to destination for empowerment. Find the support, information, and opportunities you need to thrive.</p>

            <button
            className='py-2 px-4 font-medium w-fit'
            style={{
                border: '2px solid transparent',
                borderRadius: '8px',
                background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #8C52FF, #55EECC) border-box',
            }}>Get Started</button>
        </div>
    </div>
  )
}

export default Infohub