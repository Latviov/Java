'use strict';
let target = document.querySelector('#target')

let html = '<ul>'

let die = Math.floor(Math.random() * 6) + 1;

function rollDice() {
    die = Math.floor(Math.random() * 6) + 1;
    html += '<li>'
    html += die
    html += '</li>'
}

while (die !== 6) {
    rollDice();
}

html += '</ul>'
target.innerHTML = html