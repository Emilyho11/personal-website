import React, { useState, useEffect } from 'react';
import ContentContainer from '../components/ContentContainer';
import GameSwitch from '../components/GameSwitch';
import HobbyGame from '../components/HobbyGame';
import HobbyList from '../components/HobbyList';

const Hobbies = () => {
  const [isGame, setIsGame] = useState(true);

  return (
    <>
      <GameSwitch isGame={isGame} setIsGame={setIsGame} />
      <ContentContainer>
        {isGame ? <HobbyGame /> : <HobbyList />}
      </ContentContainer>
    </>
  );
}

export default Hobbies;
