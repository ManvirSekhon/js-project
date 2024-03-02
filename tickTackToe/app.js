// Variables

let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset")
let win=document.querySelector(".win");
let turnO=true;
let btnClick=0;
let nGame=document.querySelector(".new");
let msgContainer=document.querySelector(".msgContainer");
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];






// Functions

function resetGame(){
    turnO=true;
    allEnable();
    msgContainer.classList.add("hide");
}

function checkWinner(){
    for(pattern of winningPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val!="" && pos3Val !=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner Player",pos1Val);
                displayWinner(pos1Val);
            }
        }
        if(btnClick==9){
            draw();
        }
    }
}

function draw(){
    win.innerText="NO one is the Winner!";
    msgContainer.classList.remove("hide");
}


function allDisable(){
    for(box of boxes){
        box.disabled=true;
    }
}

function allEnable(){
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


function displayWinner(winner){
    win.innerText=`Winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    allDisable();
}





// Main Logic


for(box of boxes){
    box.addEventListener("click",function(e){
        let box=this;
        // console.log(e.target);
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; 
        btnClick++;
        checkWinner();
    })
}

nGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);