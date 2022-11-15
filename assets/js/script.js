
// var slideH2 = document.createElement("h2");
// var slideList = document.createElement("ol");
// var slideLi1 = document.createElement("li");
// var slideLi2 = document.createElement("li");
// var slideLi3 = document.createElement("li");
// var slideLi4 = document.createElement("li");

// var button = document.createElement("BUTTON");
// // Defines Content of Tags to be Appended
// slideH2.innerHTML = "first question here";
// slideLi1.innerHTML = "first button here " + button;
// slideLi2.textContent = "second button here";
// slideLi3.textContent = "third button here";
// slideLi4.textContent = "fourth button here";



// // Puts Slide Up on Page
// document.body.appendChild(slideH2);
// document.body.appendChild(slideList);
// slideList.appendChild(slideLi1);
// slideList.appendChild(slideLi2);
// slideList.appendChild(slideLi3);
// slideList.appendChild(slideLi4);


// var quizContent = document.querySelector("#quiz-content");

// li.append(button);
// button.setAttribute("style", "margin:auto; width: 150px; height: 30px;");
// button.textContent = "THIS IS BUTTON";


// TIMER CODE

var timeLeft = 0;

// QUESTION OBJECT

var q = {
        question: ["This is the first question", "This is the second question", "This is the third question", "This is the fourth question", "This is the fifth question"],
        a: ["answer1", "answer2"],
        right: "answer1"
}

var questionLine = document.querySelector("#quiz-content");
var answerLine1 = document.querySelector("#first-a");
var answerLine2 = document.querySelector("#second-a");
var answerLine3 = document.querySelector("#third-a");
var answerLine4 = document.querySelector("#fourth-a");
var questionQuestion = q.question;
var questionAns = q.a;
console.log(q);


// QUESTION FUNCTION

function callSlide() {
    var questionQuestion = q[0].question[0];
    var questionAns = q[0].a[0];
    console.log(questionQuestion);


    questionLine.textContent = questionQuestion;
    answerLine1.textContent = questionAns;
}

callSlide();

// END GAME/ENTER INITIALS CODE (LOCAL STORAGE)


// SCOREBOARD CODE (LOCAL STORAGE)


// START BUTTON CODE


// START BUTTON EVENT LISTENER AND CALL TIMER AND QUESTION FUNCTIONS


// QUESTION ANSWER EVENT LISTENER AND TIMER SUBTRACTION


// END GAME FUNCTION/CALL INPUT/CALL SCOREBOARD