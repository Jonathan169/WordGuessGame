//start / resetgame
let life=10;
function lives(){
    life = 10 - (wrongLetter.length - rightLetter.length);
    live.innerText=life;
    if(life===0){
        gamewon=false;
    }
    return life
}
let pointz=0;

var winAmount;
var arraypushed=false;
var gamewon;
function save(){
    sessionStorage.setItem("pointz", pointz);
}
function display(){
    pointz=sessionStorage.getItem("pointz");
    point.innerText=pointz;
}
function gamestat(){
    if(winAmount===rightLetter.length){
        gamewon=true;
        pointz++;
        point.innerText=pointz;
        info.innerText= "CONGRATS YOU WON!!!!";
    }
    if(gamewon===false){
        info.innerText="Better luck next time :C "
        console.log("sorry")
    }
};

        




let score= document.getElementById("score")
var live=document.getElementById("lives");
var point=document.getElementById("points");
var arraypushed=false;
var gamewon;

const easy=["mario","8-bit","yoshi","coins","quack"];
var ewords={mario:0,hangman:0,button:0,coins:0,wack:0,}

const medium=["oregon","castle","trails","insert"];
var mwords={wario:0,HangMan:0,link:0,InsertCoin:0};

const hard=["waluigi","token$","browser", "2cool4u"];
var hwords={walugi:0,cashmoney:0,pixels:0,bit:0};

var wordbox=[];

var easyB= document.getElementById("easy")
var mediumB= document.getElementById("medium")
var hardB= document.getElementById("hard")
var startB= document.getElementById("Restart")

let randomE= easy[Math.floor(Math.random()*easy.length)];
let randomM= medium[Math.floor(Math.random()*medium.length)];
let randomH= hard[Math.floor(Math.random()*hard.length)];

var line= document.getElementById("line");

//element.attributes.style=display:"none
//element.className=
var helements=[];

const putBox= function(item){
    var uline=document.createElement("td");
    var uline=document.createElement("td");
    uline.setAttribute("class", "underline");
    var lword= document.createElement("h1");
    helements.push(lword)
    lword.setAttribute("class", "wbw");
    var line= document.getElementById("line");
    lword.innerText= item;
    uline.appendChild(lword);
    line.appendChild(uline);
}

const createboxes= function(letter){
if(wordbox[0].length===4){
    for (let i=0;i <4;i++){
        putBox(wordbox[0][i]);
}
}
else if(wordbox[0].length===5){
    for (let i=0;i <5;i++){
        putBox(wordbox[0][i]);
}
}
else if(wordbox[0].length===6){
    for (let i=0;i <6;i++){
        putBox(wordbox[0][i]);
        
}
}
else if(wordbox[0].length===7){
    for (let i=0;i <7;i++){
        putBox(wordbox[0][i])
        
}
}
else{
    console.log("hi")
}

}





// dificulty buttons

let amount;

const epress= function (event){
    if(arraypushed===false){
    let randomE= easy[Math.floor(Math.random()*easy.length)];
   wordbox.unshift(randomE);
   arraypushed=true;
   winAmount=randomE.length;
   console.log(winAmount)
        display();
   createboxes();
   for (let i=0;i<helements.length;i++){
       helements[i].id=wordbox[0][i]
   }
    };
    live.innerText=life;
    point.innerText=pointz;
    console.log(wordbox)

}
const mpress= function (event){
    if(arraypushed===false){
    let randomM= medium[Math.floor(Math.random()*medium.length)];
     wordbox.unshift(randomM);
     winAmount=randomM.length;
     console.log(winAmount)
        display();
        arraypushed=true;
        createboxes();
        for (let i=0;i<helements.length;i++){
            helements[i].id=wordbox[0][i]
        }

         }
         live.innerText=life;
    point.innerText=pointz;
         console.log(`the current word is: ${wordbox}`)
}
const hpress= function (event){
    if(arraypushed===false){
        let randomH= hard[Math.floor(Math.random()*hard.length)];
        wordbox.unshift(randomH);
        arraypushed=true;
        winAmount=randomH.length;
        console.log(winAmount)
        lives=15;
        display();
        createboxes();
        for (let i=0;i<helements.length;i++){
            helements[i].id=wordbox[0][i]
        }
         }
         live.innerText=life;
    point.innerText=pointz;
         console.log(wordbox)
    
}
const spress= function (event){

save();
refreshPage();
}
function refreshPage(){
    window.location.reload();
}
easyB.onclick=epress;
mediumB.onclick=mpress;
hardB.onclick=hpress;
startB.onclick=spress;

var lbank= document.getElementById("letterbank")

var ary=[];
let td= document.getElementsByClassName("wletters");
for(let i=0;i< td.length;i++){
    ary.push(td[i])
}
const ids=ary.map(function(i){
    return i.getAttribute("id")
})


//letterbox
var clickedC=[];
var wrongLetter=[];
var rightLetter=[];

let val;
var wr;

var reply_click= function(item){
    clickedC.unshift(item);
    wr= ids.indexOf(item);
    val=ids.indexOf(item);
    checkW();
    checkC();
    lives();
    gamestat();
}

// const keypres=addEventListener("click", function(event){
//     clickedC.unshift(event.key);
// })
var shalf= document.getElementById("shalf")
shalf.addEventListener("click", function(event){
    clickedC.unshift(event.key);
    console.log("pp")
})
shalf.addEventListener("keyup", function(event){
    clickedC.unshift(event.key);
    console.log("pp")
})

const checkC= function(item){
    for(let i=0; i< wordbox[0].length;i++){
            if(clickedC[0]===wordbox[0][i]){
                helements[i].setAttribute("class","show");
                ary[val].setAttribute("class", "cword");
                rightLetter.push("a")
                // console.log(rightLetter.length)
             } 
}}
const checkW= function(item){
    for(let i=0; i< wordbox[0].length;i++){
            if(clickedC[0]!==wordbox[0][i]){
                ary[wr].setAttribute("class", "wrongl");            
             }
    }wrongLetter.push("a")
    // console.log(wrongLetter.length)  
}






