
let secretNo = 0;
let score = 20;
let highScore = 0;

let message = document.querySelector('.message');
let displayScore = document.querySelector('.score');
let displayHighScore = document.querySelector('.high-score');
let body = document.querySelector('body');
let guessDisplay = document.querySelector('.number');
let numDisplay = document.querySelector('.number-display');


function init() {
    
    resetClassList(body, 'winner');
    resetClassList(numDisplay, 'number-winner');

    printMessage('Start guessing!');
    
    displayHighScore.textContent = highScore;
    score = 20;
    displayScore.textContent = score;
    numDisplay.textContent = '?';
    guessDisplay.value = '';

    secretNo = Math.trunc(Math.random()* 20) + 1;
    console.log(secretNo);
};

function printMessage(mess) {
    message.textContent = mess;
};

function resetClassList(el, classEl) {
    if(el.classList.contains(classEl)) {el.classList.remove(classEl)};
};


document.querySelector('.check').addEventListener('click', () => {

    if(score > 0) {
        let guess = Number((guessDisplay).value);
            
        if(!guess) {
            printMessage('Enter a number');
        } else if (guess > 20 || guess < 1) {
        printMessage('Number should be between 1 - 20');
        } else if (guess === secretNo) {
            printMessage('Correct number!');
        
            body.classList.add('winner');

            numDisplay.textContent = secretNo;
            numDisplay.classList.add('number-winner');

            if (score > highScore) {
                highScore = score;
            }

        } else {
            guess > secretNo ? printMessage('Your guess was too high') : printMessage('Your guess was too low');
            score--;
            if(score < 1) {printMessage('You loose'); }
            displayScore.textContent = score;
        } 
    }
});

document.querySelector('.again').addEventListener('click', () => {
    
    init();
});

init();