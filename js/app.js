/*------------------ Constants --------------------*/
import { getRandomQuestion } from "../data/datatype.js"
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
const questions = []
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
const questionContainer = document.querySelector('#question-container')
const questionBtn = document.querySelector('#question-button')
/*----------------- Event Listeners ----------------*/
resetBtn.addEventListener('click', init)

questionBtn.addEventListener('click', createQuestion)

/*------------------- Functions ---------------------*/
init()


function init() {
  render()
  correctAnswer = 0
  incorrectAnswer = 0
  gameInPlay = false

}


function showMessage(message) {
  answerEl.textContent = message
  render()
}

function handleClick(evt) {
  let correctAnswer = 0
  let incorrectAnswer = 0
  
  if (evt.target.id === 'correct-answer-button') {
    correctAnswerCount = correctAnswerCount + 1
    messageEl.textContent = "That's the ticket~! That is correct!"

  } else if(evt.target.id === 'incorrect-answer-button') {
    incorrectAnswerCount = incorrectAnswerCount + 1
    messageEl.textContent = "Incorrect. Try again"
  }
  render()
  updateMessage()
}

function render() {
  questionContainer.innerHTML = ''
  questions.forEach((question, idx) => {
    appendQuestion(question, idx)
  })
}

function appendQuestion(question) {
  let questionCard = document.createElement('div')
  questionCard.className = `card ${question.question}`
  questionCard.innerHTML = 
  `<div>
  <p>${question.text}</p>
  <p id = 'question-container'>img src='../js/datatype.js
  </div>
  <footer>
    <button class = 'correct-answer-button'>${question.correctAnswer}</button>
    <button class = 'incorrect-answer-button'>${question.incorrectAnswer1}</button>
    <button class = 'incorrect-answer-button'>${question.incorrectAnswer2}</button>
    </footer>
    `

    questionContainer.appendChild(questionCard)
}

function createQuestion() {
  const newQuestion = getRandomQuestion()

  questions.push(newQuestion)
  render()
}

function updateMessage() {
  messageEl.textContent = `${correctAnswerCount} ${incorrectAnswerCount}`
  render()
}

