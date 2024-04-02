/*------------------ Constants --------------------*/




const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let gameInPlay, timerIntervalId, correctAnswer, incorrectAnswer, noClickyYet
let correctAnswerCount = 0
let incorrectAnswerCount = 0
let timeLeft = 45

let timer = setInterval(function() {
  countdownEl.textContent = timeLeft + ' seconds remain...'
  timeLeft -= 1
  if (timeLeft < 0) {
    countdownEl.textContent = "Time is Up! Were you entertained?"
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
  noClickyYet = false
}


function showMessage(message) {
  answerEl.textContent = message
}

function handleClick(evt) {
  
  const correctButtonIdx = evt.target.id = 'correct-answer-button'
  const wrongButtonIdx = evt.target.id = 'incorrect-answer-button'
  if (evt.target.id === 'correct-answer-button') {
    correctAnswer = correctAnswer + 1
  } else if(evt.target.id === 'incorrect-answer-button') {
    incorrectAnswer = incorrectAnswer + 1
  }
  render()
}

function render() {
  updateMessage()

}

function updateMessage() {
  messageEl.textContent = `${correctAnswer} ${incorrectAnswer}`
  handleClick()
}


