'use strict';
const name = prompt('Anna nimesi:')
const house_number = Math.floor(Math.random() * 4) + 1;
if (house_number === 1) {
  document.querySelector('#target').innerHTML = `${name}, you are Gryffindor!`;
}
if (house_number === 2) {
  document.querySelector('#target').innerHTML = `${name}, you are Ravenclaw!`;
}
if (house_number === 3) {
  document.querySelector('#target').innerHTML = `${name}, you are Huffelpuff!`;
}
if (house_number === 4) {
  document.querySelector('#target').innerHTML = `${name}, you are Slytherin!`;
}