import React from 'react';
import ContentContainer from './ContentContainer';

const HobbyPopup = ({ hobby, description, date, image }) => {
  return (
    <ContentContainer className="p-10 bg-back_light_blue">
        <h3 className="text-xl font-bold">{hobby}</h3>
        <div className='flex'>
            <div>
                <p>{description}</p>
                <p>{date}</p>
            </div>
            {image && <img src={image} alt={hobby} className="w-full h-auto mt-4" />}
        </div>
    </ContentContainer>
  );
};

export default HobbyPopup;
