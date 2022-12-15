'use strict';
let target = document.querySelector('#target');

function squarerootter() {
  const query = confirm('Should i calculate the squareroot?');
  if (query === true) {
    let number = parseInt(prompt('Give number to calculate sqroot:'));
    if (number < 0) {
      target.innerHTML = `The square root of a negative number is not defined`;
    }

    let answer = Math.sqrt(number);
    target.innerHTML = `The square root of ${number} is : ${answer}`;
  } else {
    target.innerHTML = `The square root is not calculated`;
  }
}