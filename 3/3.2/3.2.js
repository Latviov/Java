'use strict';

let list = document.getElementById('target');

let item1 = document.createElement('li');
item1.innerText = 'First item';
list.appendChild(item1);

let item2 = document.createElement('li');
item2.innerText = 'Second item';
list.appendChild(item2);
item2.classList.add('my-item');


let item3 = document.createElement('li');
item3.innerText = 'Third item';
list.appendChild(item3);