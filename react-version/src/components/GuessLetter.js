const GuessLetter = ({classes, background, currentLetter}) => {
  return <p className={`${classes} ${background}`}>{currentLetter}</p>;
};

export default GuessLetter;
