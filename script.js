let boxes = document.querySelectorAll(".btn");
let restartBtn = document.querySelector("#Restart");
let newGameBtn=document.querySelector("#newGameBtn");
let msgBox=document.querySelector(".msgBox");
let msg=document.querySelector("#winner");

let TurnOf_O = true;

const winningTeam = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let noWinner=0;

boxes.forEach((button) => {
    button.addEventListener("click", () => {
        if (TurnOf_O === true) {
            button.innerText = "X";
            TurnOf_O = false;
        }
        else {
            button.innerText = "O";
            TurnOf_O = true;
        }
        button.disabled = true;
        noWinner++;    
        
        checkWinner();
    }
    )
});


const resetgame=()=>{
    TurnOf_O=true;
    enable();
    msgBox.classList.add("HIDE");
    noWinner=0;
}

const dissable= ()=>{
    for(box of boxes){
    box.disabled=true;
    }
}
const enable= ()=>{
    for(box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}


const winner=(pos0Val)=>
{
    msg.innerText=`Congratulation ,Winner is ${pos0Val}`;
    msgBox.classList.remove("HIDE");
    dissable();
}


const checkWinner = () => {
    for (let idx of winningTeam){
    //console.log(idx[0], idx[1], idx[2]);
    // console.log(box[idx[0]].innerText, box[idx[1]].innerText, box[idx[2]].innerText);
    let pos0Val=boxes[idx[0]].innerText;
    let pos1Val=boxes[idx[1]].innerText;
    let pos2Val=boxes[idx[2]].innerText;

    if(pos0Val!="" && pos1Val!="" && pos2Val!=""){
        if(pos0Val==pos1Val && pos1Val==pos2Val){
            winner(pos0Val); 
            noWinner=0;          
        }
          if(noWinner===9){
            msg.innerText="Match is Draw";
            msgBox.classList.remove("HIDE");
          }
    }
}
};

restartBtn.addEventListener("click",resetgame);
newGameBtn.addEventListener("click",resetgame);