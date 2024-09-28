//rock paper sessvions

const choices = ["batu", "gunting","kertas"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');



function playGame(playerChoise) {
    const computerChoices = choices[Math.floor(Math.random()*3)];
    console.log(computerChoices);
    let result = "";
    if (playerChoise === computerChoices) {
        result = "SERIII";
    } else if (
        (playerChoise === "batu" && computerChoices === 'gunting'),
        (playerChoise === "gunitng" && computerChoices === 'kertas'),
        (playerChoise === "kertas" && computerChoices === 'batu')
    ) {
    result = 'SELAMAT ANDA MENANG'
    } else {
        result = 'YAAAH ANDA KALAH'
    }
    playerDisplay.textContent = `Player: ${playerChoise}`;
    computerDisplay.textContent = `Computer: ${computerChoices}`
    resultDisplay.textContent = result
}