let gameseq = [];
let userseq = [];

let btns = ['yellow','red','purple','green'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

let H1 = document.querySelector('.totalScore');
//let Btn = document.querySelector('button');
let highestScore = 0;

document.addEventListener('keypress',function(){
    if (started == false){
        started = true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove('flash');
    },250);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function (){
        btn.classList.remove('userFlash');
    },250);
}

function levelUp(){
    userseq = [];
    level++;
    
    if (level > highestScore) {
        highestScore = level;
    }

    h2.innerText = `Level ${level}`;
    //random btn falsh
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    gameFlash(randomBtn);

}

function checkAns (idx){
    

    if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp,1000);
    }
    }else{
        h2.innerHTML = `Game is over! <b>Your Score was ${level}<b> <br>Please press any key to Start.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },500);
        reset();
    }
}

function btnPress(){
    let btn = this
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    levelUp = 0;
}

console.log(highestScore);

H1.document.addEventListener('onClick',function(){
     console.log('highest score');
 });