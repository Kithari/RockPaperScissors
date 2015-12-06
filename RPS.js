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
  var computerChoice = compChoice();
  var winner = compare(userChoice, computerChoice);
  return ("Computer choice was: " + computerChoice + ". " + winner + "<br>");
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
    return "Game is a tie";
  }
  else if(choice1 === "rock"){
    if(choice2 === "paper"){
      return "Paper wins!";
    }
    else{
      return "Rock wins!";
    }
  }
  else if(choice1==="paper"){
    if(choice2==="rock"){
      return "Paper wins!";
    }
    else{
      return "Scissors wins!";
    }
  }
  else if(choice1==="scissors"){
    if(choice2==="paper"){
      return "Scissors wins!";
    }
    else{
      return "Rock wins!";
      }
  }
}
