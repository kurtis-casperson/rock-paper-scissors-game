// add event listeners to each element
// when clicked on, I want the computer to then select its random choice
// the score will need to change based on the outcome of the selections
// if user wins, user score icreases by 1 score ++ and vice versa
//

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const cpuScore = document.getElementById('cpu-score')
let cpuStartScore = 0
cpuScore.textContent = `CPU ${cpuStartScore}`
const draw = document.getElementById('draw')
let tiematches = 0
draw.textContent = ` Draw ${tiematches}`
const userScore = document.getElementById('user-score')
let userStartScore = 0
userScore.textContent = `User ${userStartScore}`

// click event doesnt change the number until the second time that outcome occurs
rock.addEventListener('click', function () {
  console.log('clicked rock')
  const gameOptions = ['Rock', 'Paper', 'Scissors']

  const randomGameOptionGenerator = Math.floor(
    Math.random() * gameOptions.length
  )
  console.log('randomGameOptionGenerator', randomGameOptionGenerator)
  if (randomGameOptionGenerator === 0) {
    draw.textContent = `Draw ${tiematches++}`
  }
  if (randomGameOptionGenerator === 1)
    return (cpuScore.textContent = ` CPU ${cpuStartScore++}`)
  if (randomGameOptionGenerator === 2)
    return (userScore.textContent = `User ${userStartScore++}`)
})

paper.addEventListener('click', function () {
  console.log('paper was selected')
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
