var state = {
  quiz: [
    {
      question: 'Which planet is NOT a gas giant?',
      choices: ['A. Saturn', 'B. Neptune', 'C. Venus', 'D. Jupiter'],
      answer: "Venus"
    },
    {
      question: 'What natural satalite orbits Earth?',
      choices: ['A. Asteroid', 'B. The moon', 'C. Another planet', 'D. The international space station'],
      answer: 'The moon'
    },
    {
      question: 'The planet closest to the sun is?',
      choices: ['A. Mercury', 'B. Venus', 'C. Mars', 'D. Earth'],
      answer: 'Mercury'
    },
    {
      question: 'What is the name of the galaxy we live in?',
      choices: ['A. Andromeda', 'B. Milky Way', 'C. Bode\'s', 'D. Mayall'],
      answer: 'Milky Way'
    },
    {
      question: 'What planet is known for having a ring around it?',
      choices: ['A. Mars', 'B. Jupiter', 'C. Venus', 'D. Saturn'],
      answer: 'Saturn'
    },
    {
      question: 'Which two planets have a retrograde(backwards) rotation?',
      choices: ['A. Earth and Mars', 'B. Mars and Venus', 'C. Jupiter and Saturn', 'D. Venus and Uranus'],
      answer: 'Venus and Uranus'
    }
  ],
  currentIdx: 0,
  numberCorrect: 0   
}