const buttons = document.querySelectorAll('.guess__btn');
const resultRight = document.querySelector('.result__right');
const resultWrong = document.querySelector('.result__wrong');
const highNumber = document.querySelector('#highscore');
const сount = document.querySelector('#count');

let color;
let currentColor;
let randomIndex;

initiateButtonHandlers();
randomBackground();
buttonColor();

function checkEqual(elem) {
    let highScore = +(highNumber.innerHTML);
    let score = +(сount.innerHTML);
    
    if (elem.innerHTML === currentColor) {
        highScore > score ? highScore : highScore += 1 ;
        score += 1;

        highNumber.innerHTML = highScore;
        сount.innerHTML = score;

        resultRight.classList.remove('_hide');
        resultWrong.classList.add('_hide');
    } else {  
        сount.innerHTML = 0;

        resultRight.classList.add('_hide'); 
        resultWrong.classList.remove('_hide');
    }
    randomBackground();
    buttonColor();
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

function randomBackground() {
    currentColor = getRandomColor();
    document.body.style.background = currentColor;
}

function buttonColor() {
    let indexButton = Array.from(buttons);

    randomIndexButton();
    
    indexButton[0].innerHTML = getRandomColor();
    indexButton[1].innerHTML = getRandomColor();
    indexButton[2].innerHTML = getRandomColor();

    indexButton[randomIndex].innerHTML = currentColor;
}

function randomIndexButton() {
    randomIndex = Math.round(Math.random()*2);
    
    return randomIndex;
}

function initiateButtonHandlers() {
    for (const button of buttons) {
        const checkingFunction = () => {
            checkEqual(button);
        }
        button.addEventListener('click', checkingFunction);
    }
}
