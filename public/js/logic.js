'use strict'

let player = 4

function turn(btn) {
  
  if(player % 2 === 0) {
    console.log('x')
  document.getElementById(btn).value = 'X'
  player += 1
  } else {
    console.log('o')
    document.getElementById(btn).value = 'O'
    player += 1
  }
}
