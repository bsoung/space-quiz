var state = {
  quiz: [
    {
      question: 'Which planet is NOT a gas giant?',
      choices: ['A. Saturn', 'B. Neptune', 'C. Venus', 'D. Jupiter'],
      correctIdx: 2
    },
    {
      question: 'What natural satalite orbits Earth?',
      choices: ['A. Asteroid', 'B. The moon', 'C. Another planet', 'D. The international space station'],
      correctIdx: 1
    },
    {
      question: 'The planet closest to the sun is?',
      choices: ['A. Mercury', 'B. Venus', 'C. Mars', 'D. Earth'],
      correctIdx: 0
    },
    {
      question: 'What is the name of the galaxy we live in?',
      choices: ['A. Andromeda', 'B. Milky Way', 'C. Bode\'s', 'D. Mayall'],
      correctIdx: 1
    },
    {
      question: 'What planet is known for having a ring around it?',
      choices: ['A. Mars', 'B. Jupiter', 'C. Venus', 'D. Saturn'],
      correctIdx: 3
    },
    {
      question: 'Which two planets have a retrograde(backwards) rotation?',
      choices: ['A. Earth and Mars', 'B. Mars and Venus', 'C. Jupiter and Saturn', 'D. Venus and Uranus'],
      correctIdx: 3
    }
  ],
  correctFlag: false,
  currentIdx: 0,
  numberCorrect: 0   
}