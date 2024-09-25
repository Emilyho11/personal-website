import React, { useState, useEffect } from 'react';
import ContentContainer from '../components/ContentContainer';
import MusicNote1 from '../assets/images/1musicnote.png';
import MusicNote2 from '../assets/images/2musicnote.png';
import MusicNote3 from '../assets/images/3musicnote.png';
import MusicNote4 from '../assets/images/4musicnote.png';
import MusicNote5 from '../assets/images/5musicnote.png';
import HobbyPopup from '../components/HobbyPopup';
import hobbies from './AccessHobbies.jsx';
import EmptyPopup from '../components/EmptyPopup.jsx';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const HobbyGame = () => {
  const [position, setPosition] = useState(Array(5).fill({ top: 0, left: 0 }));
  const [visible, setVisible] = useState(Array(5).fill(true));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentHobbyIdx, setCurrentHobbyIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [randomHobbyIdx, setRandomHobbyIdx] = useState([]);
  const [clickedHobbies, setClickedHobbies] = useState(new Set());
  const [emptyPopupIdx, setEmptyPopupIdx] = useState(null);

  useEffect(() => {
    const randomizePositions = () => {
      const newPositions = position.map(() => ({
        top: Math.random() * (window.innerHeight - 200),
        left: Math.random() * (window.innerWidth - 100)
      }));
      setPosition(newPositions);
    };

    const randomizeVisibility = () => {
      setVisible(visible.map(() => Math.random() > 0.5));
    };

    randomizePositions();
    randomizeVisibility();

    const interval = setInterval(() => {
      randomizePositions();
      randomizeVisibility();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const shuffledHobbies = shuffleArray([...hobbies]);
    const selectedHobbies = shuffledHobbies.slice(0, 5).map((hobby, index) => index);
    setRandomHobbyIdx(selectedHobbies);
    setEmptyPopupIdx(Math.floor(Math.random() * 5));
  }, []);

  const handleNoteClick = (noteIndex) => {
    if (noteIndex === emptyPopupIdx) {
      setIsPopupOpen(true);
      setCurrentHobbyIdx(null);
      setScore(0);
      setClickedHobbies(new Set());
      return;
    }

    const hobbyIdx = randomHobbyIdx[noteIndex];
    if (!clickedHobbies.has(hobbyIdx)) {
      setScore(score + 1);
      setClickedHobbies(new Set(clickedHobbies.add(hobbyIdx)));
    }
    setCurrentHobbyIdx(hobbyIdx);
    setIsPopupOpen(true);
    if (score + 1 === hobbies.length) {
      alert('You have found all my hobbies!');
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <ContentContainer>
      <div className='text-center'>
        <h2>Score: {score} / 15</h2>
        <h3>Try to catch as many music notes as you can to see all my hobbies and extracurricular activities!</h3>
      </div>

      {visible[0] && (
        <button
          onClick={() => handleNoteClick(0)}
          className="focus:outline-none absolute"
          style={{ top: `${position[0].top}px`, left: `${position[0].left}px`, transition: 'top 1s, left 1s' }}
        >
          <img src={MusicNote1} alt="button image" className="w-10 h-full object-cover animate-fade-out"></img>
        </button>
      )}

      {visible[1] && (
        <button
          onClick={() => handleNoteClick(1)}
          className="focus:outline-none absolute"
          style={{ top: `${position[1].top}px`, left: `${position[1].left}px`, transition: 'top 1s, left 1s' }}
        >
          <img src={MusicNote2} alt="button image" className="w-1/12 h-full object-cover animate-fade-out"></img>
        </button>
      )}

      {visible[2] && (
        <button
          onClick={() => handleNoteClick(2)}
          className="focus:outline-none absolute"
          style={{ top: `${position[2].top}px`, left: `${position[2].left}px`, transition: 'top 1s, left 1s' }}
        >
          <img src={MusicNote3} alt="button image" className="w-1/12 h-full object-cover animate-fade-out"></img>
        </button>
      )}

      {visible[3] && (
        <button
          onClick={() => handleNoteClick(3)}
          className="focus:outline-none absolute"
          style={{ top: `${position[3].top}px`, left: `${position[3].left}px`, transition: 'top 1s, left 1s' }}
        >
          <img src={MusicNote4} alt="button image" className="w-1/12 h-full object-cover animate-fade-out"></img>
        </button>
      )}

      {visible[4] && (
        <button
          onClick={() => handleNoteClick(4)}
          className="focus:outline-none absolute"
          style={{ top: `${position[4].top}px`, left: `${position[4].left}px`, transition: 'top 1s, left 1s' }}
        >
          <img src={MusicNote5} alt="button image" className="w-1/12 h-full object-cover animate-fade-out"></img>
        </button>
      )}

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded">
            {currentHobbyIdx === null ? (
              <EmptyPopup />
            ) : (
              <HobbyPopup
                hobby={hobbies[currentHobbyIdx].hobbyName}
                description={hobbies[currentHobbyIdx].description}
                date={hobbies[currentHobbyIdx].date}
                image={hobbies[currentHobbyIdx].image}
                extraInfo={hobbies[currentHobbyIdx].extraInfo}
              />
            )}
            <button onClick={closePopup} className="mt-4 px-4 py-2 bg-dark_blue hover:bg-slate-600 text-white rounded">Close</button>
          </div>
        </div>
      )}
    </ContentContainer>
  );
};

export default HobbyGame;