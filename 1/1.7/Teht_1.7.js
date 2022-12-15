'use strict';

function diceRoller() {
  let answer1 = document.querySelector('#target');
  let answer2 = document.querySelector('#target2');

  let dices = parseInt(prompt('How many dice to roll?'));
  let list = [];

  function addDice() {
    for (let i = 0; i < dices; i++) {
      list.push(Math.floor(Math.random() * 6) + 1);
    }
  }

  addDice();
  answer1.innerHTML = `Die faces: ${list}`;

  let sum = 0;
  for (let i in list) {
    sum += list[i];
  }
  answer2.innerHTML = `Sum: ${sum}`
}