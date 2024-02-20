let playerWin = 0;
let computerWin = 0;

function getComputerChoice (){
    let Computerchoice = Math.floor(Math.random() * 3);
    
    if (Computerchoice === 0){
        return "rock"
    } else if (Computerchoice === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection == "rock" && computerSelection == "rock"){
        console.log("It's a Tie!")
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock")
        computerWin++;
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors")
        playerWin++;
    }

    if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock)")
        playerWin++;
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("It's a Tie!")
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Paper beats Rock")
        computerWin++;
    }

    if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Paper beats Rock")
        computerWin++;
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Rock beats Scissors")
        playerWin++;
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("It's a Tie!")
    }
}

function playGame(){
    let playerSelection = prompt("Choose: Rock, Paper or Scissors").toLocaleLowerCase()
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    console.log(`
    Computer wins: ${computerWin}
    Your wins: ${playerWin}
    `)
    
}

playGame();
playGame();
playGame();
playGame();
playGame();