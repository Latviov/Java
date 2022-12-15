'use strict';
const target = document.querySelector('#target')

let numbers = [];
let number = parseInt(prompt('Give number:'));
numbers.push(number);

while (numbers.includes(number)){
  number = parseInt(prompt('Give more number:'));
  numbers.push(number);
  if (numbers.includes(number)){
  break;
}
}
numbers.sort(function(a, b){return a-b})

target.innerHTML = numbers
