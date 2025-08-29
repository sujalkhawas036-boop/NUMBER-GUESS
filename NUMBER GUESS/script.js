const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "⛔ Please enter a number between 1 and 100.";
    message.style.color = "red";
  } else if (userGuess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "orange";
  } else if (userGuess > secretNumber) {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = `✅ Correct! You guessed it in ${attempts} tries.`;
    message.style.color = "green";
  }
}
