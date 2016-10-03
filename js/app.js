var questionContainer = $('.question-container');
var questionCount = 1;
var quizLength = state.quiz.length;

function renderHtml (state, element) {

  if (state.quiz.length !== 0) {
    var questionHtml = '<h2 class="question">';
    questionHtml += state.quiz[state.currentIdx].question + '<span>(';
    questionHtml += questionCount + ' of ' + quizLength;
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
    console.log("finished");
  }
  

  element.html(questionHtml);
}

// Start Quiz 
function startQuiz() {
  $('.start').click(function() {
    $('.intro, .start').hide();    
    questionContainer.show();
    state.currentIdx = state.quiz.length-1;

    renderHtml(state, questionContainer);
  })  
}


$(document).delegate('.selectChoice', 'click', function() {
  var selected = $(this).next().text();

  if (selected === state.quiz[state.currentIdx].answer && state.quiz.length !== 0) {
    $(this).addClass('correct');
  } else {
    $(this).addClass('incorrect');
    $('.correctAnswer').css('background-color', 'green');
  }

  $('.choices button').prop('disabled', true);
  state.quiz.pop();
  questionCount += 1;
  $('.next-question-container').html('<button class="next-question">Next</button>');
});
 
function nextQuestion() {
  console.log('hit');
  state.currentIdx = state.quiz.length-1;
  renderHtml(state, questionContainer);
}





function main() {
  questionContainer.hide();
  startQuiz();
  if (state.quiz === []) {
    console.log("you're done");
  } else {
    $(document).delegate('.next-question', 'click', function() {
      nextQuestion();
    });
  }
  // submitAnswer();
}

$(document).ready(main());


