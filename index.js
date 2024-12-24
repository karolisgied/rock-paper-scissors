const announcementBoard = document.getElementById('annoucement-board');
const scoreboard = document.getElementById('scoreboard');
let humanScore = 0;
let computerScore = 0;
    
function getComputerChoice(){
    let rand = Math.ceil(Math.random()*3);
    if(rand == 1)return 'rock';
    if(rand == 2)return 'paper';
    if(rand == 3)return 'scissors';
}
    
function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice){
        console.log(humanChoice ,' ties ',computerChoice);
        announcementBoard.textContent = humanChoice +' ties '+computerChoice;
    }else if(humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log(humanChoice, ' beats ' , computerChoice);
        announcementBoard.textContent = humanChoice+' beats ' +computerChoice+'human wins round';
        humanScore++;
    }else if(humanChoice == 'paper' && computerChoice == 'rock'){
        console.log(humanChoice, ' beats ', computerChoice);
        announcementBoard.textContent = humanChoice+' beats '+computerChoice+'human wins round';
        humanScore++;
    }else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log(humanChoice, ' beats ', computerChoice);
        announcementBoard.textContent = humanChoice+' beats '+computerChoice+'human wins round';
        humanScore++;
    }else if(computerChoice == 'rock' && humanChoice == 'scissors'){
        console.log(computerChoice, ' beats ', humanChoice);
        announcementBoard.textContent = computerChoice+' beats '+humanChoice+'computer wins round';
        computerScore++;
    }else if(computerChoice == 'paper' && humanChoice == 'rock'){
        console.log(computerChoice, ' beats ', humanChoice);
        announcementBoard.textContent = computerChoice+' beats '+humanChoice+'computer wins round';
        computerScore++;
    }else if(computerChoice == 'scissors' && humanChoice == 'paper'){
        console.log(computerChoice, ' beats ', humanChoice);
        announcementBoard.textContent = computerChoice+' beats '+ humanChoice+'computer wins round';
        computerScore++;
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    scoreboard.textContent = humanScore+":"+computerScore;
    if(humanScore >= 5){
        console.log("Human wins game!");
        announcementBoard.textContent = "Human wins game!";
    }else if(computerScore >= 5){
        console.log('Computer wins game!');
        announcementBoard.textContent = 'Computer wins game!';
    }
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    scoreboard.textContent = humanScore+":"+computerScore;
    if(humanScore >= 5){
        console.log("Human wins game!");
        announcementBoard.textContent = "Human wins game!";
    }else if(computerScore >= 5){
        console.log('Computer wins game!');
        announcementBoard.textContent = 'Computer wins game!';
    }
    
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    scoreboard.textContent = humanScore+":"+computerScore;
    if(humanScore >= 5){
        console.log("Human wins game!");
        announcementBoard.textContent = "Human wins game!";
    }else if(computerScore >= 5){
        console.log('Computer wins game!');
        announcementBoard.textContent = 'Computer wins game!';
    }
});



