'use strict';

let target = document.querySelector('#target');

let amount = parseInt(prompt('How many participants?'));
let parts = [];

for (let i = 0; i < amount; i++) {
  parts[i] = prompt('Name:');
}

let list = '<ol>';
for (let i = 0; i < amount; i++) {
  list += '<li>';
  list += parts[i];
  list += '</li>';
}
list += '</ol>';
document.querySelector('#target')
target.innerHTML = list;