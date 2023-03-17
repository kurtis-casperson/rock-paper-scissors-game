// add event listeners to each element
// when clicked on, I want the computer to then select its random choice
// the score will need to change based on the outcome of the selections
// if user wins, user score icreases by 1 score ++ and vice versa
//

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let userSelection = document.getElementById('user-selection')
let cpuSelection = document.getElementById('cpu-selection')
let whoWon = document.getElementById('who-won')
let cpuScore = document.getElementById('cpu-score')
let cpuStartScore = 0
cpuScore.textContent = cpuStartScore

let draw = document.getElementById('draw')
let tieMatches = 0
draw.textContent = tieMatches

let userScore = document.getElementById('user-score')
let userStartScore = 0
userScore.textContent = userStartScore

const gameOptions = ['Rock', 'Paper', 'Scissors']

const drawResultText = `It's a draw! Go again!`
const userLostText = 'You lost :/'
const userWonText = 'You WON!!!'

rock.addEventListener('click', function () {
  userSelection.textContent = 'You selected Rock'

  const randomOptionGenerator = Math.floor(Math.random() * gameOptions.length)
  console.log('randomOptionGenerator', randomOptionGenerator)
  if (randomOptionGenerator === 0) {
    cpuSelection.textContent = 'CPU chose Rock'
    whoWon.textContent = drawResultText
    tieMatches++
    return (draw.textContent = tieMatches)
  }
  if (randomOptionGenerator === 1) {
    cpuSelection.textContent = 'CPU chose Paper'
    whoWon.textContent = userLostText
    cpuStartScore++
    return (cpuScore.textContent = cpuStartScore)
  }
  if (randomOptionGenerator === 2) {
    cpuSelection.textContent = 'CPU chose Scissors'
    whoWon.textContent = userWonText
    userStartScore++
    return (userScore.textContent = userStartScore)
  }
})

paper.addEventListener('click', function () {
  userSelection.textContent = 'You selected Paper'
  const randomOptionGenerator = Math.floor(Math.random() * gameOptions.length)

  if (randomOptionGenerator === 1) {
    tieMatches++
    return (draw.textContent = tieMatches)
  }
  if (randomOptionGenerator === 0) {
    cpuStartScore++
    return (cpuScore.textContent = cpuStartScore)
  }
  if (randomOptionGenerator === 2) {
    userStartScore++
    return (userScore.textContent = userStartScore)
  }
})

scissors.addEventListener('click', function () {
  console.log('scissors was selected')
})

// Add setTimeout function to

// Add re-set button to play a new game.  The reset button should have
