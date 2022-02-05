import Guesses from './Guesses';
import Keyboard from './Keyboard'
import {useState} from 'react';

const Game = () => {
    //Initial state is Guess 0 and Letter 0
    const [tracker, setTracker] = useState([0,0]);
    const [guesses, setGuesses] = useState(
        [
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ]
            
        );
    const onClick = (e) => {
        const write = (pressed) => {
            let guessesCopy = guesses;
            guessesCopy[tracker[0]][tracker[1]] = pressed;
            setGuesses(guessesCopy);
            if (tracker[1] !== 5) {
                setTracker([tracker[0], tracker[1]++]);
            }
        }

        const erase = () => {
            let guessesCopy = guesses;                      
            guessesCopy[tracker[0]][tracker[1]-1] = "";
            setGuesses(guessesCopy);
            if (tracker[1] !== 0) {
                setTracker([tracker[0], tracker[1]--]);
            }
        }

        const nextGuess = () => {

            if (tracker[1] !== 5) {
                window.alert("Please write a 5 letter word");
            } else {
                setTracker([tracker[0]++, 0]);
            }
        }

        const pressed = e.target.id.toUpperCase();
        if (pressed === "ENTER") {
            nextGuess();
        } else if(pressed === "ERASE") {
            erase();
        } else {
            write(pressed);
        }
    }

    return (
        <div className="game">
        <Guesses letter = {tracker[1]} guess = {tracker[0]} onClick = {onClick}/>
        <Keyboard />
        </div>  
    );
};

export default Game;
   