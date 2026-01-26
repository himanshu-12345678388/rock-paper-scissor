function computerChoice(){
   let compChoice=Math.floor(Math.random()*10);
    if (compChoice>=0 &&compChoice<=3){
        return "rock";
    }
    else if (compChoice>3 && compChoice<=6){
        return "paper";
    }
    else if(compChoice>6 && compChoice<=9){
        return "scissor";    
    }
    else{
        return "invalid choice";
    }
}

function humanChoice(event){
    let userChoice;
    if (event.target===mybtn1){
        userChoice="rock";
    }
    else if(event.target===mybtn2){
        userChoice="paper";
    }
    else if(event.target===mybtn3){
        userChoice="scissor"
    }
    else{
        userChoice="invalid choice";
    }
     playRound(userChoice);
     
}



function playRound(userChoice){

    let C_Choice=computerChoice();
    let H_Choice=userChoice;
    let Result;

    
    

    if(C_Choice=== H_Choice){
        Result="draw";
    }

    else if(
        (H_Choice=== "rock" && C_Choice === "scissor") ||
        (H_Choice === "paper" && C_Choice === "rock") ||
        (H_Choice === "scissor" && C_Choice === "paper")
    ) {
        userScore++
        Result="user wins";
        
    }
    else{
        
        Result="computer wins";
        computerScore++;
    }
    
      
       playerChoice.textContent=`user:${H_Choice} | computer:${C_Choice}`;
       result.textContent=`result:${Result}`;
       score.textContent=`Score-- UserScore:${userScore}   ,   ComputerScore:${computerScore}`;
       if(userScore===5){
        winner.textContent=`User wins teh round!!`;
       }
       else if(computerScore===5){
        winner.textContent=`computer wins the round!!`;
       }
}

 


let userScore=0;
let computerScore=0;
let mybtn1=document.getElementById("btn1");
mybtn1.addEventListener("click",humanChoice);
let mybtn2=document.getElementById("btn2");
mybtn2.addEventListener("click",humanChoice);
let mybtn3=document.getElementById("btn3");
mybtn3.addEventListener("click",humanChoice);


let playerChoice=document.getElementById("choice");
let result=document.getElementById("result");
let score=document.getElementById("Score");
let winner=document.getElementById("winner");

