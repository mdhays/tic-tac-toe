'use strict'

let player = 4

const winningRows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const winningColumns = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]   

const winningDiagonals = [
  [0, 4, 8],
  [2, 4, 6]
]

let playerX = []
let playerO = []

function turn(btn) {
  
  if(player % 2 === 0) {
    // console.log('x')

    
    playerX.push(btn)
    console.log(playerX)
    document.getElementById(btn).value = 'X'
    player += 1
  } else {
    console.log('o')
    playerO.push(btn)
    console.log(playerO)

    document.getElementById(btn).value = 'O'
    player += 1
  }
}
