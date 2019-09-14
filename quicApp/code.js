"use strict"


// Objects

let question = {
    0: "Какого цвета слон?",
    1: "How many colors?",
    2: "What is that?"
};

let answers = {
    0: {
        1: "grey",
        2: "green"
    },
    1: {
        1: "2",
        2: "3"
    },
    2: {
        1: "foo",
        2: "bar"
    }
};

let rightAnswers = {
    0: 2,
    1: 1,
    2: 2
};

// Counters

let questionCounter = 0,
    questionLimit = Object.keys(question).length,
    correctAnswerCounter = 0;

// Variables

let firstBlock = document.querySelector(".first-block");
let secondBlock = document.querySelector(".second-block");
let pInFirstBlock = document.querySelector(".first-block p");
let pInSecondBlock = document.querySelector(".second-block p");
let questBlocks = document.querySelector(".quest-blocks");
let pQuestion = document.querySelector("#question-p-id");

// Progress-bar

let progressBar = document.querySelector(".progress-bar");
let progressLine = document.querySelector(".progress-bar .progress-line");
let increaseLeft = [];
let leftProcent = Math.floor(800 / questionLimit);

for(let i = 0; i < questionLimit; i++) {
    increaseLeft.push(leftProcent + "px");
}

// Insert p value

pQuestion.innerHTML = question[questionCounter];
pInFirstBlock.innerHTML = answers[questionCounter][1];
pInSecondBlock.innerHTML = answers[questionCounter][2];

// Add eventListeners

questBlocks.addEventListener("click", function eventList(event) {

    

    if(event.target.id == "quest-block" && questionCounter < questionLimit) {
        //logs

        console.log(correctAnswerCounter);

        //logic

        progressLine.style.marginLeft = `${"+" + increaseLeft[questionCounter]}`;

        if(event.target.getAttribute("name") == rightAnswers[questionCounter]) {
            questionCounter++;
            correctAnswerCounter++;
            pQuestion.innerHTML = question[questionCounter];
            pInFirstBlock.innerHTML = answers[questionCounter][1];
            pInSecondBlock.innerHTML = answers[questionCounter][2];
            console.log("correct");
        }else {
            questionCounter++;
            pQuestion.innerHTML = question[questionCounter];
            pInFirstBlock.innerHTML = answers[questionCounter][1];
            pInSecondBlock.innerHTML = answers[questionCounter][2];     
        }
        if(questionCounter == questionLimit) {
            questionCounter++;
        }
        
    }else {
        pQuestion.name = '';
        pInFirstBlock.name = '';
        pQuestion.innerHTML = "Ваш результат";
        pInFirstBlock.innerHTML = "Правильных ответов " + correctAnswerCounter;
        pInSecondBlock.innerHTML = correctAnswerCounter + "/" + questionLimit;
    }
});







