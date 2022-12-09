const buttons = document.querySelectorAll('.btn');

randomColor();

for (const button of buttons) {
    button.addEventListener('click', () => checkEqual(button));
    button.removeEventListener('click', () => checkEqual(button));
}

function checkEqual(elem) {
    if (elem.innerHTML === '#') {
       return alert("Yes")
    } alert("No")
}


function randomColor() {
    const bgColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = bgColor;
}


function result(event) {
    event.target.classList.add('hide')
}
result();