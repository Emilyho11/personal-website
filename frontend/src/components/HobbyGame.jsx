import React, { useState, useEffect } from 'react';
import ContentContainer from '../components/ContentContainer';
import MusicNote1 from '../assets/images/music_notes/1musicnote.png';
import MusicNote2 from '../assets/images/music_notes/2musicnote.png';
import MusicNote3 from '../assets/images/music_notes/3musicnote.png';
import MusicNote4 from '../assets/images/music_notes/4musicnote.png';
import MusicNote5 from '../assets/images/music_notes/5musicnote.png';
import MusicNote6 from '../assets/images/music_notes/6musicnote.png';
import HobbyPopup from '../components/HobbyPopup';
import hobbies from './AccessHobbies.jsx';
import EmptyPopup from '../components/EmptyPopup.jsx';
import BackgroundNotes from '../assets/images/music_bg.png';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const MusicNoteButton = ({ noteIndex, position, visible, handleNoteClick }) => {
  const musicNotes = [MusicNote1, MusicNote2, MusicNote3, MusicNote4, MusicNote5, MusicNote6];
  if (!visible) return null;

  return (
    <button
      onClick={() => handleNoteClick(noteIndex)}
      className="focus:outline-none absolute"
      style={{ top: `${position.top}px`, left: `${position.left}px`, transition: 'top 1s, left 1s' }}
    >
      <img src={musicNotes[noteIndex]} alt="button image" className="w-1/12 h-full object-cover animate-fade-out"></img>
    </button>
  );
};

const HobbyGame = () => {
  const [position, setPosition] = useState(Array(6).fill({ top: 0, left: 0 }));
  const [visible, setVisible] = useState(Array(6).fill(true));
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
    const selectedHobbies = shuffledHobbies.slice(0, 6).map((hobby, index) => index);
    setRandomHobbyIdx(selectedHobbies);
    setEmptyPopupIdx(Math.floor(Math.random() * 6));
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

      {position.map((pos, index) => (
        <MusicNoteButton
          key={index}
          noteIndex={index}
          position={pos}
          visible={visible[index]}
          handleNoteClick={handleNoteClick}
        />
      ))}

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