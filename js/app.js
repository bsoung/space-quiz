var questionContainer = $('.question-container');
var questionCount = 1;
var quizLength = state.quiz.length;


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


function renderHtml(newQuestion, element, count) {
    var questionHtml = '';

    $('.results').empty();
    $('.question').html(newQuestion.question);
    $('.counter').html('(' + count + ' of ' + quizLength + ')');

    newQuestion.choices.forEach(function(choice) {
        questionHtml += '<div class="choices">'

        if (choice === newQuestion.answer) {
            questionHtml += '<button class="select-choice correct-answer">';
        } else {
            questionHtml += '<button class="select-choice">';
        }

        questionHtml += choice + '</button>';
        questionHtml += '</div>';
    });
    questionHtml += '</div>';
    $('.next-question').hide();
    $('.result-button').hide();

    $('.question-container').show();
    //element.hide();
    element.html(questionHtml);
    SlideUpAnimate(1000, function() {
        // SlideDownAnimate(60000, function() {
        //   alert("TOO SLOW");
        // });
    });
}


function renderResultsHtml() {
    var statHtml;
    statHtml = '<h1>Results:</h1><h3>You got ' + state.numberCorrect
    statHtml += ' out of ' + quizLength + ' correct</h3><button class="restart button-style">Restart</button>';
    $('.results').html(statHtml);
    $('.question-container').hide();
}

// Check Answer
function checkAnswer(selected, selectedBtn) {
    if (selected === state.quiz[state.currentIdx].answer) {

        state.numberCorrect++;
        selectedBtn.addClass('correct');
        selectedBtn.html('<i class="fa fa-check" aria-hidden="true"></i>');

    } else {
        console.log("wrong")
        console.log(selected)
        selectedBtn.addClass('incorrect');
        selectedBtn.html('<i class="fa fa-times" aria-hidden="true"></i>');
        $('.correct-answer').css('border', '6px solid green');
    }

    $('.choices button').prop('disabled', true);
    // state.mutableQuiz.push(state.quiz.pop());

    questionCount += 1;
    if (state.currentIdx === 0) {
        $('.result-button').show();
    } else {
        $('.next-question').show();
    }
    // $('.question-container').append('<button class="next-question">Next</button>');

}


// Next Question
function nextQuestion() {
    state.currentIdx--;
    var newQuestion = getQuestion();
    renderHtml(newQuestion, $('.answer-container'), questionCount);
}

// Get Question
function getQuestion() {

    if (state.currentIdx > -1) {
        var ranQuestion = state.quiz[state.currentIdx];
        return state.quiz[state.currentIdx];
    }
}


// Start Quiz 
function startQuiz() {
    $('.intro, .start').hide();

    shuffle(state.quiz);
    shuffleChoices();

    state.currentIdx = state.quiz.length - 1;
    var newQuestion = getQuestion();
    renderHtml(newQuestion, $('.answer-container'), questionCount);
}


// Restart Quiz
function restartQuiz() {
    questionCount = 1;
    state.currentIdx = state.quiz.length - 1;
    state.numberCorrect = 0;

    startQuiz();
}


$(document).ready(function() {
    $('.start').click(function() {
        startQuiz();
    });

    $(document).delegate('.select-choice', 'click', function() {
        checkAnswer($(this).text(), $(this));
    });

    $(document).delegate('.next-question', 'click', function() {
        nextQuestion();
    });

    $(document).delegate('.result-button', 'click', function() {
        renderResultsHtml();
    });

    $(document).delegate('.restart', 'click', function() {
        restartQuiz();
    });

    $(document).keydown(function(e) {
        if (e.key === "Enter") {
            
            if ($('.start').is(':visible')) {
                    startQuiz();
            };

            if ($('.next-question').is(':visible')) {
                    nextQuestion();
            }

            if ($('.result-button').is(':visible')) {
                    renderResultsHtml();
            }

        }
    });
});