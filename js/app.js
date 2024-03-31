/*------------------ Constants --------------------*/




const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let remainingTime, timerIntervalId, correctAnswer, incorrectAnswer
let correctAnswerCount = 0
let incorrectAnswerCount = 0

/*------------- Cached Element References -----------*/
const messageEl = document.getElementById('message')
const correctBtn = document.getElementById('correct-answer-button')
const incorrectBtn = document.getElementById('incorrect-answer-button')
const resetBtn = document.getElementById('reset-button')

/*----------------- Event Listeners ----------------*/
resetBtn.addEventListener('click', init)
correctBtn.addEventListener('click', handleClick)
incorrectBtn.addEventListener('click', handleClick)

/*------------------- Functions ---------------------*/
init()


function init() {

}

function tickTock() {
  console.log(remainingTime)
  if (remainingTime === 0) {
    clearInterval(timerIntervalId)
  }
}
function startTheTimer() {
  if (timerIntervalId) {
    clearInterval(timerIntervalId)

  }
  timerIntervalId = setInterval(tickTock, 450000)
}

function showMessage(message) {
  messageEl.textContent = message
}

function handleClick() {
  
}

function render() {

}