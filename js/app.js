/*------------------ Constants --------------------*/

const whoWantSomeDuckSound = new Audio('../audio/Who want some duck.mp3')
const shockSound = new Audio('../audio/shock.mp3')
const ohSound = new Audio('../audio/OH.mp3')

const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let gameInPlay, timerIntervalId, correctAnswer, incorrectAnswer, noClickyYet
let correctAnswerCount = 0
let incorrectAnswerCount = 0
let timeLeft = 120

let timer = setInterval(function() {
  countdownEl.textContent = timeLeft + ' seconds remain...'
  timeLeft -= 1
  if (timeLeft < 0) {
    countdownEl.textContent = "Time is Up! Were you entertained?"
    clearInterval(timer)
    shockSound.volume = .05
    shockSound.play()
  }
  
}, 1000)
/*------------- Cached Element References -----------*/
const answerEl = document.getElementById('answer-count')
const messageEl = document.getElementById('message')
const correctBtn = document.getElementById('correct-answer-button')
const incorrectBtn = document.getElementById('incorrect-answer-button')
const resetBtn = document.getElementById('reset-button')
const countdownEl = document.getElementById('countdown')
/*----------------- Event Listeners ----------------*/
resetBtn.addEventListener('click', init)
correctBtn.addEventListener('click', handleClick)
incorrectBtn.addEventListener('click', handleClick)

/*------------------- Functions ---------------------*/
init()


function init() {
  render()
  correctAnswer = 0
  incorrectAnswer = 0
  gameInPlay = false
}

function gameInPlay() {
  init()
}
function showMessage(message) {
  answerEl.textContent = message
  render()
}

function handleClick(evt) {
  let message 
  let correctAnswer = 0
  let incorrectAnswer = 0
  
  if (evt.target.id === 'correct-answer-button') {
    correctAnswer = correctAnswer + 1
    whoWantSomeDuckSound.volume = .05
    whoWantSomeDuckSound.play()

  } else if(evt.target.id === 'incorrect-answer-button1') {
    incorrectAnswer = incorrectAnswer + 1
    ohSound.volume = .05
    ohSound.play()
  } else if(evt.target.id === 'incorrect-answer-button2') {
    incorrectAnswer = incorrectAnswer + 1
    ohSound.volume = .05
    ohSound.play()
  }
  render()
}

function render() {
  updateMessage()

}

function updateMessage() {
  messageEl.textContent = `${correctAnswer} ${incorrectAnswer}`
  handleClick()
  render()
}


