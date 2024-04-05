
const questions = [
  {
    Category: 'Misc', text: 'In what year was Shin Megami Tensei born?', correctAnswer: '1985', incorrectAnswer1: '1967', incorrectAnswer2: '1995'
    
  },
  {
    Category: 'Misc', text: 'Which character said this quote: "Watashi wa...omoide ni wa naranai sa..." [I will never...be a memory]', correctAnswer: 'Sephiroth', incorrectAnswer1: 'Kazuya Mishima', incorrectAnswer2: 'Ridley'
  },
  {
    Category: 'Misc', text: 'Of the Hindu Trimurti, which of the three is known as the Destroyer AND the Lord of Dance?', correctAnswer: 'Shiva', incorrectAnswer1: 'Vishnu', incorrectAnswer2: 'Brahman'
  },
  {
    Category: 'Fighting Games', text: 'What is the name of the game series Ryu comes from?', correctAnswer: 'Street Fighter', incorrectAnswer1: 'Fatal Fury', incorrectAnswer2: 'Tekken'
  },
  {
    Category: 'Video Games', text: 'When dealing with tera raids in Pokémon Scarlet and Violet, what is the best way to win them?', correctAnswer: 'Counter the Pokémon not the Tera Jewel', incorrectAnswer1: 'Counter The Tera Jewel', incorrectAnswer2: 'Stay Idle'
  },
  {
    Category: 'Misc', text: 'Which classic anime showcases an Inu Hanyo and his group on a mission to restore the Shikon Jewel?', correctAnswer: 'Inuyasha', incorrectAnswer1: 'Dragon Ball Z', incorrectAnswer2: 'Ghost Sweeper Mikami'
  },
  {
    Category: 'Music', text: 'What Electronic band is responsible for songs such as Sledge, Not Of This Earth, and That House?', correctAnswer: 'Dance With The Dead', incorrectAnswer1: 'VHS Glitch', incorrectAnswer2: 'Mega Drive'
  },
  {
    Category: 'Music', text: 'The song A Corpse In The Trunk by Nightcrawler is a remix of an old song from what game?', correctAnswer: 'Perfect Dark', incorrectAnswer1: 'GoldenEye 007', incorrectAnswer2: 'Smash Bros'
  },
  {
    Category: 'Video Game', text: 'In various fighting games, characters have their own theme songs. What is the name of the theme song of Chaos from Under Night Inbirth?', correctAnswer: 'Erudite Eyes', incorrectAnswer1: 'Unseen Entities', incorrectAnswer2: 'Beat Eat Nest'
  },
]

function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)]
}
function filterQuestionCategory() {
  for(let category in question) {
    
  }
  
}
export {
  getRandomQuestion,
}