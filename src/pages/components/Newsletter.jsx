import React from 'react';
import envelopeIcon from '../../assets/icons/mail.svg';

const Newsletter = () => {
  return (
    <div className="container mx-auto mt-20">
        <div className="relative flex flex-col sm:flex-row items-center mb-4 bg-white p-4 rounded-xl justify-between max-w-4xl gap-5">
          <div className="flex items-center w-full sm:w-auto mb-4 md:mb-0">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex justify-center items-center mr-3">
              <img src={envelopeIcon} alt="Envelope Icon" />
            </div>
            <div className="text-xs md:text-base flex-grow md:flex-grow-0 md:w-3/10 text-center md:text-left text-gray-950">
            <h3 className='font-bold'>Join Our Community</h3>
              <p className="">
                Sign-up to receive email updates
              </p>
            </div>
          </div>
          <div className="relative flex-grow flex items-center justify-center w-full md:w-80 lg:w-96">
            <input
              type="email"
              placeholder="Enter your email address"
              className="py-2 pl-3 pr-28 rounded-xl placeholder-gray-400 focus:outline-none w-full h-12 border border-grey-200 bg-gray-200 font-normal text-xs"
            />
            <button className="absolute right-0 top-0 bottom-0 px-6 bg-primaryPurple rounded-xl text-xs h-full sm:text-base">
              Subscribe to mail
            </button>
          </div>
        </div>
        </div>
  )
}

export default Newsletter