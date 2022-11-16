// QUIZ JAVASCRIPT

// INITIAL STATE

// Hides timer element on page load
// document.getElementById("timer-space").style.display = "none";
// Hides question space
document.getElementById("quiz-space").style.display = "none";
// TIMER CODE
var timeLeft = 70;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
    var timerSpace = document.getElementById("timer-space")
      timerSpace.textContent = timeLeft + " seconds remaining";
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        // sendMessage();
      }
  
    }, 1000);
  }


// QUESTION OBJECT

var q = {
        qu: ["What is the plant kingdom called?", "What kind of environment do ferns prefer?", "This is the third question", "This is the fourth question", "This is the fifth question"],
        a: ["Fungi", "Plantae", "Verdiae", "Viviae", "humid", "dry", "full-sun", "large pot"],
        right: "answer1"
}

var questionLine = document.querySelector("#quiz-content");
var lineOne = document.getElementById("first-a");
var lineTwo = document.getElementById("second-a");
var lineThree = document.getElementById("third-a");
var lineFour = document.getElementById("fourth-a");
var questionQuestion = q.qu;
var questionAns = q.a;
console.log(q);


// QUESTION FUNCTION

function callSlide() {
    var questionQuestion = q.qu[0];
    // var questionAns = q.a[0];

    questionLine.textContent = questionQuestion;

    var aBtn = document.createElement("button");
    aBtn.textContent = q.a[0];
    lineOne.appendChild(aBtn);
    var bBtn = document.createElement("button");
    bBtn.textContent = q.a[1];
    lineTwo.appendChild(bBtn);
    var cBtn = document.createElement("button");
    cBtn.textContent = q.a[2];
    lineThree.appendChild(cBtn);
    var dBtn = document.createElement("button");
    dBtn.textContent = q.a[3];
    lineFour.appendChild(dBtn);
    
    // CAN I DO THIS IF/ELSE STYLE???
    // how do i use stopPropagate here
  
    var clickNext = document.getElementById("quiz-space");
    var clickRight = document.getElementById("second-a");
    clickNext.addEventListener("click", function() {
      console.log("YAY")
      timeLeft -= 10;

    })
    
    clickRight.onclick.stopPropagation();
    clickRight.addEventListener("click", function() {
      console.log("RIGHT ANSWER")
})
}




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





// END GAME/ENTER INITIALS CODE (LOCAL STORAGE)


// SCOREBOARD CODE (LOCAL STORAGE)


// START BUTTON CODE


// START BUTTON EVENT LISTENER AND CALL TIMER AND QUESTION FUNCTIONS


// QUESTION ANSWER EVENT LISTENER AND TIMER SUBTRACTION


// END GAME FUNCTION/CALL INPUT/CALL SCOREBOARD