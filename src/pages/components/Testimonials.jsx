import React from "react";
import quoteIcon from '../../assets/icons/quote-up.svg';

const Testimonials = () => {
  return (
    <div className="container mx-auto testimonial">
        <h2 className="text-4xl my-4 font-medium">Get Inspired By Our Users </h2>
        <div className="flex flex-col md:flex-row justify-between mt-8 gap-8 md:gap-4">
        <div className=" p-4 w-full md:w-1/3 md:max-w-xs h-auto flex flex-col gap-4 border border-gray-200 rounded-lg min-w-[400px]">
        <div>
          <img src={quoteIcon} alt="Quotation icon" />
        </div>
        <p className="text-sm md:text-base">
        "I was overwhelmed trying to find reliable information about women's health. The Info Hub was a lifesaver! The articles are informative and easy to understand. I especially appreciate the data and statistics section. It's empowering to see the numbers and understand the issues better.”
        </p>
        <hr className="border-gray-300" />
        <div className='cardGradient'>
          <h5 className="font-bold text-sm md:text-base">Sarah M.</h5>
          <p className="text-xs md:text-sm">Home Decor Enthusias</p>
        </div>
      </div>

      <div className=" p-4 w-full md:w-1/3 md:max-w-xs h-auto flex flex-col gap-4 border border-gray-200 rounded-lg min-w-[400px]">
        <div>
          <img src={quoteIcon} alt="Quotation icon" />
        </div>
        <p className="text-sm md:text-base">
        "Tracking my workload and finances has been a game-changer. The Data Hub helps me visualize my progress and identify areas where I can improve. It's like having a personal coach to guide me towards my goals."
        </p>
        <hr className="border-gray-300" />
        <div className='cardGradient'>
          <h5 className="font-bold text-sm md:text-base"> David L</h5>
          <p className="text-xs md:text-sm">Senior Software Developer</p>
        </div>
      </div>

      <div className=" p-4 w-full md:w-1/3 md:max-w-xs h-auto flex flex-col gap-4 border border-gray-200 rounded-lg min-w-[400px]">
        <div>
          <img src={quoteIcon} alt="Quotation icon" />
        </div>
        <p className="text-sm md:text-base">
        "I've found such amazing support and inspiration within this community. The live discussions are incredible! I feel connected to women from all walks of life. It's a safe space to share experiences and learn from others.</p>
        <hr className="border-gray-300" />
        <div className='cardGradient'>
          <h5 className="font-bold text-sm md:text-base"> Emily C</h5>
          <p className="text-xs md:text-sm">Aspiring Marketing Professional</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Testimonials;
