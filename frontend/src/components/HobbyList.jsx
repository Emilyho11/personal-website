import React, { useState } from 'react'
import Piano from '../assets/images/hobbies/piano.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const HobbyList = () => {
  const hobbies = [
    {
      hobbyName: 'Piano',
      description: 'Piano is one of my favorite hobbies since I was little. I have been taking lessons at the age of 6, and I am continuing my playing to this day. I enjoy performing in front of others at school concerts, recitals, and retirement homes, as seeing others smile makes me happy. Playing piano not only brings me joy, but it helps me relax during stressful times.',
      extraInfo: [
        'Endless Love - Lionel Richie and Diana Ross',
        'Night Changes - One Direction',
        'Right Here Waiting',
        'What a Wonderful World',
        'Moon Represents my Heart - Teresa Teng',
        'I Want It That Way - Backstreet Boys',
        'River Flows In You - Yiruma',
        'Colors of the Wind - Pocahontas (Disney)',
      ],
      date: '2006-present',
      image: Piano
    },
    {
      hobbyName: 'Dragon Boat Team',
      description: 'I was part of the Dragon Boat team at Crystal Claire Cosmetics Inc. during my 1st co-op term as a Software Engineer. We want GOLD at the Toronto Dragon Boat Festival! It was a great experience to work with my colleagues outside of the office and to build a strong team spirit.',
      extraInfo: [
      ],
      date: '2006-present',
      image: Piano
    }
  ]

  const [expanded, setExpanded] = useState(Array(hobbies.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded(expanded.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded)));
  };

  return (
    <div className='grid grid-cols-2 gap-10 p-4'>
      {hobbies.map((hobby, index) => (
        <div key={index} className='bg-dark_blue p-6 text-back_light_blue rounded shadow'>
          <h3 className="text-2xl">{hobby.hobbyName}</h3>
          <p className="text-m font-semibold">{hobby.date}</p>
          <div className='flex gap-6 items-start'>
          {hobby.extraInfo && (
            <div className='flex-1 pt-4'>
            <p className="mt-2">{hobby.description}</p>
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
            {hobby.image && (
              <img
                src={hobby.image}
                alt={`${hobby.hobbyName} image`}
                className="w-1/2 h-auto lg:max-h-[450px] object-cover border border-slate-400"
                style={{ aspectRatio: '16/9' }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HobbyList;