import React, { useState } from 'react'

const GameSwitch = ( { isGame, setIsGame } ) => {

  const toggleGame = () => {
    setIsGame(prevState => {
      const newState = !prevState;
      return newState;
    });
  };

  return (
    <div className="m-4">
    <button
      className={`px-4 py-2 font-semibold text-light_blue rounded shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300
        ${isGame ? 'bg-red-900' : 'bg-green-800'}`}
      onClick={toggleGame}
    >
      {isGame ? 'Game OFF' : 'Game ON'}
    </button>
  </div>  
  );
};

export default GameSwitch