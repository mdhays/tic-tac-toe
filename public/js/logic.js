'use strict'
// We set a variable player to keep track of who's turn it is. We set it to 4 because we are going to need an integer that's divisible by 2.
let player = 4


// This variable will be used to keep track of how many turns remain.
let turnsRemaining = 8


// These constants are set equal to an array of arrays that holds a possible winning combination.
// We will be using these to determine if a player has won.
// -----------------------
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
// -----------------------

// These variables are set equal to arrays that are used to hold the positions of their moves on the board.
let playerX = []
let playerO = [] 

// This function keeps track of who's turn it is.
// We're passing in id, which is the id of a button on the playing board.
function turn(id) {
  

  // This if statement is evaluating if the value of the player variable has a remainder of 0.
  // If yes, it's X's turn, else it's O's turn.
  if(player % 2 === 0) {
    
    // Changing the passed in id from a string to an integer.
    let int = parseInt(id)

    
    // Here we're pushing the id onto the player array.
    playerX.push(int)
    console.log(playerX)
    
   
    // Here we're setting the value of the clicked button to the player's letter.
    document.getElementById(id).value = 'X'
    
    
    // Now we increment the player value so the next player can have a turn.
    player += 1
    countDownTurns()
  } else {


    // Changing the passed in id from a string to an integer.
    let int = parseInt(id)
    

    // Here we're pushing the id onto the player array.
    playerO.push(int)
    console.log(playerO)
    
    // Here we're setting the value of the clicked button to the player's letter.
    document.getElementById(id).value = 'O'
    
    // Now we increment the player value so the next player can have a turn.
    player += 1
    countDownTurns()

  }
}



// This function will count down and display the remaining turns, while also checking that there are still moves to be made.
function countDownTurns() {
  
 
  // We increment our counter variable by -1.
  turnsRemaining -= 1

  
  // Here we're setting the inner HTML of an empty div to output the number of remaining turns using string interpolation.
  document.getElementById('turns').innerHTML = `${turnsRemaining} turns remaining`
  
  
  // Check to see if the counter = 0. If yes, display that the game has ended.
  if (turnsRemaining === 0) {
    alert('game over')

    
  }
}






