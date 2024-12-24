

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function getComputerChoice(){
        let rand = Math.ceil(Math.random()*3);
        if(rand == 1)return 'rock';
        if(rand == 2)return 'paper';
        if(rand == 3)return 'scissors';
    }
    
    function getHumanChoice() {
        let choice = prompt('Enter 1 for rock, 2 for paper, 3 for scissors.');
        if(choice == 1)return 'rock';
        if(choice == 2)return 'paper';
        if(choice == 3)return 'scissors';
    }
    
    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice){
            console.log(humanChoice ,' ties ',computerChoice);
        }else if(humanChoice == 'rock' && computerChoice == 'scissors'){
            console.log(humanChoice, ' beats ' , computerChoice);
            humanScore++;
            console.log('human wins round');
        }else if(humanChoice == 'paper' && computerChoice == 'rock'){
            console.log(humanChoice, ' beats ', computerChoice);
            humanScore++;
            console.log('human wins round');
        }else if(humanChoice == 'scissors' && computerChoice == 'paper'){
            console.log(humanChoice, ' beats ', computerChoice);
            humanScore++;
            console.log('human wins round');
        }else if(computerChoice == 'rock' && humanChoice == 'scissors'){
            console.log(computerChoice, ' beats ', humanChoice);
            computerScore++;
            console.log('computer wins round');
        }else if(computerChoice == 'paper' && humanChoice == 'rock'){
            console.log(computerChoice, ' beats ', humanChoice);
            computerScore++;
            console.log('computer wins round');
        }else if(computerChoice == 'scissors' && humanChoice == 'paper'){
            console.log(computerChoice, ' beats ', humanChoice);
            computerScore++;
            console.log('computer wins round');
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore){
        console.log("Human wins game!");
    }else if(humanScore == computerScore){
        console.log("Game is tied");
    }else if(computerScore > humanScore){
        console.log('Computer wins game!');
    }
}

