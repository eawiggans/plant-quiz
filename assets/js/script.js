var slideDiv = document.createElement("div");
var slideH2 = document.createElement("h2");
var slideList = document.createElement("ol");
var slideLi1 = document.createElement("li");
var slideLi2 = document.createElement("li");
var slideLi3 = document.createElement("li");
var slideLi4 = document.createElement("li");

slideH2.innerHTML = "first question here";
slideLi1.textContent = "first button here";
slideLi2.textContent = "second button here";
slideLi3.textContent = "third button here";
slideLi4.textContent = "fourth button here";



document.body.appendChild(slideH2);
document.body.appendChild(slideList);
slideList.appendChild(slideLi1);
slideList.appendChild(slideLi2);
slideList.appendChild(slideLi3);
slideList.appendChild(slideLi4);

var question1;
var question2;
var question3;
var question4;
var question5;
var enterInit;
var scorecard;

var questions = [ 
   {
        question: "This is the first question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: answer1
    },
    {
        question: "This is the second question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: answer1
    },
    {
        question: "This is the third question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: answer1
    },
    {
        question: "This is the fourth question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: answer1
    },
    {
        question: "This is the fifth question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: answer1
    }
]





var firstSet = questions[0].question[0];


// var makeP = document.createElement("p");
// makeP.textContent = "some content";
// document.body.appendChild(makeP);
