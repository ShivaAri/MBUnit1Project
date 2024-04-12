/*------------------ Constants --------------------*/

import { getRandomMiscQuestion } from "../data/datatype.js" 
import { getRandomMusicQuestion } from "../data/datatype.js"
import { getRandomVideoGameQuestion } from "../data/datatype.js"
const whoWantSomeDuckSound = new Audio('../audio/Who want some duck.mp3')
const shockSound = new Audio('../audio/shock.mp3')
const ohSound = new Audio('../audio/OH.mp3')
const areYouMadSound = new Audio('../audio/Are You mad.mp3')
const holdItBusterSound = new Audio('../audio/Hold It Buster.mp3')


/*--------------- Variables (state) ----------------*/
let correctAnswers, winner, timer, board
let timeLeft = 120
let miscQuestions
let videoGameQuestions
let musicQuestions
let gameIsInPlay
let totalAnswers


/*------------- Cached Element References -----------*/
const messageEl = document.getElementById('message')
const correctBtn = document.getElementById('correct-answer-button')
const incorrectBtn1 = document.getElementById('incorrect-answer-button1')
const incorrectBtn2 = document.getElementById('incorrect-answer-button2')
const resetBtnEl = document.getElementById('reset-button')
const countdownEl = document.getElementById('countdown')
const questionContainer = document.querySelector('#question-container')
const miscQuestionBtn = document.querySelector('#misc-question-button')
const videoGameQuestionBtn = document.querySelector('#videogame-question-button')
const musicQuestionBtn = document.querySelector('#music-question-button')
const resetBtnContainer = document.querySelector('.reset-button-container')
const playBtnContainer = document.querySelector('.play-button-container')
const playBtn = document.getElementById('play-button')
/*----------------- Event Listeners ----------------*/
correctBtn.addEventListener('click', handleClick)
incorrectBtn1.addEventListener('click', handleClick)
incorrectBtn2.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)
miscQuestionBtn.addEventListener('click', createMiscQuestion)
musicQuestionBtn.addEventListener('click', createMusicGameQuestion)
videoGameQuestionBtn.addEventListener('click', createVideoGameQuestion)
playBtnContainer.addEventListener('click', handlePlayButton)
/*------------------- Functions ---------------------*/
init()

function init() {
  miscQuestions = []
  musicQuestions = []
  videoGameQuestions = []
  correctAnswers = 0
  totalAnswers = 0
  gameIsInPlay = false
  winner = false
  let timeLeft = 120
  messageEl.textContent = 'Good Luck!'
  board = null
  clearInterval(timer)
  questionContainer.innerHTML = ''
  render()
  checkForWinner()
}

function handlePlayButton() {
  gameIsInPlay = true
  timeLeft = 120
  timer = setInterval(function() {
    countdownEl.textContent = timeLeft + ' seconds remain...'
    timeLeft -= 1
    if (timeLeft < 0) {
      countdownEl.textContent = "Time is Up! You lose!"
      clearInterval(timer)
      shockSound.volume = .07
      shockSound.play()
    }
  }, 1000)
  render()
  showMessage()
}



function createMiscQuestion() {
  const newMiscQuestion = getRandomMiscQuestion()
  miscQuestions.push(newMiscQuestion)
  render()
}

function render() {
  if(gameIsInPlay) {
    resetBtnContainer.style.display = ''
    playBtnContainer.style.display = 'none'

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
  displayWinMessage()
  } else {

    resetBtnContainer.style.display = 'none'
    playBtnContainer.style.display = ''
  }
}

function createMusicGameQuestion() {
  const newMusicQuestion = getRandomMusicQuestion()
  musicQuestions.push(newMusicQuestion)
  render()
}

function createVideoGameQuestion() {
  const newVideoGameQuestion = getRandomVideoGameQuestion()
  videoGameQuestions.push(newVideoGameQuestion)
  render()
}

function showMessage(message) {
  messageEl.textContent = message
  render()
  
}

function appendMiscQuestion(miscQuestion) {
  questionContainer.innerHTML = ''
  let miscQuestionCard = document.createElement('div')
  miscQuestionCard.className = `card`
  miscQuestionCard.addEventListener('click', handleClick)
  miscQuestionCard.innerHTML = ''
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
  questionContainer.innerHTML = ''
  let musicQuestionCard = document.createElement('div')
  musicQuestionCard.className = `card`
  musicQuestionCard.addEventListener('click', handleClick)
  musicQuestionCard.innerHTML = ''
  musicQuestionCard.innerHTML = 
  `<div>
    <p>${musicQuestion.text}</p>
    <button class = 'incorrect-answer-button'>${musicQuestion.incorrectAnswer2}</button>
    <button class = 'incorrect-answer-button'>${musicQuestion.incorrectAnswer1}</button>
    <button class = 'correct-answer-button'>${musicQuestion.correctAnswer}</button>
    </div>`
  questionContainer.appendChild(musicQuestionCard)
  
}

function appendVideoGameQuestion(videoGameQuestion) {
  questionContainer.innerHTML = ''
  let videoGameQuestionCard = document.createElement('div')
  videoGameQuestionCard.className = `card`
  videoGameQuestionCard.addEventListener('click', handleClick)
  videoGameQuestionCard.innerHTML = ''
  videoGameQuestionCard.innerHTML =
  `<div>
    <p>${videoGameQuestion.text}</p>
    <button class = 'incorrect-answer-button'>${videoGameQuestion.incorrectAnswer1}</button>
    <button class = 'correct-answer-button'>${videoGameQuestion.correctAnswer}</button>
    <button class = 'incorrect-answer-button'>${videoGameQuestion.incorrectAnswer2}</button>
    </div>`
  questionContainer.appendChild(videoGameQuestionCard)
}

function handleClick(evt) {
  if(gameIsInPlay === false) {
    return
  }
  
  if(evt.target.className === 'correct-answer-button') {
    
    correctAnswers = correctAnswers + 1
    messageEl.textContent = `You are correct! ${correctAnswers} out of ${totalAnswers}`
    ohSound.volume = .05
    ohSound.play()
  } else if(evt.target.className === 'incorrect-answer-button1' || 'incorrect-answer-button2'){
    messageEl.textContent = `Incorrect. Try again! You have answered ${correctAnswers} out of ${totalAnswers} correctly!`
    totalAnswers = totalAnswers + 1
    holdItBusterSound.volume = .09
    holdItBusterSound.play()
  } 
  render()
  checkForWinner()
  
}

function checkForWinner() {
  if(correctAnswers === 8){
    winner = true
    clearInterval(timer)
    gameIsInPlay = false
  }
  
}

function displayWinMessage() {
  if(correctAnswers === 8) {
    messageEl.textContent = 'Congratulations! You win!'
    whoWantSomeDuckSound.volume = .08
    whoWantSomeDuckSound.play()
  } 
  checkForWinner()
  
}

