var state = {
  quiz: [
    {
      question: 'Which planet is NOT a gas giant?',
      choices: ['Saturn', 'Neptune', 'Venus', 'Jupiter'],
      answer: "Venus"
    },
    {
      question: 'What natural satalite orbits Earth?',
      choices: ['Asteroid', 'The moon', 'Another planet', 'The international space station'],
      answer: 'The moon'
    },
    {
      question: 'The planet closest to the sun is?',
      choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
      answer: 'Mercury'
    },
    {
      question: 'What is the name of the galaxy we live in?',
      choices: ['Andromeda', 'Milky Way', 'Bode\'s', 'Mayall'],
      answer: 'Milky Way'
    },
    {
      question: 'What planet is known for having a ring around it?',
      choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      answer: 'Saturn'
    },
    {
      question: 'Which two planets have a retrograde(backwards) rotation?',
      choices: ['Earth and Mars', 'Mars and Venus', 'Jupiter and Saturn', 'Venus and Uranus'],
      answer: 'Venus and Uranus'
    }
  ],
  mutableQuiz: [],
  currentIdx: 0,
  numberCorrect: 0   
}