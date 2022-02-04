//Selectors
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const i = document.getElementById("i");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");
const m = document.getElementById("m");
const n = document.getElementById("n");
const o = document.getElementById("o");
const p = document.getElementById("p");
const q = document.getElementById("q");
const r = document.getElementById("r");
const s = document.getElementById("s");
const t = document.getElementById("t");
const u = document.getElementById("u");
const v = document.getElementById("v");
const w = document.getElementById("w");
const x = document.getElementById("x");
const y = document.getElementById("y");
const z = document.getElementById("z");
const backspace = document.getElementById("backspace");
const enter = document.getElementById("enter");
let currentGuess = document.getElementsByClassName("guess")[0];
let currentLetter = currentGuess.getElementsByClassName("guess-letter")[0];




//Initialization
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
const word = words[randomizer];
let guessCounter = 0;
let letterCounter = 0;
let eraseCurrent = false;
let gameFinished = false;



//Functions
const endGame = () => {
        gameFinished = true;
        enter.removeEventListener("click", checkLetters);
        backspace.removeEventListener("click", erase);
        currentLetter.classList.remove("active");
}

const write = (e) => {
    if (!gameFinished){
        if (letterCounter < 4){        
            currentLetter.classList.remove("active");
            currentLetter.textContent = e.srcElement.id.toUpperCase();
            letterCounter++;
            currentLetter = currentGuess.getElementsByClassName("guess-letter")[letterCounter];
            currentLetter.classList.add("active");
        } else if (letterCounter === 4){
            currentLetter.textContent = e.srcElement.id.toUpperCase();
        }  
    }
    
}

const erase = (e) => {
    if (!gameFinished) {
        if (letterCounter === 4 || eraseCurrent){
            currentLetter.classList.remove("active");
            currentLetter.textContent = "";
            letterCounter--;
            currentLetter = currentGuess.getElementsByClassName("guess-letter")[letterCounter];
            currentLetter.classList.add("active");
            if (letterCounter === 3){
                eraseCurrent = true;
            }else if (letterCounter ===0){
                eraseCurrent = false;
            }
        }else if (letterCounter > 0){        
            currentLetter.classList.remove("active");
            let previousLetter = currentGuess.getElementsByClassName("guess-letter")[letterCounter-1];
            previousLetter.textContent = "";
            letterCounter--;
            currentLetter = currentGuess.getElementsByClassName("guess-letter")[letterCounter];
            currentLetter.classList.add("active");
        }else if(letterCounter === 0){
            currentLetter.textContent = "";
        }
    }
    
}


const checkLetters = () => {
    if (letterCounter === 4 && currentLetter.textContent !== "") {
        let guess = {};
        let transformation = ["red", "red", "red", "red", "red"];
        let tempWord = JSON.parse(JSON.stringify(word));
    
        const buildGuess = () => {
            for (let i = 0; i < 5; i++) {
                const text = currentGuess.getElementsByClassName("guess-letter")[i].textContent;
                if (text in guess) {
                    guess[text].push(i);
                }
                else {
                    guess[text] = [i];
                }
            }
        }
    
        const checkGreen = () => {
            
            for (const key in guess) {
                if (key in tempWord) {
                    for(let i = 0; i < guess[key].length; i++){
                        if (tempWord[key].includes(guess[key][i])){
                            transformation[guess[key][i]] = "green";
                            tempWord[key].shift();
                        }
                    }
                }
            }
            
        } 
    
        const checkYellow = () => {
            for(let key in tempWord) {
                if (tempWord[key].length > 0 && key in guess){
                    for (let i = 0; i < tempWord[key].length; i++){         
                        for (let j = 0; j < guess[key].length; j++){
                                    
                            if (transformation[guess[key][j]] === "red" ){
                                transformation[guess[key][j]] = "yellow";
                                break;
                            }
                        }
                    }
                }                        
            }                    
        }
    
        const changeBackground = () => {
            let counter = 0;
            for (const element of currentGuess.getElementsByClassName("guess-letter")) {
                element.classList.add(transformation[counter]);
                counter++;
            }
        }


        const checkIfWon = () => {

            const nextGuess = () => {
                letterCounter = 0;
                guessCounter++;
                if (guessCounter < 6){
                    currentLetter.classList.remove("active");
                    currentGuess.classList.remove("current-guess");
                    currentGuess = document.getElementsByClassName("guess")[guessCounter];
                    currentLetter = currentGuess.getElementsByClassName("guess-letter")[0];    
                    currentLetter.classList.add("active");
                    currentGuess.classList.add("current-guess");
        
                } else {
                    endGame();
                    window.alert("You Lost");
                }
                
            }
            
            if (transformation.toString() == ["green","green","green","green","green"].toString()){
                endGame();
                window.alert("You won!");
            } else {
                nextGuess();
            }
        }        
        
        buildGuess();
        checkGreen();
        checkYellow();
        changeBackground();
        checkIfWon();
    }
   
    else {
        window.alert("Please type a 5 letter word.")
    }
}

//Event Listeners
enter.addEventListener("click", checkLetters);
backspace.addEventListener("click", erase);
a.addEventListener("click", write);
b.addEventListener("click", write);
c.addEventListener("click", write);
d.addEventListener("click", write);
e.addEventListener("click", write);
f.addEventListener("click", write);
g.addEventListener("click", write);
h.addEventListener("click", write);
i.addEventListener("click", write);
j.addEventListener("click", write);
k.addEventListener("click", write);
l.addEventListener("click", write);
m.addEventListener("click", write);
n.addEventListener("click", write);
o.addEventListener("click", write);
p.addEventListener("click", write);
q.addEventListener("click", write);
r.addEventListener("click", write);
s.addEventListener("click", write);
t.addEventListener("click", write);
u.addEventListener("click", write);
v.addEventListener("click", write);
x.addEventListener("click", write);
w.addEventListener("click", write);
y.addEventListener("click", write);
z.addEventListener("click", write);

