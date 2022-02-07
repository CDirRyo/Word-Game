import GuessLetter from "./GuessLetter";

const Guess = ({classes, isCurrentGuess, letter, currentLetters, background} ) => {
    const indexes = [0,1,2,3,4];
    return (   
    <div className= {classes}>
        {indexes.map(index => <GuessLetter key={`letter-${index}`} currentLetter={currentLetters[index]} background={background[index]} classes = {index === letter && isCurrentGuess ? `guess-letter active` : "guess-letter"}/>)}    
    </div> 
    
    );
};

export default Guess;
