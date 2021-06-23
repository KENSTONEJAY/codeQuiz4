//Tracking variables in quiz 
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

//initialize variable to reference DOM elements 
var questElem = document.getElementById("questions");
var timerEl = document.getElementById("time");
var optionElem = document.getElementById("options");
var startBtn = document.getElementById("start");

//function that starts the quiz
function startQuiz() {
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
  
    getQuestion();
  }
  
 