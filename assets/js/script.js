function startQuiz(){
    document.getElementById("questionDiv").removeAttribute("style")
    document.getElementById("mainDiv").setAttribute("style", "display: none")
    showQuestion();
}

var score=0

var timer=60

document.getElementById('start-quiz').addEventListener("click", startQuiz)

var questionIndex=0

function showQuestion(){

    document.getElementById('question').textContent=questions[questionIndex].question
    
    document.getElementById('answer1').textContent=questions[questionIndex].answers[0].text
    document.getElementById('answer2').textContent=questions[questionIndex].answers[1].text
    document.getElementById('answer3').textContent=questions[questionIndex].answers[2].text
    document.getElementById('answer4').textContent=questions[questionIndex].answers[3].text
    
    document.getElementById('answer1').setAttribute("data-correct", questions[questionIndex].answers[0].correct)
    document.getElementById('answer2').setAttribute("data-correct", questions[questionIndex].answers[1].correct)
    document.getElementById('answer3').setAttribute("data-correct", questions[questionIndex].answers[2].correct)
    document.getElementById('answer4').setAttribute("data-correct", questions[questionIndex].answers[3].correct)

    document.getElementById('answer1').addEventListener("click", checkAnswer);
    document.getElementById('answer2').addEventListener("click", checkAnswer);
    document.getElementById('answer3').addEventListener("click", checkAnswer);
    document.getElementById('answer4').addEventListener("click", checkAnswer);

    document.querySelectorAll('.btn').addEventListener("click", showQuestion)
}

function startTimer(){
    var sec = 60;
    timer = setInterval(function(){
        document.getElementById('timeLeft').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

document.getElementById('start-quiz').addEventListener("click", function() {
    var oneMinute = 60,
        display = document.querySelector('.timeLeft');
    startTimer(oneMinute, display);

    checkAnswer()
});

function showResults (){
  const answers = quizContainer.querySelectorAll('.answers');

}

function checkAnswer (event){
    if (event.target.getAttribute("data-correct") === "true") {
        score++
    } else {
        timer-=10
    }
    questionIndex++
    showQuestion()
}

var quizContainer = document.getElementById("quiz");
var submitButton = document.getElementById("submit");
var resultsContainer = document.getElementById("results");

const questions = [
    {
        question: 'Which of the following is correct about features of JavaScript?',
        answers: [
        { text: 'JavaScript is a lightweight, interpreted programming language.', correct: "false" },
        { text: 'JavaScript is designed for creating network-centric applications.', correct: "false" },
        { text: 'JavaScript is complementary to and integrated with Java.', correct: "false" },
        { text: 'All of the above.', correct: "true" }
        ]
    },
    {
        question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: [
        { text: 'getIndex()', correct: "false" },
        { text: 'location()', correct: "false" },
        { text: 'indexOf()', correct: "true" },
        { text: 'None of the above.', correct: "false" }
        ]
    },
    {
        question: 'Which of the following function of Number object returns the numbers value?',
        answers: [
        { text: 'toString()', correct: "false" },
        { text: 'valueOf()', correct: "true" },
        { text: 'toLocaleString()', correct: "false" },
        { text: 'toPrecision()', correct: "false" }
        ]
    },
    {
        question: 'Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?',
        answers: [
        { text: 'fixed()', correct: "false" },
        { text: 'fontcolor()', correct: "false" },
        { text: 'fontsize()', correct: "false" },
        { text: 'italics()', correct: "true" }
        ]
    }
]

submitButton.addEventListener("click", showResults);

console.log(questions);