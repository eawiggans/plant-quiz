
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




var questions = [ 
   {
        question: "This is the first question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: "answer1"
    },
    {
        question: "This is the second question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        right: "answer1"
    },
    {
        question: "This is the third question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        right: "answer1"
    },
    {
        question: "This is the fourth question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        right: "answer1"
    },
    {
        question: "This is the fifth question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        right: "answer1"
    }
]

var questionSlide = document.querySelector("#quiz-content");
var questionQuestion = questions.question;






function callSlide() {
    var questionQuestion = questions[0].question;
    console.log(questionQuestion);

    questionSlide.textContent = questionQuestion;

}

callSlide();
console.log(questionSlide);






// var makeP = document.createElement("p");
// makeP.textContent = "some content";
// document.body.appendChild(makeP);
