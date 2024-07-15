let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn= document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContainer =document.querySelector(".msg-container");

let person_O=true;
const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame =()=>{
    person_O=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
}

  let count=0;


 boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("Button was clicked");
        if(person_O){
            box.innerText="O";
            person_O=false;
        }else{
            box.innerText="X";
            person_O=true;
        }
        box.disabled=true;
        let iswinner = checkWinner();
        count++ ;
        if(count === 9 && ! iswinner)
           {
            matchDrow();
           }
    });
});

const matchDrow=()=>{
    msg.innerText=`** MATCH DROW **`;
    msgContainer.classList.remove("hide");
    disabledbtn();
};


const disabledbtn = ()=>{
    for(let box of boxes){
        box.disabled  = true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulation, ${winner} is the Winner`;
    msgContainer.classList.remove("hide");
    disabledbtn();
};


const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

if(pos1val !="" && pos2val !="" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
        // console.log("WINNER", pos1val);
        showWinner(pos1val);
        return true;
            }
        }
    }
};


resetbtn.addEventListener("click",resetGame);

newGamebtn.addEventListener("click",resetGame);