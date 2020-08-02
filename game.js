localStorage.clear;
var nameCall = localStorage.getItem("Call");
document.getElementById("UserName").innerHTML = nameCall;


/game click sound/
function playClickSound() {
    var clicksound = document.getElementById("click");
    clicksound.play();
}

/game cheer sound/
function playCheerSound() {
    var cheerSound = document.getElementById("cheer");
    cheerSound.play();
}

/game buzzer sound/
function playBuzzerSound() {
    var buzzerSound = document.getElementById("buzzer");
    buzzerSound.play();
}
/get buttons/
var rockBtn = document.querySelector('#rock-Btn');
var paperBtn = document.querySelector('#paper-Btn');
var scissorsBtn = document.querySelector('#scissors-Btn');

/Add listener to buttons/
rockBtn.addEventListener('click', chooseRock);
paperBtn.addEventListener('click', choosePaper);
scissorsBtn.addEventListener('click', chooseScissors);

/user input functions/
function chooseRock() {
    playClickSound();
    playRound('rock', computerPlay());   
}
function choosePaper() {
    playClickSound();
    playRound('paper', computerPlay());    
}
function chooseScissors() {
    playClickSound();
    playRound('scissors', computerPlay());   
}

/get scoreline/
var userScoreDisplay =  document.querySelector('#userScore');
var computerScoreDisplay =  document.querySelector('#computerScore');
var resultDisplay  = document.querySelector('#result');

/scores/
var userScore = 0;
var computerScore = 0;

/function that randomly selects rock paper or scissors/
function computerPlay() {
    computerPick = ['rock', 'paper', 'scissors'];
    pick = computerPick [Math.floor(Math.random() * computerPick.length)];

    return pick;
}

/Main gameplay function/
function playRound(userSelection, computerSelection) {
   
    computerSelection = computerPlay()

    switch(true){
        case(userSelection == 'rock' && computerSelection == 'scissors'):
        case(userSelection == 'paper' && computerSelection == 'rock'):
        case(userSelection == 'scissors' && computerSelection == 'paper'):
        userWins(userSelection, computerSelection);
        break;

        case(computerSelection == "rock" && userSelection == "scissors"):
        case(computerSelection == "paper" && userSelection == "rock"):
        case(computerSelection == "scissors" && userSelection == "paper"):
        computerWins(userSelection, computerSelection);
        break;

        case (computerSelection == userSelection):
            tieGame(userSelection, computerSelection);
            break;
    }

    /add winner condition statement/ 
    if (computerScore == 5) {
        endGame('Computer reached 5 first! <br/> You lost bro :(');
        playBuzzerSound();
    }
    else if (userScore == 5) {
        playCheerSound();
        endGame('You win the game! :)');
    }
    
}

/Win-Tie Functions/
function userWins(userSelection, computerSelection) {
    userScore++;
    userScoreDisplay.textContent = userScore;
    resultDisplay.textContent = `You win! ${userSelection} beats ${computerSelection}`;
}
function computerWins(userSelection, computerSelection) {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = `You loose. ${computerSelection} beats ${userSelection}`;
}
function tieGame(userSelection, computerSelection) {
    resultDisplay.textContent = `It's a tie! ${userSelection} = ${computerSelection}`;
}
function endGame(text) {
    document.getElementById("gameTitle2").style.display = "none";

    var homeBtn = document.createElement("a");
    homeBtn.href = "index.html";
    homeBtn.className = "homeBtn";
    var homeBtnTxtNode = document.createTextNode("Home");
    homeBtn.appendChild(homeBtnTxtNode);

    var resultSheet = document.createElement("div");
    resultSheet.className = "gameTitle";
    resultSheet.innerHTML = `<div>${text}</div><br/><a href= "${window.location.href}">Wanna play again?</a>`;

    resultSheet.appendChild(homeBtn);
    document.body.appendChild(resultSheet);
}
