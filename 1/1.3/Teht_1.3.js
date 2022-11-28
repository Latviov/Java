'use strict';
const n1 = parseInt(prompt('Anna 1. nro'));
const n2 = parseInt(prompt('Anna 2. nro'));
const n3 = parseInt(prompt('Anna 3. nro'));

const sum = n1 + n2 + n3;
const prod = n1 * n2 * n3;
const average = sum / 3;

document.querySelector(
    '#target').innerHTML = `summa ${sum}, tulo ${prod}, keskiarvo ${average}`;