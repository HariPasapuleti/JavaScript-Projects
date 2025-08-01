

const choices=["rock", "paper", "scissors"]

const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay")
const resultDisplay=document.getElementById("resultDisplay")
const scoreDisplay = document.getElementById("scoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // console.log(computerChoice)

    let result=""
    if (playerChoice.value === computerChoice) {
        result="IT'S A TIE"
    }
    else {
        switch(playerChoice){
            case 'rock':
                result=(computerChoice==="paper")?"YOU LOSE!":"YOU WIN!"
                break
            case 'paper':
                result=(computerChoice==="scissors")?"YOU LOSE!":"YOU WIN!"
                break
            case 'scissors':
                result=(computerChoice==="rock")?"YOU LOSE!":"YOU WIN!"
                break
        }
    }

    if (result === "YOU WIN!") {
        playerScore++;
    } else if (result === "YOU LOSE!") {
        computerScore++;
    }

    playerDisplay.textContent=`PLAYER: ${playerChoice}`
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`
    resultDisplay.textContent=result
    scoreDisplay.textContent = `PLAYER SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;

}