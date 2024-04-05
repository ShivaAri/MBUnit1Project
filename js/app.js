/*------------------ Constants --------------------*/
import { getRandomQuestion } from "../data/datatype.js"
const whoWantSomeDuckSound = new Audio('../audio/Who want some duck.mp3')
const shockSound = new Audio('../audio/shock.mp3')
const ohSound = new Audio('../audio/OH.mp3')
const areYouMadSound = new Audio('../audio/Are You mad.mp3')

const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let gameInPlay, timerIntervalId, correctAnswer, incorrectAnswer, winner, questionCard
let timeLeft = 120
const questions = []
let timeoutId
let timer

/*------------- Cached Element References -----------*/
const answerEl = document.getElementById('answer-count')
const messageEl = document.getElementById('message')
const correctBtn = document.getElementById('correct-answer-button')
const incorrectBtn1 = document.getElementById('incorrect-answer-button1')
const incorrectBtn2 = document.getElementById('incorrect-answer-button2')
const resetButtonContainer = document.querySelector('.reset-button-container')
const resetBtn = document.getElementById("reset-button")
const countdownEl = document.getElementById('countdown')
const questionContainer = document.querySelector('#question-container')
const questionBtn = document.querySelector('#question-button')
/*----------------- Event Listeners ----------------*/
correctBtn.addEventListener('click', handleClick)
incorrectBtn1.addEventListener('click', handleClick)
incorrectBtn2.addEventListener('click', handleClick)
questionBtn.addEventListener('click', createQuestion)
resetBtn.addEventListener('click', init)



/*------------------- Functions ---------------------*/
init()


function init() {
  render()
  correctAnswer = 0
  incorrectAnswer = 0
  winner = false
  timeLeft = 120
  questionContainer.innerHTML = ''
  checkForWinner()
  // console.log('Working')
  clearInterval(timer)
  timer = setInterval(function() {
    countdownEl.textContent = timeLeft + ' seconds remain...'
    timeLeft -= 1
    if (timeLeft < 0) {
      countdownEl.textContent = "Time is Up! Were you entertained?"
      clearInterval(timer)
      shockSound.volume = 0
      shockSound.play()
    }
    
  }, 1000)
  
}



function showMessage(message) {
  message.textContent = message
  render()
}

function handleClick(evt) {
  if(evt.target.className === 'correct-answer-button') {
    correctAnswer = correctAnswer + 1
    messageEl.textContent = "That's the ticket~! You are correct"
    ohSound.volume = .05
    ohSound.play()
  } else {
    messageEl.textContent = "Incorrect. Try again!"
    areYouMadSound.volume = .05
    areYouMadSound.play()
    incorrectAnswer = incorrectAnswer + 1
  }
  render()
  
}



function render() {
  questionContainer.innerHTML = ''
  questions.forEach((question, idx) => {
    appendQuestion(question, idx)
  })
  updateMessage()

}
//When the reset button is clicked:
  //all previous questions that are on the screen should fully disappear and not be shown when the question button is pressed again to reveal a new one.
  //Ben said this: "If you set an element's innerHTML property to an empty string, it'll clear out any HTML that's currently within it."
  //when the game ends and the reset button is clicked, it should start the game again
function appendQuestion(question, idx, evt) {
  let questionCard = document.createElement('div')
  
  questionCard.className = `card ${question.text}`
  questionContainer.innerHTML = ''
  questionCard.addEventListener('click', handleClick)

  
  questionCard.innerHTML = 
  `<div>
    <p id='question-card'>Question For Ya: ${question.text}</p>
    <button class = 'correct-answer-button'>${question.correctAnswer}</button>
    <button class = 'incorrect-answer-button'>${question.incorrectAnswer1}</button>
    <button class = 'incorrect-answer-button'>${question.incorrectAnswer2}</button>
  </div>
    <footer>
      <button class='delete-btn' id='delete-btn-${idx}'>X</button>
    </footer>
    `
    
    questionContainer.appendChild(questionCard)
    
}



function createQuestion() {
  const newQuestion = getRandomQuestion()
  questions.push(newQuestion)
  render()
}

function checkForWinner() {
  if(correctAnswer === 9){
    winner = true
    clearInterval(timer)
  }
}

function updateMessage() {
  if(correctAnswer === 9) {
    messageEl.textContent = 'Congratulations! You are a Trivia Machine!'
    whoWantSomeDuckSound.volume = .05
    whoWantSomeDuckSound.play()
  } 
  checkForWinner()
}

//When a category button is clicked:
  //A question from that category should appear with the question and the answers.
