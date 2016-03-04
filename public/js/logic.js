'use strict'

let player = 4

const winningArrs = ['012', '345', '678', '036', '147', '258', '048', '246']

let playerX = []
let playerO = []

function turn(btn) {
  
  if(player % 2 === 0) {
    // console.log('x')

    
    playerX.push(btn)
    console.log(playerX)
    document.getElementById(btn).value = 'X'
    player += 1

    checkWinner(playerX)
  } else {
    console.log('o')
    playerO.push(btn)
    console.log(playerO)

    document.getElementById(btn).value = 'O'
    player += 1

    checkWinner(playerO)
  }
}

function checkWinner(dudeArray) {
  let newarr = dudeArray.join('')
  if(dudeArray.length === 3 && winningArrs.indexOf(newarr) !== -1) {
    console.log('what a play')
  }

}