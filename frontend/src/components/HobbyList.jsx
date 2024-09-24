import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import hobbies from './AccessHobbies.jsx'
import Slideshow from './Slideshow.jsx';

export const HobbyList = () => {
  const [expanded, setExpanded] = useState(Array(hobbies.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded(expanded.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded)));
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl text-center mb-10'>My Hobbies</h1>
      <div className='xl:grid xl:grid-cols-2 gap-10 mb-40'>
        {hobbies.map((hobby, index) => (
          <div key={index} className='bg-dark_blue p-6 text-back_light_blue rounded shadow mb-4 xl:mb-0 md:w-[400px] md:h-[350px] 2xl:w-[650px] 2xl:h-[350px] overflow-y-auto'>
            <h3 className="text-2xl">{hobby.hobbyName}</h3>
            <p className="text-m font-semibold">{hobby.date}</p>
            <div className='2xl:flex gap-6 items-start'>
              <p className="mt-2">{hobby.description}</p>
                {hobby.image && (
                  <img
                    src={hobby.image}
                    alt={`${hobby.hobbyName} image`}
                    className="lg:w-3/4 xl:w-1/2 h-auto lg:max-h-[450px] object-cover border border-slate-400"
                    style={{ aspectRatio: '16/9' }}
                  />
                )}
            </div>
            {hobby.extraInfo && (
              <div className='flex-1 pt-4'>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 py-2 text-light_blue hover:underline hover:text-links rounded"
                >
                  {expanded[index] ? 'Hide Extra Details' : 'Show Extra Details'}
                  <FontAwesomeIcon icon={expanded[index] ? faChevronUp : faChevronDown} className='ml-2 text-xl' />
                </button>
                {expanded[index] && (
                  <ul className="mt-2 list-disc list-inside">
                    {hobby.extraInfo.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>
              )}
            </div>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HobbyList;