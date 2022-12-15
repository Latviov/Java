'use strict';
let target = document.querySelector('#target')

let array = ["well", "this", "works??"]

function concat(stringsArr) {
    let concatedArr = stringsArr[0].concat(" " + stringsArr[1] + " " + stringsArr[2])
    target.innerHTML = concatedArr
}

concat(array)