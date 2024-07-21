import React from 'react';
import ContentContainer from './ContentContainer';

const HobbyPopup = ({ hobby, description, date, image }) => {
  return (
    <div className="lg:px-16 p-10 bg-dark_blue text-back_light_blue">
        <h3 className="text-2xl">{hobby}</h3>
        <p className="text-m font-semibold">{date}</p>
        <div className='flex gap-6 items-start'>
            <div className='flex-1 pt-4'>
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
