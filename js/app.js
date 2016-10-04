var questionContainer = $('.question-container');
var questionCount = 1;
var quizLength = state.quiz.length;
var letterChoice = ['A', 'B', 'C', 'D'];


function renderHtml (state, element, count) {
  var questionHtml;
  var statHtml;

  if (state.quiz.length !== 0) {
    
    $('.results').empty();
    questionHtml = '<h2 class="question">';
    questionHtml += state.quiz[state.currentIdx].question + '<span>(';
    questionHtml += count + ' of ' + quizLength;
    questionHtml += ')</span></h2>';

    state.quiz[state.currentIdx].choices.forEach(function (choice ,idx) {
      questionHtml += '<div class="choices">'

      if (choice === state.quiz[state.currentIdx].answer) {
        questionHtml += '<button class="selectChoice correctAnswer">';
      } else {
        questionHtml += '<button class="selectChoice">';
      }

      questionHtml += letterChoice[idx] + '</button>';
      questionHtml += '<span class="choice">' + choice;
      questionHtml += '</span></div>';
    });

  } else {
    console.log(state.quiz);
    statHtml = '<h1>Results:</h1><h3>You got ' + state.numberCorrect 
    statHtml += ' out of ' + quizLength + ' correct</h3><button class="restart">Restart</button>';
    $('.results').html(statHtml);
    $('.question-container').html('');
  }
  element.html(questionHtml);
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffleChoices () {
  state.quiz.forEach(function (question) {
    shuffle(question.choices);
  });
}


// Start Quiz 
function startQuiz() {  
  $('.intro, .start').hide();

  shuffle(state.quiz);  
  shuffleChoices(); 
  state.currentIdx = state.quiz.length-1;
  renderHtml(state, questionContainer, questionCount);
}


// Check Answer
function checkAnswer (selected, selectedBtn) {

  if (selected === state.quiz[state.currentIdx].answer) {
    state.numberCorrect++;
    selectedBtn.addClass('correct');
    
  } else {
    selectedBtn.addClass('incorrect');
    $('.correctAnswer').css('background-color', 'green');
  }

  $('.choices button').prop('disabled', true);
  state.mutableQuiz.push(state.quiz.pop());
  
  questionCount += 1;
  $('.question-container').append('<button class="next-question">Next</button>');
}

 
 // Next Question
function nextQuestion() {
  state.currentIdx = state.quiz.length-1;
  renderHtml(state, questionContainer, questionCount);
}


// Restart Quiz
function restartQuiz () {
  questionCount = 1;
  state.currentIdx = 0;
  state.numberCorrect = 0;
  state.quiz = state.mutableQuiz;
  state.mutableQuiz = [];
  shuffle(state.quiz);
  shuffleChoices(); 

  renderHtml(state, questionContainer, questionCount);
}


$(document).ready(function () {
  $('.start').click(function() {
    startQuiz();
  });

  $(document).delegate('.selectChoice', 'click', function() {
    checkAnswer($(this).next().text(), $(this));
  });

  $(document).delegate('.next-question', 'click', function() {
    nextQuestion();
  });
  
  $(document).delegate('.restart', 'click', function() {
    restartQuiz();
  });
});
