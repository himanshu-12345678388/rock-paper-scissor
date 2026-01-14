function getComputerChoice(){
    let a=Math.random();
    console.log(a);
    let b=a*100;
    console.log(b);
    if (b>=0 && b<=33){
        console.log("computer: rock");
        return "rock";
    }

    else if (b>=34 && b<=66){
        console.log("computer: paper");
        return "paper";
    }

    else if(b>=67 && b<=100){
        console.log("computer: scissor");
        return "scissor";
    }

    else{
        console.log("nothing");
    }

}

function getHumanChoice(){
    let player=prompt("enter you choice(rock,paper,scissor):");
    return player;
}


function playRound( humanChoice,computerChoice){


let player=humanChoice.toLowerCase();
let computer=computerChoice;
console.log("player: "+player);


let playr_score=0;
let comp_score=0;

if (player==="scissor" && computer==="rock"){
    comp_score++;
}

else if(player==="rock" && computer==="paper"){
    comp_score++;
}

else if(player==="paper" && computer==="scissor"){
    comp_score++;
}

else if (player==="paper" && computer==="rock"){
    playr_score++;
}

else if(player==="scissor" && computer==="paper"){
    playr_score++;
}

else if(player==="rock" && computer==="scissor"){
    playr_score++;
}

console.log(playr_score);
console.log(comp_score);

if(playr_score>comp_score){
    console.log("user wins");
}

else if(playr_score<comp_score){
    console.log("computer wins");
}

else{
    console.log("draw");
}

  
}
for (let i=0;i<5;i++){
let player1=getHumanChoice();
    let computer1=getComputerChoice();
    let human=playRound(player1,computer1);
}
    //let play=playGame();