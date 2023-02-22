import React from 'react';

export default (props) => {
  return (
    <button type="button" onClick={props.handleClick}>
      {props.text}
    </button>
  );
};
