// computer gets randomly rock paper or scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()* 3);

        if(randomNumber === 0){
            return "rock";

        }else if(randomNumber === 1){
            return "paper";

        } else {
            return "scissors";

        };

};
// one round of rock-paper-scissors between the player and the computer
function playRound(playerSelection , computerSelection){
 
    if(playerSelection.toLowerCase() == computerSelection){
        return "Draw";
    };

    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "paper"){
            computerScore = computerScore + 1;
            return "you lose! Paper beats rock" ;
        }
            else{
                playerScore = playerScore + 1;
                return "you win! Rock beats scissors"
        }
    };

    if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection == "scissors"){
            computerScore = computerScore + 1;
            return "you lose! Scissors beats paper";
        }
            else{
                playerScore = playerScore + 1;
                return "you win! Paper beats rock"
        }
    };

    if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "rock"){
            computerScore = computerScore + 1;
            return "you lose! Rock beats scissors";
        }
            else{
                playerScore = playerScore + 1;
                return "you win! Scissors beats paper"
        }
    };

};
// One game of rock-paper-scissors between the player and the computer
// One game is 5 rounds
function playGame(){
    for(let i = 0; i < 5; i++){

    let playerSelection = prompt("Please enter Rock Paper or Scissors");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    console.log(playerScore);
    console.log(computerScore);

     };

 };


let playerScore = 0;
let computerScore = 0;

playGame();

if(playerScore > computerScore){
    console.log("You won the game!")
}
else if(playerScore < computerScore){
    console.log("You lost the game!")
}
else{
    console.log("It's a draw!")
};











