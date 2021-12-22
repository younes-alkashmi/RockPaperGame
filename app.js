let userResult = 0;
let compResult = 0;
let words      = [];
const userSpan = document.querySelector(".user-result");
const compSpan = document.querySelector(".comp-result");
const choices  = document.querySelectorAll(".choices > div");
const resutlText = document.querySelector(".result-text");
choices.forEach(function(element){
    words.push(element.id);
    element.addEventListener("click",function(el){
        let compChoice = getRandom(words);
        let userChoice = el.currentTarget.id;
        
        switch(userChoice + compChoice){
            case"rockscissors":
            case"scissorspaper":
            case"paperrock":
            userResult++;
            userSpan.innerHTML = userResult;
            resutlText.innerHTML = "You win 🔥\nComputer loses";
            break;
            case"scissorsrock":
            case"paperscissors":
            case"rockpaper":
            compResult++;
            compSpan.innerHTML = compResult;
            resutlText.innerHTML = "You lose . . .\nCompuer wins.";
            break;
            default: resutlText.innerHTML = "It's a draw...\nTry again.";
        }
    })
});

function getRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
