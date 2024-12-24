let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let rand = Math.ceil(Math.random()*3);
    if(rand == 1)return 'rock';
    if(rand == 2)return 'paper';
    if(rand == 3)return 'scissors';
}

function getHumanChoice() {
    let choice = prompt('Enter 1 for scissors, 2 for rock, 3 for paper.');
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
    }else if(humanChoice == 'paper' && computerChoice == 'rock'){
        console.log(humanChoice, ' beats ', computerChoice);
        humanScore++;
    }else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log(humanChoice, ' beats ', computerChoice);
        humanScore++;
    }else if(computerChoice == 'rock' && humanChoice == 'scissors'){
        console.log(computerChoice, ' beats ', humanChoice);
        computerScore++;
    }else if(computerChoice == 'paper' && humanChoice == 'rock'){
        console.log(computerChoice, ' beats ', humanChoice);
        computerScore++;
    }else if(computerChoice == 'scissors' && humanChoice == 'paper'){
        console.log(computerChoice, ' beats ', humanChoice);
        computerScore++;
    }
}