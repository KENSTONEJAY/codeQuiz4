// variables to track
var curretnQuestionIndex
//var time = questions.length * 20;
var timerId;

//Reference the variables in the DOM 
var questElem = document.getElementById("questions")
var countdownElem = document.getElementById("timer")
var optionElem = document.getElementById("options")

//Start timer 
const startTime = 2;
let time = startTime * 60;

setInterval(updateCountdown, 1000 )

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  time = time < 0 ? 0 : time; 

  countdownElem.innerHTML = `${minutes}: ${seconds}`
  time--;
}









