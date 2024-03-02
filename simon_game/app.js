let gameSeq=[];
let userSeq=[];
let h3=document.querySelector("h3");
let started = false;
let randBtns=["red","blue","green","orange"];
let level = 0;
let maxLevel=0;

let allBtn=document.querySelectorAll(".btn");

let body=document.querySelector("body");

function btnPress(){
    let btn=this;
    btnFlash(btn);
    let randBtn=btn.getAttribute("id");
    userSeq.push(randBtn);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

for(btn of allBtn) {
    btn.addEventListener("click",btnPress);
}


document.addEventListener("keypress",function(e){
    if(started==false){
        console.log("Game started!!!!");
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function levelUp(){
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=randBtns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    userSeq=[];


    if(level>maxLevel){
        maxLevel=level;
    }
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        // maxLevel=level;
        // console.log("level is",maxLevel);
        h3.innerHTML=`Game Over! Your score is <b>${level}</b> <br> Highest Score=${maxLevel} <br> Press any key to restart...`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },100);
        // maxScore=0;
        // if(maxLevel>maxScore){
        //     maxScore=maxLevel;
        // }
        // console.log("max Score is ",maxScore)
        reset();
    }
}

// function setMaxLevel(){
//     maxLevel=
// }

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}
