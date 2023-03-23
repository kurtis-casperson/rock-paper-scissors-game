const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let userSelection = document.getElementById('user-selection')
let cpuSelection = document.getElementById('cpu-selection')
let whoWon = document.getElementById('who-won')
let cpuScoreDisplay = document.getElementById('cpu-score')
let tieScoreDisplay = document.getElementById('draw')
let userScoreDisplay = document.getElementById('user-score')
let cpuScore = 0
let tieScore = 0
let userScore = 0

const playGame = (gameChoice) => {
  gameChoice.preventDefault()
  const userChoice = gameChoice.target.id
  const computerChoice = getComputerChoice()
  const winner = getWinner(userChoice, computerChoice)
  updateTotals(winner)
  updateDisplays(userChoice, computerChoice, winner)
}

const getComputerChoice = () => {
  const gameOptions = ['rock', 'paper', 'scissors']
  return gameOptions[Math.floor(Math.random() * gameOptions.length)]
}

const getWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "It's a draw! Go again!"
  switch (userChoice) {
    case 'rock':
      return computerChoice === 'paper' ? 'You lose :/' : 'You WIN!!!'

    case 'paper':
      return computerChoice === 'scissors' ? 'You lose :/' : 'You WIN!!!'

    case 'scissors':
      return computerChoice === 'rock' ? 'You lose :/' : 'You WIN!!!'
  }
}

function updateTotals(winner) {
  switch (winner) {
    case "It's a draw! Go again!":
      tieScore++
      break

    case 'You lose :/':
      cpuScore++
      break

    default:
      userScore++
      break
  }
}

const updateDisplays = (userChoice, computerChoice, winner) => {
  cpuSelection.textContent = `CPU chose ${computerChoice}`
  userSelection.textContent = `You selected ${userChoice}`
  whoWon.textContent = `${winner}`
  cpuScoreDisplay.textContent = cpuScore
  tieScoreDisplay.textContent = tieScore
  userScoreDisplay.textContent = userScore
}

scissors.addEventListener('click', playGame)
paper.addEventListener('click', playGame)
rock.addEventListener('click', playGame)
