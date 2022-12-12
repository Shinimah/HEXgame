const buttons = document.querySelectorAll('.btn');
const resultRight = document.querySelector('.resultRight');
const resultWrong = document.querySelector('.resultWrong');
const highNumber = document.querySelector('.highNumber');
const highCount = document.querySelector('.highCount');

function checkEqual(elem, color) {
    let highNumbers = +(highNumber.innerHTML);
    let highCounts = +(highCount.innerHTML);
    if (elem.innerHTML === color) {
        
        highNumbers > highCounts ? highNumbers : highNumbers += 1 ;
        highCounts += 1;

        highNumber.innerHTML = highNumbers;
        highCount.innerHTML = highCounts;

        randomBackground(color);
        return resultRight.classList.remove('hide');
    } 
    highCount.innerHTML = 0;
    randomBackground(color);
    resultRight.classList.add('hide');
    return resultWrong.classList.remove('hide');
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function randomBackground() {
    let index = Array.from(buttons);

    let background = index[0].innerHTML = getRandomColor();
    index[1].innerHTML = getRandomColor();
    index[2].innerHTML = getRandomColor();
    
    document.body.style.background = background;

    for (const button of buttons) {
        const checkingFunction = () => {
            checkEqual(button, background)
        }
        button.addEventListener('click', checkingFunction);
    }
}

randomBackground();