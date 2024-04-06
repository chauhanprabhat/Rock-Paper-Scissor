let userscore=0;
let compscore=0;

const imag=document.querySelectorAll(".image")
const msg=document.querySelector("#msg")

const userscoreid = document.querySelector("#user-score");
const compscoreid = document.querySelector("#comp-score");

const showwinner = (userwin) => {
  if(userwin){
    
    userscore++;
    userscoreid.innerText=userscore;
    msg.innerText = "you win!";
    msg.style.backgroundColor="green";
  }else{
    
    compscore++;
    compscoreid.innerText=compscore;
    msg.innerText = "you lose!";
    msg.style.backgroundColor="red";
  }
}

const drawgame=()=>{
  
  msg.innerText = "game is draw!";
  msg.style.backgroundColor="black";
}

const gencompchoice=()=>{
  let options=["rock","paper","scissor"];
  let random=Math.floor(Math.random()*3);
  return options[random];
}

const playgames=(imageid)=>{
    
    let compchoice=gencompchoice();
    

    if(imageid === compchoice){
      drawgame();
    }else{
      let userwin=true;
      if (imageid === "rock"){

        userwin = compchoice === "scissor" ? true : false;
      }
      else if(imageid === "scissor"){

        userwin = compchoice === "paper" ? true : false;
      }
      else{
           
        userwin = compchoice === "rock" ? true : false;

      }
      showwinner(userwin);
    }
}

imag.forEach((image) => {
      image.addEventListener("click", () => {
        let imageid=image.getAttribute("id")
        playgames(imageid)
      })
})
