var userChoice = prompt("Please choose rock, paper, or scissors");
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
compare(userChoice, computerChoice);

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
    if(choice1==="paper"){
      return "Scissors wins!";
    }
    else{
      return "Paper wins!";
      }
  }
}
