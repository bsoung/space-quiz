var questionContainer = $('.question-container');
var questionCount = 1;

function renderHtml (state, element) {
  var questionHtml = '<h2 class="question">';
  questionHtml += state.quiz[state.currentIdx].question + '<span>(';
  questionHtml += questionCount + ' of ' + state.quiz.length;
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

  if (selected === state.quiz[state.currentIdx].answer) {
    $(this).addClass('correct');
  } else {
    $(this).addClass('incorrect');
    $('.correctAnswer').css('background-color', 'green');
  }

  $('.choices button').prop('disabled', true);

  $('.next-question-container').html('<button class="nextQuestion">Next</button>');
});
 

 // submit answer







// restart quiz
  // button.click


  //button.click



function main() {
  questionContainer.hide();

  startQuiz();
  // submitAnswer();
}

$(document).ready(main());


