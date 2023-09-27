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

function rockPaperScissorsGame(playerSelection , computerSelection){

    
    
    if(playerSelection.toLowerCase() == computerSelection){
        return "Draw";
    }

    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "paper"){
            return "you lose! Paper beats rock";
        }
            else{
                return "you win! Rock beats paper"
        }
    }

    if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection == "scissors"){
            return "you lose! Scissors beats paper";
        }
            else{
                return "you win! Paper beats rock"
        }
    }

    if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "rock"){
            return "you lose! Rock beats scissors";
        }
            else{
                return "you win! Scissors beats paper"
        }
    }

    

}


const playerSelection = prompt("Please enter Rock Paper or Scissors");
const computerSelection = getComputerChoice();
console.log(rockPaperScissorsGame(playerSelection , computerSelection));




