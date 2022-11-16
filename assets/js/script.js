// QUIZ JAVASCRIPT

// INITIAL STATE
// Hides question space
document.getElementById("quiz-space").style.display = "none";
var timeLeft = 70;
var timerInterval = 0;


// GAME OVER INPUT SLIDE THIS NEEDS WORK!!!!!
// TODO: input
//        local storage of score and initials
          
function callGameOver() {
  document.getElementById("quiz-space").style.display = "none";

  // document.getElementById("timer-space").style.display = "none";
  var gameOver = document.getElementById("game-over");
  
  var form = document.createElement("form");
  form.setAttribute("action", "submit");
  gameOver.appendChild(form);
  var initInput = document.createElement("input");
    initInput.setAttribute("type", "text");
    initInput.setAttribute("placeholder", "Enter your initials here");
  form.appendChild(initInput);
   var subBtn = document.createElement("input");
   subBtn.setAttribute("type", "submit");
   subBtn.setAttribute("value", "Submit");
   form.appendChild(subBtn);
  // localStorage.setItem("initInput", JSON.stringify(initInput));
  }


//   // TODO: how to make stored to local storage
//   ;



// TIMER CODE
// TODO: end timer if callGameOver()



function setTime() {
    var timerInterval = setInterval(function() {
      timeLeft--;
    var timerSpace = document.getElementById("timer-space")
      timerSpace.textContent = timeLeft + " seconds remaining";
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        callGameOver()
      }
  
    }, 1000);
  }



// QUESTION OBJECT

// TODO: debug slide transitions!!!!

var q = {
        qu: ["1. What is the plant kingdom called?", "2. What kind of environment do ferns prefer?", "3. How does xylem carry water and nutrients in vascular plants?", "4. Which of the following is not an important factor in soil health?", "5. Which species is native to North America?"],
        a: ["Fungi", "Plantae", "Verdiae", "Viviae", "humid", "dry", "full-sun", "large pot", "From leaves to roots", "from the surface of leaves into the interior of the plant", "from roots to leaves","only to horizontally-reaching stems and branches", "crystalization", "aeration", "organic matter", "death and decay", "knotweed", "multiflora rose", "garlic mustard", "creeping charlie"]
}

var questionLine = document.querySelector("#quiz-content");
var lineOne = document.getElementById("first-a");
var lineTwo = document.getElementById("second-a");
var lineThree = document.getElementById("third-a");
var lineFour = document.getElementById("fourth-a");
var questionQuestion = q.qu;
var questionAns = q.a;
console.log(q);
var aBtn = document.createElement("button");
var bBtn = document.createElement("button");
var cBtn = document.createElement("button");
var dBtn = document.createElement("button");

// QUESTION FUNCTIONS

// question 1

function callSlide() {
    questionQuestion = q.qu[0];
    questionLine.textContent = questionQuestion;

    // var aBtn = document.createElement("button");
    var aBtn = document.getElementById("first-a");
    aBtn.textContent = q.a[0];
    // lineOne.appendChild(aBtn);
    // var bBtn = document.createElement("button");
    var bBtn = document.getElementById("second-a");
    bBtn.textContent = q.a[1];
    // lineTwo.appendChild(bBtn);
    // var cBtn = document.createElement("button");
    var cBtn = document.getElementById("third-a");
    cBtn.textContent = q.a[2];
    // lineThree.appendChild(cBtn);
    // var dBtn = document.createElement("button");
    var dBtn = document.getElementById("fourth-a");
    dBtn.textContent = q.a[3];
    // lineFour.appendChild(dBtn);
   
    var clickNext = document.getElementById("quiz-space");
    var wrong = clickNext.addEventListener("click", function() { 
      if (timeLeft > 0) {
      console.log("incorrect")
      timeLeft -= 10;
      clickNext.removeEventListener("click", wrong);
      callSlideTwo();}
      else {
        callGameOver()
      }
    });

    var clickRight = document.getElementById("second-a");
    var right = clickRight.addEventListener("click", function(event) {
      event.stopPropagation();
      clickNext.removeEventListener("click", right);
      console.log("RIGHT ANSWER");
      callSlideTwo();
    });
}

// questiton 2
function callSlideTwo() {
  questionQuestion = q.qu[1];
  questionLine.textContent = questionQuestion;

  var aBtn = document.getElementById("first-a");
  aBtn.textContent = q.a[4];
  var bBtn = document.getElementById("second-a");
  bBtn.textContent = q.a[5];
  var cBtn = document.getElementById("third-a");
  cBtn.textContent = q.a[6];
  var dBtn = document.getElementById("fourth-a");
  dBtn.textContent = q.a[7];
 
  var clickNext = document.getElementById("quiz-space");
  var wrong = clickNext.addEventListener("click", function() { 
    if (timeLeft > 0) {
    console.log("incorrect")
    timeLeft -= 10;
    callSlideThree();}
    else {
      callGameOver()
    }
  });

  var clickRight = document.getElementById("first-a");
  var right = clickRight.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("RIGHT ANSWER")
    callSlideThree();
  });

}

// question 3

function callSlideThree() {
  questionQuestion = q.qu[2];
  questionLine.textContent = questionQuestion;

  var aBtn = document.getElementById("first-a");
  aBtn.textContent = q.a[8];
  var bBtn = document.getElementById("second-a");
  bBtn.textContent = q.a[9];
  var cBtn = document.getElementById("third-a");
  cBtn.textContent = q.a[10];
  var dBtn = document.getElementById("fourth-a");
  dBtn.textContent = q.a[11];
 
  var clickNext = document.getElementById("quiz-space");
  clickNext.addEventListener("click", function() { 
    if (timeLeft > 0) {
    console.log("incorrect")
    timeLeft -= 10;
    callSlideFour();}
    else {
      callGameOver()
    }
  });

  var clickRight = document.getElementById("third-a");
  clickRight.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("RIGHT ANSWER")
    callSlideFour();
  });

}

// question 4
function callSlideFour() {
  questionQuestion = q.qu[3];
  questionLine.textContent = questionQuestion;

  var aBtn = document.getElementById("first-a");
  aBtn.textContent = q.a[12];
  var bBtn = document.getElementById("second-a");
  bBtn.textContent = q.a[13];
  var cBtn = document.getElementById("third-a");
  cBtn.textContent = q.a[14];
  var dBtn = document.getElementById("fourth-a");
  dBtn.textContent = q.a[15];
 
  var clickNext = document.getElementById("quiz-space");
  var wrong = clickNext.addEventListener("click", function() { 
    if (timeLeft > 0) {
    console.log("incorrect")
    timeLeft -= 10;
    callSlideFive();}
    else {
      callGameOver()
    }
  });

  var clickRight = document.getElementById("first-a");
  var right = clickRight.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("RIGHT ANSWER")
    callSlideFive();
  });

}

// question 5
function callSlideFive() {
  questionQuestion = q.qu[4];
  questionLine.textContent = questionQuestion;

  var aBtn = document.getElementById("first-a");
  aBtn.textContent = q.a[16];
  var bBtn = document.getElementById("second-a");
  bBtn.textContent = q.a[17];
  var cBtn = document.getElementById("third-a");
  cBtn.textContent = q.a[18];
  var dBtn = document.getElementById("fourth-a");
  dBtn.textContent = q.a[19];
 
  var clickNext = document.getElementById("quiz-space");
  var wrong = clickNext.addEventListener("click", function() { 
    console.log("incorrect");
    callGameOver();
  });

  var clickRight = document.getElementById("fourth-a");
  var right = clickRight.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("RIGHT ANSWER")
    callGameOver();
  });

}


// How do i make the transition to the next question?
// make question 2 its own function and call it in both clickWrong and clickRight


// START GAME
// event listener on button
// call setTime() and callSlide()
// hide start-game section
var startBtn = document.getElementById("start-game");
startBtn.addEventListener("click", function() {
    document.getElementById("quiz-space").style.display ="";
    setTime()
    callSlide()
    document.getElementById("start-game").style.display ="none";
})


