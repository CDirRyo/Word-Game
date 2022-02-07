import Button from './Button';

const KeyboardLine = ({buttons, onClick}) => {
  return (
  <div className = 'keyboard-line'>
      {buttons.map((button) => <Button key={button} id={button} onClick={onClick}/>)}
  </div>
  );
};

export default KeyboardLine;
