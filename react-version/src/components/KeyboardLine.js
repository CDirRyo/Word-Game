import Button from './Button';

const KeyboardLine = ({buttons}) => {
  return (
  <div className = 'keyboard-line'>
      {buttons.map((button) => <Button id={button} />)}
  </div>
  );
};

export default KeyboardLine;
