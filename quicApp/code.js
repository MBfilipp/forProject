"use strict"


// Objects

let question = {
    0: "Какого цвета слон?",
    1: "How many colors?",
    2: "What is that?"
};

let answers = {

    // Four elems for fix bug with questionCounter

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
    },
    3: {
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
let pInFirstBlockID = document.getElementById("quest-block-1")
let pInSecondBlockID = document.getElementById("quest-block-2")
let questBlocks = document.querySelector(".quest-blocks");
let pQuestion = document.querySelector("#question-p-id");

// Progress-bar

let progressBar = document.querySelector(".progress-bar");
let progressLine = document.getElementById("progress-line-id");
let increaseLeft = [];
let leftProcent = (100 / questionLimit);

for(let i = 0; i < questionLimit; i++) {
    increaseLeft.push(leftProcent);
}

// Insert p value

pQuestion.innerHTML = question[questionCounter];
pInFirstBlock.innerHTML = answers[questionCounter][1];
pInSecondBlock.innerHTML = answers[questionCounter][2];

// Add eventListeners

questBlocks.addEventListener("click", (event) => {
    
    //logic

    progressLine.value += increaseLeft[questionCounter];

    if(event.target.id === "quest-block-1" || event.target.id === "quest-block-2") {

        if(event.target.getAttribute("name") == rightAnswers[questionCounter]){
            questionCounter++;
            correctAnswerCounter++;
            pQuestion.innerHTML = question[questionCounter];
            pInFirstBlock.innerHTML = answers[questionCounter][1];
            pInSecondBlock.innerHTML = answers[questionCounter][2];
        }else {
            questionCounter++;
            pQuestion.innerHTML = question[questionCounter];
            pInFirstBlock.innerHTML = answers[questionCounter][1];
            pInSecondBlock.innerHTML = answers[questionCounter][2];
        }

        if(questionCounter == questionLimit) {
            pInSecondBlockID.id = "";
            pInFirstBlockID.id = "";
            pQuestion.innerHTML = "Ваш результат";
            pInFirstBlock.innerHTML = "Правильных ответов " + correctAnswerCounter;
            pInSecondBlock.innerHTML = correctAnswerCounter + "/" + questionLimit;
            return;
        }

    }

});







