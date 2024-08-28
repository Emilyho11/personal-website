import React, { useState } from 'react'
import Piano from '../assets/images/hobbies/piano.jpg';
import DragonBoat from '../assets/images/hobbies/dragonBoat.jpg';
import WushuCompetition from '../assets/images/hobbies/wushu_competition.jpg';
import Flute from '../assets/images/hobbies/kiss_the_rain_flute.jpg';
import CheerPerformance from '../assets/images/hobbies/performance.jpg';
import moveU from '../assets/images/hobbies/tabling_moveU.jpg';
import Swimming from '../assets/images/hobbies/swimming.jpg';
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
      date: '2009-present',
      image: Piano
    },
    {
      hobbyName: 'Dragon Boat Team',
      description: 'I was part of the Dragon Boat team at Crystal Claire Cosmetics Inc. during my 1st co-op term as a Software Engineer. We won GOLD at the Toronto Dragon Boat Festival! It was a great experience to work with my colleagues outside of the office and to build a strong team spirit.',
      date: '2023',
      image: DragonBoat
    },
    {
      hobbyName: 'Wushu (Kung Fu)',
      description: 'I was part of the Wushu team, participating in competitions, performances, Toronto parades, and many more. We practice acrobatics, and use weapons such as swords, staffs, and spears. I have been practicing Wushu for over 10 years, and it has taught me discipline, respect, and perseverance.',
      date: '2014-present',
      image: WushuCompetition
    },
    {
      hobbyName: 'Cheerleading Team',
      description: 'Particpated in the uoft cheer team, and performed at various events, such as basketball games, and performances. It was a great experience to work with my teammates, and to build a strong team spirit.',
      date: '2023-2024',
      image: CheerPerformance
    },
    {
      hobbyName: 'Flute',
      description: 'I was part of concert band from grade 6 to grade 10, playing the flute. I enjoyed playing in the band, and performing at school concerts, music competitions, and music festivals. I have played many pieces, such as "The Lion King", "Pirates of the Caribbean", and "The Incredibles".',
      date: '2014-2019',
      image: Flute
    },
    {
      hobbyName: 'Swimming',
      description: 'I have been swimming and taking swimming lessons since I was 6, and I aimed to get my lifeguard certifications. I received my Bronze Medallion, but after that, COVID hit and prevented me from completing it. However, to this day, swimming is still a hobby I enjoy.',
      date: '2009-2019',
      image: Swimming
    },
    {
      hobbyName: 'MoveU',
      description: 'MoveU is a UofT Athletics club that promotes healthy living and physical activity. As a first year representative for this club, I planned and participated in various events and activities such as dodgeball, weekly workouts, SheMoves, and many more! It was a great way to stay active and meet new people, while ensuring that students are taking care of their physical health.',
      date: '2021-2022',
      image: moveU
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
          <div className='md:flex gap-6 items-start'>
          <p className="mt-2">{hobby.description}</p>
            {hobby.image && (
              <img
                src={hobby.image}
                alt={`${hobby.hobbyName} image`}
                className="w-1/2 h-auto lg:max-h-[450px] object-cover border border-slate-400"
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
  )
}

export default HobbyList;