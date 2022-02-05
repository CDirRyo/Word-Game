import GuessLetter from "./GuessLetter";

const Guess = ({classes}) => {
  return (
  <div className = {classes}>
      <GuessLetter classes="guess-letter"/>
      <GuessLetter classes="guess-letter"/>
      <GuessLetter classes="guess-letter"/>
      <GuessLetter classes="guess-letter"/>
      <GuessLetter classes="guess-letter"/>     
  </div>
  );
};

export default Guess;
