

const submitGuessButton = document.getElementById("submitGuess");
const guessInput = document.getElementById("guessInput");
const resultMessage = document.getElementById("resultMessage");
const attemptsDisplay = document.getElementById("attempts");

let randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0; 

submitGuessButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Tebrikler! Doğru tahmin ettiniz! Sayı: ${randomNumber}`;
        resultMessage.style.color = "green";
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = "Sayı çok büyük! Tekrar deneyin.";
        resultMessage.style.color = "red";
    } else {
        resultMessage.textContent = "Sayı çok küçük! Tekrar deneyin.";
        resultMessage.style.color = "red";
    }

    guessInput.value = ""; 
});
