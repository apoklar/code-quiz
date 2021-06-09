var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timeLeft");

var startQuiz = document.getElementById('start-quiz');

var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;

function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    score++;
  }
  else {
    console.log("Incorrect.");
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);


}

const questions = [
    {
        question: 'Which of the following is correct about features of JavaScript?',
        answers: [
        { text: 'JavaScript is a lightweight, interpreted programming language.', correct: false },
        { text: 'JavaScript is designed for creating network-centric applications.', correct: false },
        { text: 'JavaScript is complementary to and integrated with Java.', correct: false },
        { text: 'All of the above.', correct: true }
        ]
    },
    {
        question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: [
        { text: 'getIndex()', correct: false },
        { text: 'location()', correct: false },
        { text: 'indexOf()', correct: true },
        { text: 'None of the above.', correct: false }
        ]
    },
    {
        question: 'Which of the following function of Number object returns the numbers value?',
        answers: [
        { text: 'toString()', correct: false },
        { text: 'valueOf()', correct: true },
        { text: 'toLocaleString()', correct: false },
        { text: 'toPrecision()', correct: false }
        ]
    },
    {
        question: 'Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?',
        answers: [
        { text: 'fixed()', correct: false },
        { text: 'fontcolor()', correct: false },
        { text: 'fontsize()', correct: false },
        { text: 'italics()', correct: true }
        ]
    }
]

console.log(questions);