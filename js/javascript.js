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

function playRound(playerSelection , computerSelection){
 
    if(playerSelection.toLowerCase() == computerSelection){
        return "Draw";
    }

    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "paper"){
            computeScore = computeScore + 1;
            return "you lose! Paper beats rock" ;
        }
            else{
                playerScore = playerScore + 1;
                return "you win! Rock beats paper"
        }
    }

    if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection == "scissors"){
            computeScore = computeScore + 1;
            return "you lose! Scissors beats paper";
        }
            else{
                playerScore = playerScore + 1;
                return "you win! Paper beats rock"
        }
    }

    if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "rock"){
            computeScore = computeScore + 1;
            return "you lose! Rock beats scissors";
        }
            else{
                playerScore = playerScore + 1;
                return "you win! Scissors beats paper"
        }
    }

}

function game(){
    for(let i = 0; i < 5; i++){

    let playerSelection = prompt("Please enter Rock Paper or Scissors");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    console.log(playerScore);
    console.log(computeScore);

     }

 }


let playerScore = 0;
let computeScore = 0;

game();

if(playerScore > computeScore){
    console.log("You won the game!")
}
else if(playerScore < computeScore){
    console.log("You lost the game!")
}
else{
    console.log("It's a draw!")
};











