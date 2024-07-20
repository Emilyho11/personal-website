import React, { useState, useEffect } from 'react';
import ContentContainer from '../components/ContentContainer';
import MusicNote1 from '../assets/images/1musicnote.png';
import HobbyPopup from '../components/HobbyPopup';
import Piano from '../assets/images/hobbies/piano.jpg';

const HobbiesGame = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [visible, setVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const hobbies = ['Reading', 'Gaming', 'Hiking', 'Cooking', 'Traveling', 'Photography'];
  const hobby = 'Piano';

  useEffect(() => {
    const randomizePosition = () => {
      const top = Math.random() * (window.innerHeight - 100); // Subtracting image height
      const left = Math.random() * (window.innerWidth - 100); // Subtracting image width
      setPosition({ top, left });
    };

    randomizePosition();

    const interval = setInterval(() => {
      randomizePosition();
      setVisible(false);
      setTimeout(() => setVisible(true), 1000); // Time for disappear animation
    }, 2000); // Change position every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNoteClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <ContentContainer>
        <h2>Try to catch as many music notes as you can to see all my hobbies and extracurricular activities!</h2>
        
        {/* {hobbies.map((hobby, index) => (
            <div key={index} className='bg-gray-200 p-4 rounded shadow'>
              <HobbyPopup hobby={hobby} />
            </div>
        ))} */}
        <HobbyPopup hobby='Piano' description='I like this hobby' date='2006-present' image={Piano}/>
        
        {visible && (
          <button
            onClick={handleNoteClick}
            className="focus:outline-none absolute"
            style={{ top: `${position.top}px`, left: `${position.left}px`, transition: 'top 1s, left 1s' }}
          >
            <img src={MusicNote1} alt="button image" className="w-1/12 h-full object-cover animate-fade-out"></img>
          </button>
        )}
        
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded">
              <h3>Popup Content</h3>
              <p>Here you can put information about hobbies or other content.</p>
              <button onClick={closePopup} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
            </div>
          </div>
        )}
      </ContentContainer>
    </>
  );
}

export default HobbiesGame;
