const buttons = document.querySelectorAll('.btn');
const resultRight = document.querySelector('.resultRight');
const resultWrong = document.querySelector('.resultWrong');
const highNumber = document.querySelector('.highNumber');
const сount = document.querySelector('.highCount');

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

        resultRight.classList.remove('hide');
        resultWrong.classList.add('hide');
    } else {  
        сount.innerHTML = 0;

        resultRight.classList.add('hide'); 
        resultWrong.classList.remove('hide');
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
