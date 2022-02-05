import Guess from "./Guess";
import {useState} from "react";

const Guesses = () => {
    const [currentGuess, setCurrentGuess] = useState(0);
    const indexes = [0,1,2,3,4,5];
    

    return (
    <div className= "guesses">
        {indexes.map(index => <Guess isCurrentGuess={index===currentGuess} classes = {index === currentGuess ? `guess current-guess` : "guess"}/>)}    
    </div>
    );
};

export default Guesses;
