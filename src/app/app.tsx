import React, { useState } from 'react';
import Button from './src/components/button';

const App = () => {
  const [moves, setMove] = useState({ north: 0, east: 0, south: 0, west: 0 });

  const addMove = (direction) => {
    setMove({
      ...moves,
      [direction]: moves[direction] + 1,
    });
  };

  console.debug(moves);

  return (
    <>
      {Object.keys(moves).map((val, index) => (
        <Button
          key={index}
          text={'Move ' + val}
          handleClick={() => addMove(val)}
        />
      ))}
    </>
  );
};

export default App;
