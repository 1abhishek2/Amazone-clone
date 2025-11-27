// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings=document.getElementsByClassName("heading");
// console.log(headings);

// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);


// let first=document.querySelector("p");
// console.log(first);


// let all=document.querySelectorAll("p");
// console.log(all);


// let h1=document.querySelector("h1");
// console.dir(h1.innerText);

// h1.innerText = h1.innerText + "from apna college";


// let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";

// let idx=1;
// for(div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }


// let x=document.querySelector("p");
// // console.log(x.getAttribute("class"));
// console.log(x.setAttribute("class","newClass"));

// let div=document.querySelector("div")
// div.style.backgroundColor="red";
// div.style.fontSize="20px";
// div.innerText="Hello";

// let newbtn=document.createElement("Button");
// newbtn.innerText="Click me";
// console.log(newbtn);

// let div=document.querySelector("div");
// div.append(newbtn);


// let btn1=document.querySelector("#btn1");

// btn1.oneclick=(evt)=> {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// let div=document.querySelector("div");
// div.onmouseover=(evt) => {
//     console.log("you are inside div");
// };


// let modeBtn= document.querySelector("#mode");
// let currMode = "light";

// modeBtn.addEventListener("click" , () =>{
//     if(currMode=== "light"){
//         currMode= "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode= "light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// });


// ######  TIC TOE GAME   #########

let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetBtn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];

const resetGame=()=> {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

    boxes.forEach((box) => {
        box.addEventListener("click",() => {
            console.log("box was clicked");

            if(turnO){
                box.innerText="0";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }

            box.Disabled=true;
            checkWinner();
        });
    });

    const disableBoxes=() => {
        for (let box of boxes){
            box.disable =true;
        }
    };

    const enableBoxes=() => {
        for (let box of boxes){
            box.disable =false;
            box.innerText="";

        }
    };


    const showWinner = ( winner ) =>{
        msg.innerText = `Congratulations , Winner is ${winner}` ;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }

    const checkWinner=() => {
        for ( let pattern of winPatterns) {
            let pos1val =boxes[pattern[0]].innerText;
             let pos2val =boxes[pattern[1]].innerText;
              let pos3val =boxes[pattern[2]].innerText;

              if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val===pos2val && pos2val===pos3val){
                 console.log("winner",pos1val);
                 showWinner(pos1val);

                }
              }

        }

    };

    newGameBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame)