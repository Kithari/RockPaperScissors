var stats = {
  playerWins:0,
  playerLosses:0,
  gameTies:0,
  rockWins:0,
  paperWins:0,
  scissorsWins:0,
  totalGames:0,
}
var rockElement = document.querySelector('#rock');
var rockClickHandler = function (event) {
  changeText(playAiVsHuman("rock"));
};
rockElement.addEventListener('click', rockClickHandler);

var paperElement = document.querySelector('#paper');
var paperClickHandler = function (event) {
  changeText(playAiVsHuman("paper"));
};
paperElement.addEventListener('click', paperClickHandler)

var scissorsElement = document.querySelector('#scissors');
var scissorsClickHandler = function (event) {
  changeText(playAiVsHuman("scissors"));
};
scissorsElement.addEventListener('click', scissorsClickHandler)

//Adds the result to the webpage below the choices available.
function changeText(result){
	document.getElementById('gameresults').innerHTML += result;
}

function playAiVsHuman(userChoice){
  var whoWon = "";
  var computerChoice = compChoice();
  var winner = compare(userChoice, computerChoice);
  if(winner === 1){
    stats.playerWins+=1;
    if(userChoice==="rock"){
      stats.rockWins+=1;
    }
    else if(userChoice==="paper"){
      stats.paperWins+=1;
    }
    else{
      stats.scissorsWins+=1;
    }
    whoWon = "Player wins with choice of: " + userChoice;
  }
  else if(winner===2){
    stats.playerLosses+=1;
    if(computerChoice==="rock"){
      stats.rockWins+=1;
    }
    else if(computerChoice==="paper"){
      stats.paperWins+=1;
    }
    else{
      stats.scissorsWins+=1;
    }
    whoWon="Computer wins with choice of " + computerChoice;
  }
  else{
    stats.gameTies +=1;
    whoWon = "Game is a tie."
  }
  stats.totalGames+=1;
  return (whoWon + ". Rock has won: "+ stats.rockWins + ". Paper has won: "+ stats.paperWins +". Scissors has won: "
              + stats.scissorsWins + ". Player has won: " + stats.playerWins + ". Player has lost: " + stats.playerLosses +
                  ". Number of ties: " + stats.gameTies + "<br>");
}

function compChoice(){
  var computerChoice = Math.random();
  if((computerChoice >=0) && (computerChoice<0.33)){
    computerChoice = "rock";
  }
  else if((computerChoice >0.33) && (computerChoice<0.67)){
    computerChoice = "scissors";
  }
  else {
    computerChoice = "paper"
  }
  return computerChoice;
}

function compare (choice1, choice2){
  if(choice1 === choice2){
    //3 is being returned as an integer form of "tie" for later use
    return 3;
  }
  else if(choice1 === "rock"){
    if(choice2 === "paper"){
      //2 is being returned as an integer form of "Player Loss" for later use
      return 2;
    }
    else{
      //1 is being returned as an integer form "Player Win" for later use
      return 1;
    }
  }
  else if(choice1==="paper"){
    if(choice2==="rock"){
      return 1;
    }
    else{
      return 2;
    }
  }
  else if(choice1==="scissors"){
    if(choice2==="paper"){
      return 1;
    }
    else{
      return 2;
      }
  }
}
