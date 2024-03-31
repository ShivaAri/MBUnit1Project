/*------------------ Constants --------------------*/




const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let remainingTime, timerIntervalId, correctAnswer, incorrectAnswer
let correctAnswerCount = 0
let incorrectAnswerCount = 0

/*------------- Cached Element References -----------*/
const answerEl = document.getElementById('answer-count')
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
  render()
  correctAnswer = 0
  incorrectAnswer = 0
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
  
}