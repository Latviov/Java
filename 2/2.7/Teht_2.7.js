'use strict';

let target = document.querySelector('#target')

let html = '<ul>'

let die = Math.floor(Math.random() * 21) + 1;

function rollDice(dieface) {
    die = Math.floor(Math.random() * dieface) + 1;
    html += '<li>'
    html += die
    html += '</li>'
}


while (die !== 21) {
    rollDice(21);
}


html += '</ul>'
target.innerHTML = html