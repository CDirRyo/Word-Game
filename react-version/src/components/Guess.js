import GuessLetter from "./GuessLetter";

const Guess = ({classes, isCurrentGuess}) => {
    const indexes = [0,1,2,3,4];
    return (   
    <div className= {classes}>
        {indexes.map(index => <GuessLetter classes = {index === currentLetter && isCurrentGuess ? `guess-letter active` : "guess-letter"}/>)}    
    </div> 
    
    );
};

export default Guess;
