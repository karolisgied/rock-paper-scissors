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

