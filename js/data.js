var state = {
  quiz: [
    {
      question: 'Which planet is NOT a gas giant?',
      choices: ['Saturn', 'Neptune', 'Venus', 'Jupiter'],
      answer: "Venus",
      usedFlag: false
    },
    {
      question: 'What natural satalite orbits Earth?',
      choices: ['Asteroid', 'The moon', 'Another planet', 'The international space station'],
      answer: 'The moon',
      usedFlag: false
    },
    {
      question: 'The planet closest to the sun is?',
      choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
      answer: 'Mercury',
      usedFlag: false
    },
    {
      question: 'What is the name of the galaxy we live in?',
      choices: ['Andromeda', 'Milky Way', 'Bode\'s', 'Mayall'],
      answer: 'Milky Way',
      usedFlag: false
    },
    {
      question: 'What planet is known for having a ring around it?',
      choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      answer: 'Saturn',
      usedFlag: false
    },
    {
      question: 'Which two planets have a retrograde(backwards) rotation?',
      choices: ['Earth and Mars', 'Mars and Venus', 'Jupiter and Saturn', 'Venus and Uranus'],
      answer: 'Venus and Uranus',
      usedFlag: false
    }
  ],
  numberUsed: 0,
  currentIdx: 0,
  numberCorrect: 0   
}