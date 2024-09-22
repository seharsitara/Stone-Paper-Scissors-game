let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userscore");
const comScorePara=document.querySelector("#compscore");
const resetBtn=document.querySelector("#button");





 const randomChoice=()=>{
         const options=["rock", "paper","scissor"];
          const randIndx= Math.floor(Math.random()*3);
          return options[randIndx];



 }

  const drawGame=()=>{
         console.log("game was draw.");
         msg.innerText="Game was draw!Please Try Again!";
         msg.style.backgroundColor="blue";
         }
  

  const showWinner=(userWin,userChoice,comChoice)=>{
         if(userWin){
            
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText=`you win!  your ${userChoice} beats ${comChoice} `;
            msg.style.backgroundColor="purple";
         }
         else{
            compScore++;
            comScorePara.innerText=compScore;
            msg.innerText=`you lose! ${comChoice} beats ${userChoice}`;
            msg.style.backgroundColor="red";
         }
  }








const playGame=(userChoice)=>{
     console.log("user choice=", userChoice);
     const comChoice=randomChoice();
     console.log("comChoice=",comChoice);

       if(userChoice===comChoice){
          drawGame();
       }

       else{
        let userWin=true;
        if(userChoice==="rock"){

            userWin=comChoice==="paper"?false:true;
           
        }
        else  if(userChoice==="paper"){
        
            userWin=comChoice==="scissor"?false:true;
         
        }
         else{
            
            userWin=comChoice==="rock"?false:true;
         
    
       }
       showWinner(userWin,userChoice,comChoice);
    }
};

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
});
