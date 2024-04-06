/*------------------ Constants --------------------*/
import { getRandomMiscQuestion, getRandomMusicQuestion, getRandomQuestion, getRandomVideoGameQuestion } from "../data/datatype.js"
import { miscQuestions } from "../data/datatype.js" 
import { musicQuestions } from "../data/datatype.js"
import { videoGameQuestions } from "../data/datatype.js"
const whoWantSomeDuckSound = new Audio('../audio/Who want some duck.mp3')
const shockSound = new Audio('../audio/shock.mp3')
const ohSound = new Audio('../audio/OH.mp3')
const areYouMadSound = new Audio('../audio/Are You mad.mp3')

const handleReset = function() {
  init()
}
/*--------------- Variables (state) ----------------*/
let gameInPlay, timerIntervalId, correctAnswer, incorrectAnswer, winner, questionCard, button
let timeLeft = 120
const questionsArray = []
const videoGameQuestionsArray = []
const musicQuestionsArray = []
const miscQuestionsArray = []
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
const miscQuestionContainer = document.querySelector('#misc-question-category-container')
const videoGameQuestionContainer = document.querySelector('#videogame-question-category-container')
const musicGameQuestionContainer = document.querySelector('#music-question-category-container')
const miscQuestionBtn = document.querySelector('#misc-question-button')
const videoGameQuestionBtn = document.querySelector('#videogame-question-button')
const musicQuestionBtn = document.querySelector('#music-question-button')
/*----------------- Event Listeners ----------------*/
correctBtn.addEventListener('click', handleClick)
incorrectBtn1.addEventListener('click', handleClick)
incorrectBtn2.addEventListener('click', handleClick)
// questionBtn.addEventListener('click', createQuestion)
resetBtn.addEventListener('click', init)
miscQuestionBtn.addEventListener('click', createMiscQuestion)
videoGameQuestionBtn.addEventListener('click', createVideoGameQuestion)
musicQuestionBtn.addEventListener('click', createMusicGameQuestion)





/*------------------- Functions ---------------------*/
init()

//when the Misc Button is pressed:
  //a question from the miscQuestions array to be appended to the screen

//when the Video Game Question button is pressed:
  //a question from the videoGameQuestions array should be appended to the screen.

//when the Music question button is pressed:
  //a question from the

function init() {
  render()
  correctAnswer = 0
  incorrectAnswer = 0
  winner = false
  timeLeft = 120
  currentCategory = 'Music'
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
    messageEl.textContent = `That's the ticket~! You are correct! ${correctAnswer} out of 6`
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


//when a certain category button is pressed:
  //questions of that category only should appear
  //

function appendQuestion(question) {
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
  `
    
    questionContainer.appendChild(questionCard)
    
}

function appendMiscQuestion(question) {
  let miscQuestionCard = document.createElement('div')

  miscQuestionCard.className = `card ${question.text}`
  miscQuestionContainer.innerHTML = ''
  miscQuestionCard.addEventListener('click', handleClick)

  miscQuestionCard.innerHTML = `<div>
    <p id='question-card'>Question For Ya: ${question.text}</p>
    <button class = 'correct-answer-button'>${question.correctAnswer}</button>

    <button class = 'incorrect-answer-button'>${question.incorrectAnswer1}</button>

    <button class = 'incorrect-answer-button'>${question.incorrectAnswer2}</button>
  </div>
  `


  miscQuestionContainer.appendChild(miscQuestionCard)
}

function appendVideoGameQuestion(question) {
  let videoGameQuestionCard = document.createElement('div')
  videoGameQuestionCard.className = `card ${question.text}`
  videoGameQuestionContainer.innerHTML = ''
  videoGameQuestionCard.addEventListener('click', handleClick)

  videoGameQuestionCard.innerHTML = `
  <div>
    <p id='question-card'>Question For Ya: ${question.text}</p>
    <button class = 'correct-answer-button'>${question.correctAnswer}</button>

    <button class = 'incorrect-answer-button'>${question.incorrectAnswer1}</button>

    <button class = 'incorrect-answer-button'>${question.incorrectAnswer2}</button>
  </div>
  `

  videoGameQuestionContainer.appendChild(videoGameQuestionCard)
}

function appendMusicQuestion(question) {
  let musicQuestionCard = document.createElement('div')
  musicQuestionCard.className = `card ${question.text}`
  musicGameQuestionContainer.innerHTML = ''
  musicQuestionCard.addEventListener('click', handleClick)

  musicQuestionCard.innerHTML = `
  <div>
    <p id='question-card'>Question For Ya: ${question.text}</p>
    <button class = 'correct-answer-button'>${question.correctAnswer}</button>

    <button class = 'incorrect-answer-button'>${question.incorrectAnswer1}</button>

    <button class = 'incorrect-answer-button'>${question.incorrectAnswer2}</button>
  </div>
  `

  musicGameQuestionContainer.appendChild(musicQuestionCard)
}


function render() {
  questionContainer.innerHTML = ''
  questionsArray.forEach((questions, idx) => {
    questions.forEach((question, idx) => {
      appendQuestion(question, idx)
    }) 
    
    videoGameQuestionsArray.forEach((videoGameQuestion, idx) => {
      appendVideoGameQuestion(videoGameQuestion, idx)
    })
    
    musicQuestionsArray.forEach((musicQuestion, idx) => {
      appendMusicQuestion(musicQuestion, idx)
    })
    
    miscQuestionsArray.forEach((miscQuestion, idx) => {
      appendMiscQuestion(miscQuestion, idx)
    })
  })
  updateMessage()

}


function createQuestion(evt) {
  let categoryName = evt.target.id
  const newQuestions = getRandomQuestion(categoryName)
  questionsArray.push(newQuestions)
  
  render()
  
}

function createMiscQuestion(evt) {
  let categoryName = evt.target.id
  const newMiscQuestions = getRandomMiscQuestion(categoryName)
  miscQuestionsArray.push(newMiscQuestions)
  console.log(newMiscQuestions)
}

function createVideoGameQuestion(evt) {
  let categoryName = evt.target.id
  const newVideoGameQuestions = getRandomVideoGameQuestion(categoryName)
  videoGameQuestionsArray.push(newVideoGameQuestions)
  console.log(newVideoGameQuestions)
  
  render()
} 

function createMusicGameQuestion(evt) {
  let categoryName = evt.target.id
  const newMusicQuestions = getRandomMusicQuestion(categoryName)
  musicQuestionsArray.push(newMusicQuestions)
  console.log(newMusicQuestions)

  render()
}

function checkForWinner() {
  if(correctAnswer === 6){
    winner = true
    clearInterval(timer)
  }
}

function updateMessage() {
  if(correctAnswer === 6) {
    messageEl.textContent = 'Congratulations! You are a Trivia Machine!'
    whoWantSomeDuckSound.volume = .05
    whoWantSomeDuckSound.play()
  } 
  checkForWinner()
}

//When a category button is clicked:
  //A question from that category alone should appear with the question 
  //when a different one is clicked, questions from that array should be shown only