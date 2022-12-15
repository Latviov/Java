'use strict';

function myFunc() {
  let target = document.querySelector('#target');

  let start = parseInt(prompt('Give start year:'));
  let end = parseInt(prompt('Give end year:'));

  let list = '<ul>';
  for (let y = start; y <= end; y++)
  {
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
    {
      list += '<li>';
      list += y;
      list += '</li>'
    }
        }
  list += '</ul>'

  target.innerHTML = list
}