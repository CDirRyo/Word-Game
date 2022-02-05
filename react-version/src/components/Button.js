import React from 'react';

const Button = ({id}) => {
  return <button id={id} >{id.toUpperCase()}</button>;
};

export default Button;
