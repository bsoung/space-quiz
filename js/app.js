var questionContainer = $('.question-container');
var questionCount = 1;

function renderHtml (state, idx, element) {
  var questionHtml = '<div class="question-container"><h2 class="question">';
  questionHtml += state.quiz[idx].question + '<span>(';
  questionHtml += questionCount + ' of ' + state.quiz.length;
  questionHtml += ')</span></h2><form>';

  state.quiz[idx].choices.forEach(function (choice) {
    questionHtml += '<div class="choices"><input type="radio" name="choice"<label>' 
    questionHtml += choice + '</label>';
  });
}

// Start Quiz 
function startQuiz() {
  $('.start').click(function() {
    $('.intro, .start').hide();    
    questionContainer.show();
    state.currentIdx = state.quiz.length-1;
  })  
}


// $('form input').on('change', function (){
//   console.log($('input:radio:checked').next().next('label:first').html());
// });


// button.submit


// restart quiz
  // button.click


// submit answer
  //button.click




function main() {
  questionContainer.hide();
  startQuiz();
}

$(document).ready(main());


