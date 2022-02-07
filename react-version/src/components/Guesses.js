import Guess from "./Guess";

const Guesses = ({letter, guess, background, guesses}) => {
    const indexes = [0,1,2,3,4,5];   

    return (
    <div className= "guesses">
        {indexes.map(index => <Guess background={background[index]} currentLetters={guesses[index]} letter = {letter} key={`guess-${index}`} isCurrentGuess={index===guess} classes = {index === guess ? `guess current-guess` : "guess"}/>)}    
    </div>
    );
};

export default Guesses;
