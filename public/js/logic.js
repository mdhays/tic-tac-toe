'use strict'

let player = 4
let turnsRemaining = 8

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
    countDownTurns()
  } else {
    
    playerO.push(btn)
    console.log(playerO)

    document.getElementById(btn).value = 'O'
    player += 1
    countDownTurns()
  }
}

function countDownTurns() {
  turnsRemaining -= 1
  console.log(turnsRemaining)
  if (turnsRemaining === 0) {
    alert('game over')
  }
}

function checkForWinner(playerArr) {

}









