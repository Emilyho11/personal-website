import React from 'react';
import ContentContainer from './ContentContainer';

const HobbyPopup = ({ hobby, description, date, image }) => {
  return (
    <div className="lg:px-16 p-10 bg-dark_blue text-back_light_blue">
        <h3 className="text-2xl pb-4">{hobby}</h3>
        <div className='flex gap-6 items-start'>
            <div className='flex-1'>
                <p className="text-lg font-semibold">{date}</p>
                <p className="mt-2">{description}</p>
            </div>
            {image && (
              <img
                src={image}
                alt="Hobby image"
                className="w-1/2 h-auto lg:max-h-[450px] object-cover border border-slate-400"
                style={{ aspectRatio: 16/9 }}
              />
            )}
        </div>
    </div>
  );
};

export default HobbyPopup;
