import Guesses from './Guesses';
import Keyboard from './Keyboard'
import {useState, useEffect} from 'react';


const Game = () => {
    //Initial state is Guess 0 and Letter 0
    const [state, setState] = useState(
        {
            tracker: [0,0],
            guesses: 
            [
                ['','','','',''],
                ['','','','',''],
                ['','','','',''],
                ['','','','',''],
                ['','','','',''],
                ['','','','','']
            ],
            background: 
            [
                ['','','','',''],
                ['','','','',''],
                ['','','','',''],
                ['','','','',''],
                ['','','','',''],
                ['','','','','']
            ],
            word: {},
            isOver: false
    });
   

    

    useEffect(() => {
        const words = [
            {
                "R": [0],
                "E": [1, 3],
                "B": [2],
                "L": [4]
            },
            {
                "L":[0],
                "O":[1],
                "V":[2],
                "E":[3],
                "R":[4]
            },
            {
                "S":[0],
                "H":[1],
                "A":[2],
                "D":[3],
                "E":[4]
            }
        ]
        const randomizer = Math.floor(Math.random()*3);
        setState((previous) => ({...previous, word: words[randomizer]}));
    }, []);
    
    const onClick = (e) => {
        
        const write = (pressed) => {
            let guessesCopy = state.guesses;
            guessesCopy[state.tracker[0]][state.tracker[1]] = pressed;
            setState((previous) => ({...previous, guesses:guessesCopy}));
            if (state.tracker[1] !== 5) {
                setState((previous) => ({...previous, tracker: [state.tracker[0], state.tracker[1] + 1]}));
                
            }
        }

        const erase = () => {
            let guessesCopy = state.guesses;                      
            guessesCopy[state.tracker[0]][state.tracker[1]-1] = "";
            setState((previous) => ({...previous, guesses:guessesCopy}));
            if (state.tracker[1] !== 0) {
                setState((previous) => ({...previous, tracker: [state.tracker[0], state.tracker[1] - 1]}));
            }
        }

        const enter = () => {
            let wordCopy = JSON.parse(JSON.stringify(state.word));
            let backgroundCopy = state.background;
            if (state.tracker[1] !== 5) {
                window.alert("Please write a 5 letter word");
            } else {
                for (let i = 0; i < 5; i++) {
                    let currentLetter = state.guesses[state.tracker[0]][i];
                    if (!(currentLetter in wordCopy)) {
                        backgroundCopy[state.tracker[0]][i] = "red";
                    } else if (wordCopy[currentLetter].includes(i)) {
                        backgroundCopy[state.tracker[0]][i] = "green";
                        wordCopy[currentLetter] = wordCopy[currentLetter].filter((element) => element !== i);
                    }
                }
                 
                for (let i = 0; i < 5; i++) {
                    let currentLetter = state.guesses[state.tracker[0]][i];
                    if (backgroundCopy[state.tracker[0]][i] === "" && currentLetter in wordCopy) {
                        if (wordCopy[currentLetter].length !== 0) {
                            wordCopy[currentLetter].shift();
                            backgroundCopy[state.tracker[0]][i] = "yellow";
                        } else {
                            backgroundCopy[state.tracker[0]][i] = "red";
                        }
                    }
                }
                setState((previous) => ({...previous, background: backgroundCopy}));                   
                }                        
        }

        const checkIfWon = () => {
            if (state.background[state.tracker[0]].toString() === ["green","green","green","green","green"].toString()){
                                
                window.alert("You Won!");  
                setState((previous) => ({...previous, isOver:true})); 
            } else if (state.tracker[0] !== 5){
                setState((previous) => ({...previous, tracker :[state.tracker[0]+1, 0]}));
            } else {
                window.alert("You lost");
                setState((previous) => ({...previous, isOver:true})); 
            }  
        }

        const pressed = e.target.id.toUpperCase();
        
        if(!state.isOver){
            if (pressed === "ENTER") {
                enter();
                checkIfWon();
                
            } else if(pressed === "ERASE") {
                erase();
            } else {
                write(pressed);
            }
        }
        
    }
    
    return (
        <div className="game">
            <Guesses letter = {state.tracker[1]} guess = {state.tracker[0]} background={state.background} guesses={state.guesses}/>
            <Keyboard onClick = {onClick}/>
        </div>  
    );
};

export default Game;
   