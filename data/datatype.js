
const miscQuestions = [
  {
    text: 'In what year was Shin Megami Tensei born?', correctAnswer: '1985', incorrectAnswer1: '1967', incorrectAnswer2: '1995'
    
  },
  {
    text: 'Which character said this quote: "Watashi wa...omoide ni wa naranai sa..." [I will never...be a memory]', incorrectAnswer1: 'Kazuya Mishima', correctAnswer: 'Sephiroth', incorrectAnswer2: 'Ridley'
  },
  {
    text: 'Of the Hindu Trimurti, which of the three is known as the Destroyer AND the Lord of Dance?', correctAnswer: 'Shiva', incorrectAnswer1: 'Vishnu', incorrectAnswer2: 'Brahman'
  },{
    text: 'Which classic anime showcases an Inu Hanyo and his group on a mission to restore the Shikon Jewel?', incorrectAnswer1: 'Kill la Kill', correctAnswer: 'Inuyasha', incorrectAnswer2: 'Ghost Sweeper Mikami'
  },
  {
    text: 'What old tv show had the setting of Endsville?', incorrectAnswer1: 'Dexters Laboratory', incorrectAnswer2: 'Camp Lazlo', correctAnswer: 'The Grim Adventures of Billy & Mandy'
  },
  {
    text: 'Which old Cartoon Network show was a bit of an acid trip in the case of various apparitions and other ghoulies?', incorrectAnswer1: 'Fosters Home For Imaginary Friends', incorrectAnswer2: 'Codename:Kids Next Door', correctAnswer: 'Courage The Cowardly Dog'
  },
  {
    text: 'This old Nickelodeon show has a location known as Amity Park within it. Which show is it?', incorrectAnswer2: 'The Mighty B!', correctAnswer: 'Danny Phantom', incorrectAnswer1: 'Winx Club'
  }
]

const videoGameQuestions = [
  {
    text: 'What is the name of the game series Ryu comes from?', incorrectAnswer2: 'Tekken', correctAnswer: 'Street Fighter', incorrectAnswer1: 'Fatal Fury', 
  },
  {
    text: 'When dealing with tera raids in Pokémon Scarlet and Violet, what is the best way to win them?',  incorrectAnswer1: 'Counter The Tera Jewel', incorrectAnswer2: 'Stay Idle', correctAnswer: 'Counter the Pokémon not the Tera Jewel'
  },
  {
    text: 'In various fighting games, characters have their own theme songs. What is the name of the theme song of Chaos from Under Night Inbirth?', correctAnswer: 'Erudite Eyes', incorrectAnswer1: 'Unseen Entities', incorrectAnswer2: 'Beat Eat Nest'
  },
  {
    text: 'There are a ton of references to various supers. One is the raging demon super, done by Akuma from Street Fighter. Which Thems Fightin Herds character has this as a level 3 super?', incorrectAnswer1: 'Paprika', correctAnswer: 'Pom', incorrectAnswer2: 'Tianhuo'
  },
  {
    text: 'This Skullgirls character is a feline feral who was rescued by the Life Gem she swallowed', incorrectAnswer1: 'Parasoul', correctAnswer:'Ms. Fortune', incorrectAnswer2:'Peacock'
  },
  {
    text: 'Which RPG character is known for being a failed Sephiroth clone?',  incorrectAnswer1: 'Hero', incorrectAnswer2: 'Joker', correctAnswer: 'Cloud Strife'
  }
]

const musicQuestions = [
  {
    text: 'What Electronic band is responsible for songs such as Sledge, Not Of This Earth, and That House?', correctAnswer: 'Dance With The Dead', incorrectAnswer1: 'VHS Glitch', incorrectAnswer2: 'Mega Drive'
  },
  {
    text: 'The song A Corpse In The Trunk by Nightcrawler is a remix of an old song from what game?', correctAnswer: 'Perfect Dark', incorrectAnswer1: 'GoldenEye 007', incorrectAnswer2: 'Smash Bros'
  },
  {
    text: 'Which of these anime songs is the opening song for the anime known as Death Note?',  incorrectAnswer1: 'Akahitoha', correctAnswer: 'The World', incorrectAnswer2: 'Proof Of Myself'
  },
  {
    text: 'In the anime known as Neon Genesis Evangelion, what is the name of the intro theme?', correctAnswer: 'Cruel Angels Thesis', incorrectAnswer1: 'Wave', incorrectAnswer2: 'Ultimate Senpai'
  },
  {
    text: 'This PinocchioP song has the theme of a god complex coming into this world. It has a character having their fingers on their head and a wicked smile on their face as the main background to the music video.', incorrectAnswer2: 'Whats Inside', correctAnswer: 'God-ish', incorrectAnswer1: 'YOZURINA'
  },
  {
    text: 'This song has the following lyrics: nothing changes in the day by day', incorrectAnswer1: 'Barber of Seville', incorrectAnswer2: 'All That Remains', correctAnswer: 'Glory Days'
  }
]

function getRandomMiscQuestion(categoryName) {
  return miscQuestions[Math.floor(Math.random() * miscQuestions.length)]
}
function getRandomVideoGameQuestion(categoryName) {
  return videoGameQuestions[Math.floor(Math.random() * videoGameQuestions.length)]
}

function getRandomMusicQuestion(categoryName) {
  return musicQuestions[Math.floor(Math.random() * musicQuestions.length)]
}



export {
  getRandomMusicQuestion, getRandomVideoGameQuestion, getRandomMiscQuestion
}