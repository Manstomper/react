import { React, useState } from 'react';
import Foo from './src/components/foo';

const Bar = (props) => <p>{parseInt(props.x || 0) + parseInt(props.y || 0)}</p>;

const ListExample = (props) => (
  <ul>
    {props.items.map((item) => (
      <li key={item.id}>{item.content}</li>
    ))}
  </ul>
);

const FormExample = () => {
  const [values, setValues] = useState(['one', 'two']);
  const [newValue, setNewValue] = useState('');

  const handleInput = (e) => {
    setNewValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues([...values, newValue]);
  };

  //console.debug(values);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type something
        <input type="text" value={newValue} onChange={handleInput} />
      </label>
      <button type="submit">Submit</button>
      <p>Last item added: {values.at(-1)}</p>
    </form>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const TreasureHunt = () => {
  const [moves, setMove] = useState({ north: 0, south: 0, west: 0, east: 0 });

  const addMove = (direction) => {
    return () => {
      setMove({
        ...moves,
        [direction]: moves[direction] + 1,
      });
    };
  };

  //console.debug(moves);

  return (
    <div>
      {Object.keys(moves).map((val, index) => (
        <Button
          key={index}
          text={val.charAt(0).toUpperCase() + val.slice(1)}
          handleClick={addMove(val)}
        />
      ))}
    </div>
  );
};

const App = ({ foo }) => {
  const getYear = () => new Date().getFullYear();
  const staticNumber = 10;

  /*const arr = [...['first', 'second'], ...['third']];
  const [first, second, ...rest] = arr;
  console.debug(arr);*/

  return (
    <>
      <h1>Hello</h1>
      <Foo something="This is a prop." somethingElse="This is another prop." />
      <Bar x="4" y={staticNumber} id="1" />
      <Bar x="9" id="2" />
      <p>Now is the year {getYear()}</p>
      {staticNumber == 10 && <p>staticNumber is 10</p>}
      <ListExample items={foo} />
      <FormExample />
      <TreasureHunt />
    </>
  );
};

export default App;
