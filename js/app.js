var questionContainer = $('.question-container');
var questionCount = 1;
var quizLength = state.quiz.length;
var letterChoice = ['A', 'B', 'C', 'D'];


function renderHtml(newQuestion, element, count) {
    var questionHtml;

    if (state.quiz.length !== 0) {

        $('.results').empty();
        questionHtml = '<h2 class="question">';
        questionHtml += newQuestion.question + '</h2>';
        questionHtml += '<h4><span>(';
        questionHtml += count + ' of ' + quizLength;
        questionHtml += ')</span></h4>';
        questionHtml += '<div class="answer-container">';

        newQuestion.choices.forEach(function(choice, idx) {
            questionHtml += '<div class="choices">'

            if (choice === newQuestion.answer) {
                questionHtml += '<button class="selectChoice correctAnswer">';
            } else {
                questionHtml += '<button class="selectChoice">';
            }

            questionHtml += letterChoice[idx] + '</button>';
            questionHtml += '<span class="choice">' + choice;
            questionHtml += '</span></div>';
        });
        questionHtml += '</div>';
    }

    //element.hide();
    element.html(questionHtml);
    SlideUpAnimate(1000, function() {
      // SlideDownAnimate(60000, function() {
      //   alert("TOO SLOW");
      // });
    });
}

function renderResultsHtml () {
  var statHtml;
  statHtml = '<h1>Results:</h1><h3>You got ' + state.numberCorrect
  statHtml += ' out of ' + quizLength + ' correct</h3><button class="restart">Restart</button>';
  $('.results').html(statHtml);
  $('.question-container').html('');
}


function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

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

function shuffleChoices() {
    state.quiz.forEach(function(question) {
        shuffle(question.choices);
    });
}

// Check Answer
function checkAnswer(selected, selectedBtn) {

    if (selected === state.quiz[state.currentIdx].answer) {
        state.numberCorrect++;
        selectedBtn.addClass('correct');
        selectedBtn.html('<i class="fa fa-check" aria-hidden="true"></i>');

    } else {
        selectedBtn.addClass('incorrect');
        selectedBtn.html('<i class="fa fa-times" aria-hidden="true"></i>');
        $('.correctAnswer').css('border', '2px solid green');
    }

    $('.choices button').prop('disabled', true);
    // state.mutableQuiz.push(state.quiz.pop());

    questionCount += 1;
    $('.question-container').append('<button class="next-question">Next</button>');

}


// Next Question
function nextQuestion() {
    getQuestion();
    renderHtml(state.quiz[state.currentIdx], questionContainer, questionCount);
}

// Get Question
function getQuestion () {
  state.currentIdx = Math.floor(Math.random() * state.quiz.length);

  if (state.quiz[state.currentIdx].usedFlag === false) {
    var ranQuestion = state.quiz[state.currentIdx];
    state.quiz[state.currentIdx].usedFlag = true;
    state.numberUsed++;
    return state.quiz[state.currentIdx];
  } else {
    console.log('END!!!!!!!!!!!!!!!');
    renderResultsHtml();
  }
}


// Start Quiz 
function startQuiz() {
    $('.intro, .start').hide();

    shuffle(state.quiz);
    shuffleChoices();

    var newQuestion = getQuestion();
    renderHtml(newQuestion, questionContainer, questionCount);
}


// Restart Quiz
function restartQuiz() {
    questionCount = 1;
    state.currentIdx = 0;
    state.numberCorrect = 0;
   
    shuffle(state.quiz);
    shuffleChoices();

    renderHtml(state, questionContainer, questionCount);
}


$(document).ready(function() {
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