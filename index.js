let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.floor(Math.random()*100);


function checkGuess(){
    let guessedNumber = parseInt(userInput.value);
    if(guessedNumber>randomNumber){
        gameResult.textContent = "Too High! Try Again"
        gameResult.style.backgroundColor = "Red";
        gameResult.style.color = "White";
    }
    else if(guessedNumber<randomNumber){
        gameResult.textContent = "Too low! Try Again"
        gameResult.style.backgroundColor = "Red";
        gameResult.style.color = "White";
    }
    else if(guessedNumber===randomNumber){
        gameResult.textContent = "Congratulations! You got it Right"
        gameResult.style.color = "White";
        gameResult.style.backgroundColor="Green"
          
    }
    else{
        gameResult.textContent = "Enter a Valid Input"
        gameResult.style.color = "White";
        gameResult.style.backgroundColor="#f76331"
    }

}