// add event listeners to each element
// when clicked on, I want the computer to then select its random choice
// the score will need to change based on the outcome of the selections
// if user wins, user score icreases by 1 score ++ and vice versa
//

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

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

rock.addEventListener('click', function () {
  console.log('clicked rock')

  const randomOptionGenerator = Math.floor(Math.random() * gameOptions.length)
  console.log('randomOptionGenerator', randomOptionGenerator)
  if (randomOptionGenerator === 0) {
    tieMatches++
    return (draw.textContent = tieMatches)
  }
  if (randomOptionGenerator === 1) {
    cpuStartScore++
    return (cpuScore.textContent = cpuStartScore)
  }
  if (randomOptionGenerator === 2) {
    userStartScore++
    return (userScore.textContent = userStartScore)
  }
})

paper.addEventListener('click', function () {
  console.log('paper was selected')
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

// userScore.addEventListener('', function () {
// listen for what the outcome of the match result is
// then add 1 to the score if user won
// })

// cpuScore.addEventListener('click', function () {
// listen for what the outcome of the match result is
// then add 1 to the score if cpu won
// })

// let number = 0
// draw.innerText = `Draw ${number}`
