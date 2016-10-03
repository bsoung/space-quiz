var questionContainer = $('.question-container');
var questionCount = 1;
var quizLength = state.quiz.length;
var restartQuestions = state.quiz.slice();

function renderHtml (state, element, count) {
  var questionHtml;
  var statHtml;

  if (state.quiz.length !== 0) {
    $('.results').empty();
    questionHtml = '<h2 class="question">';
    questionHtml += state.quiz[state.currentIdx].question + '<span>(';
    questionHtml += count + ' of ' + quizLength;
    questionHtml += ')</span></h2>';

    state.quiz[state.currentIdx].choices.forEach(function (choice) {
      questionHtml += '<div class="choices">'

      if (choice.split('.')[1].trim() === state.quiz[state.currentIdx].answer) {
        questionHtml += '<button class="selectChoice correctAnswer">';
      } else {
        questionHtml += '<button class="selectChoice">';
      }

      questionHtml += choice[0] + '</button>';
      questionHtml += '<span class="choice">' + choice.split('.')[1].trim();
      questionHtml += '</span></div>';
    });
  } else {
    console.log('hi');
    statHtml = '<h1>Results:</h1><h3>You got ' + state.numberCorrect 
    statHtml += ' out of ' + quizLength + ' correct</h3><button class="restart">Restart</button>';
    $('.results').html(statHtml);
    $('.question-container').html('');
  }
  element.html(questionHtml);
}

// Start Quiz 
function startQuiz() {
  $('.start').click(function() {
    $('.intro, .start').hide();    
    state.currentIdx = state.quiz.length-1;
    renderHtml(state, questionContainer, questionCount);
  })  

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
  state.quiz.pop();
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
  state.quiz = restartQuestions;
  renderHtml(state, questionContainer, questionCount);
}


function main() {
  startQuiz();

  $(document).delegate('.selectChoice', 'click', function() {
    checkAnswer($(this).next().text(), $(this));
  });

  $(document).delegate('.next-question', 'click', function() {
    nextQuestion();
  });
  
  $(document).delegate('.restart', 'click', function() {
    restartQuiz();
  });
}

$(document).ready(main());


