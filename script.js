let yourChoice;
let cpChoice;
let yourScore = document.querySelector(".yourScore");
let computerScore = document.querySelector(".computerScore");
let x = 0;
let turnAudio = new Audio("ting.mp3");
let msz = document.querySelector(".mszBox")
const randomNumber  = ()=>{
    x =  Number((Math.random() * 3).toFixed(0));
}

const cp = ()=>{
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;

}

const you = ()=>{
    yourScore.innerHTML = Number(yourScore.innerHTML) + 1;

}

const choice = ()=>{
    if(x===1){
        cpChoice = "rock";
    }
    else if(x===2){
        cpChoice = "scissor";
    }
    else if(x===3){
        cpChoice = "paper";
    }
    
    console.log(cpChoice);
}


let scissor = document.querySelector(".scissor");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");

scissor.addEventListener('click',()=>{
    turnAudio.play();
    yourChoice= "scissor";
    randomNumber();
    choice();

    if(yourChoice === cpChoice){
        msz.innerHTML = 'Computer Choice is also '+ cpChoice +' : Tie'
    }

    if(cpChoice === "rock"){
        msz.innerHTML = 'Computer Choice is '+ cpChoice +' : You lose'
        cp();
    }

    if(cpChoice === "paper"){
        msz.innerHTML = 'Computer Choice is '+ cpChoice +' : You lose'
        you();
    }
    
})


paper.addEventListener('click',()=>{
    turnAudio.play();
    yourChoice= "paper";
    randomNumber();
    choice();

    if(yourChoice === cpChoice){
        msz.innerHTML = 'Computer Choice is also '+ cpChoice +' : Tie'
    }

    if(cpChoice === "scissor"){
        msz.innerHTML = 'Computer Choice is '+ cpChoice +' : You lose'
        cp();
    }

    if(cpChoice === "rock"){
        msz.innerHTML = 'Computer Choice is '+ cpChoice +' : You lose'
        you();
    }
    
})


rock.addEventListener('click',()=>{
    turnAudio.play();
    yourChoice= "rock";
    randomNumber();
    choice();

    if(yourChoice === cpChoice){
        msz.innerHTML = 'Computer Choice is also '+ cpChoice +' : Tie'
    }

    if(cpChoice === "paper"){
        msz.innerHTML = 'Computer Choice is '+ cpChoice +' : You lose'
        cp();
    }

    if(cpChoice === "scissor"){
        msz.innerHTML = 'Computer Choice is '+ cpChoice +' : You lose'
        you();
    }
    
})

