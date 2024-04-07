/*------------------ Constants --------------------*/

import { getRandomMiscQuestion } from "../data/datatype.js" 
import { getRandomMusicQuestion } from "../data/datatype.js"
import { getRandomVideoGameQuestion } from "../data/datatype.js"
const whoWantSomeDuckSound = new Audio('../audio/Who want some duck.mp3')
const shockSound = new Audio('../audio/shock.mp3')
const ohSound = new Audio('../audio/OH.mp3')
const areYouMadSound = new Audio('../audio/Are You mad.mp3')

const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let gameInPlay, timerIntervalId, correctAnswer, incorrectAnswer, incorrectAnswer1, incorrectAnswer2, winner, questionCard, button
let timeLeft = 120
const questions = []
const miscQuestions = []
const videoGameQuestions = []
const musicQuestions = []

let timeoutId
let timer
let currentCategory
let categoryName


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
const miscQuestionBtn = document.querySelector('#misc-question-button')
const videoGameQuestionBtn = document.querySelector('#videogame-question-button')
const musicQuestionBtn = document.querySelector('#music-question-button')
const buttonContainer = document.querySelector('#button-container')
/*----------------- Event Listeners ----------------*/
correctBtn.addEventListener('click', handleClick)
incorrectBtn1.addEventListener('click', handleClick)
incorrectBtn2.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)
miscQuestionBtn.addEventListener('click', createMiscQuestion)
musicQuestionBtn.addEventListener('click', createMusicGameQuestion)
videoGameQuestionBtn.addEventListener('click', createVideoGameQuestion)
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
  clearInterval(timer)
  timer = setInterval(function() {
    countdownEl.textContent = timeLeft + ' seconds remain...'
    timeLeft -= 1
    if (timeLeft < 0) {
      countdownEl.textContent = "Time is Up! Were you entertained?"
      clearInterval(timer)
      shockSound.volume = .07
      shockSound.play()
    }
    
  }, 1000)
  
}

function createMiscQuestion() {
  const newMiscQuestions = getRandomMiscQuestion()
  miscQuestions.push(newMiscQuestions)
  render()
}
function render() {
  questionContainer.innerHTML = ''
  miscQuestions.forEach(miscQuestion => {
    appendMiscQuestion(miscQuestion)
  })

  musicQuestions.forEach(musicQuestion => {
    appendMusicQuestion(musicQuestion)
  })

  videoGameQuestions.forEach(videoGameQuestion => {
    appendVideoGameQuestion(videoGameQuestion)
  })
}

function createMusicGameQuestion() {
  const newMusicQuestions = getRandomMusicQuestion()
  musicQuestions.push(newMusicQuestions)
  render()
}

function createVideoGameQuestion() {
  const newVideoGameQuestions = getRandomVideoGameQuestion()
  videoGameQuestions.push(newVideoGameQuestions)
  render()
}


function showMessage(message) {
  message.textContent = message
  render()
}




function appendMiscQuestion(miscQuestion) {
  let miscQuestionCard = document.createElement('div')
  miscQuestionCard.className = `card`
  miscQuestion.addEventListener('click', handleClick)
  miscQuestionCard.innerHTML = 
  `<div>
    <p>${miscQuestion.text}</p>
    <button class = 'correct-answer-button'>${miscQuestion.correctAnswer}</button>
    <button class = 'incorrect-answer-button'>${miscQuestion.incorrectAnswer1}</button>
    <button class = 'incorrect-answer-button'>${miscQuestion.incorrectAnswer2}</button>
    </div>`
    questionContainer.appendChild(miscQuestionCard)
}

function appendMusicQuestion(musicQuestion) {
  let musicQuestionCard = document.createElement('div')
  musicQuestionCard.className = `card`
  musicQuestionCard.addEventListener('click', handleClick)
  musicQuestionCard.innerHTML = 
  `<div>
    <p>${musicQuestion.text}</p>
    <button class = 'correct-answer-button'>${musicQuestion.correctAnswer}</button>
    <button class = 'incorrect-answer-button'>${musicQuestion.incorrectAnswer1}</button>
    <button class = 'incorrect-answer-button'>${musicQuestion.incorrectAnswer2}</button>
    </div>`
    questionContainer.appendChild(musicQuestionCard)
}

function appendVideoGameQuestion(videoGameQuestion) {
  let videoGameQuestionCard = document.createElement('div')
  videoGameQuestionCard.className = `card`
  videoGameQuestionCard.addEventListener('click', handleClick)
  videoGameQuestionCard.innerHTML =
  `<div>
    <p>${videoGameQuestion.text}</p>
    <button class = 'correct-answer-button'>${videoGameQuestion.correctAnswer}</button>
    <button class = 'incorrect-answer-button'>${videoGameQuestion.incorrectAnswer1}</button>
    <button class = 'incorrect-answer-button'>${videoGameQuestion.incorrectAnswer2}</button>
    </div>`
    questionContainer.appendChild(videoGameQuestionCard)
}

function handleClick(evt) {
  if(evt.target.className === 'correct-answer-button') {
    correctAnswer = correctAnswer + 1
    messageEl.textContent = `That's the ticket~! You are correct! ${correctAnswer} out of 8`
    ohSound.volume = .05
    ohSound.play()
  } else {
    messageEl.textContent = "Incorrect. Try again!"
    areYouMadSound.volume = .1
    areYouMadSound.play()
    incorrectAnswer = incorrectAnswer + 1
  }
  render()
  
}


function checkForWinner() {
  if(correctAnswer === 8){
    winner = true
    clearInterval(timer)
    
  }
}

function updateMessage() {
  if(correctAnswer === 8) {
    messageEl.textContent = 'Congratulations! You are a Trivia Machine!'
    whoWantSomeDuckSound.volume = .05
    whoWantSomeDuckSound.play()
  } 
  checkForWinner()
}

