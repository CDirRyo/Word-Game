
const Button = ({id, onClick}) => {
  return <button id={id} onClick={onClick}>{id.toUpperCase()}</button>;
};

export default Button;
