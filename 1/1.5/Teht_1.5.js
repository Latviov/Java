'use strict';

const year = parseInt(prompt('Enter a year to check'));

function leapyear(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

if (leapyear(year) === true) {
  document.querySelector('#target').innerHTML = `Year ${year} is a leap year`;
} else {
  document.querySelector(
      '#target').innerHTML = `Year ${year} is not a leap year`;
}