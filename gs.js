// select Elements 
const messageOne = document.querySelector("#message1 > span"),
    messageTwo = document.querySelector("#message2 > span"),
    message = document.getElementById("message"),
    guessNumber = document.getElementById("guess"),
    guessedNumbers = [],
    guessBtn = document.getElementById("guess-Btn");
const result = Math.floor(Math.random() * 10 + 1);
let guessedCount = 0; 
// use addEventListener 
guessBtn.addEventListener("click", playGame);

function playGame () {
    let guessNumberValue = guessNumber.value;
    if(guessNumberValue === "") {
        alert("input cannot be blank");
    }
    else if(guessNumberValue > 10 || guessNumberValue < 0) {
        alert("guess Number between 1 - 10");
    } else {
        if(guessNumberValue > result) {
            message.innerText = "This is high Number";
            guessedNumbers.push(guessNumberValue);
            guessedCount++;
            messageOne.innerText = guessedCount;
            messageTwo.innerText = guessedNumbers;
            
        }
        else if (guessNumberValue < result) {
            message.innerText = "This is low Number"
            guessedNumbers.push(guessNumberValue);
            guessedCount++;
            messageOne.innerText = guessedCount;
            messageTwo.innerText = guessedNumbers;
                        
        } else {
            message.innerText = "Cool This is Right Answer";
            message.style.color = "green";
        }
    }
}