/*------------------ Constants --------------------*/




const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let remainingTime, timerIntervalId,


/*------------- Cached Element References -----------*/
const messageEl = document.getElementById('message')
const correctBtns = document.getElementById('correct-answer-button')
const incorrectBtns = document.getElementById('incorrect-answer-button')
const resetBtn = document.getElementById('reset-button')

/*----------------- Event Listeners ----------------*/
resetBtn.addEventListener('click', init)
correctBtns.forEach(function(correctbutton) {
  correctbutton.addEventListener('click', handleClick)
})


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