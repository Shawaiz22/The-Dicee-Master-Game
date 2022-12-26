const audioPlay = new Audio('assets/audios/gameplay.mp3');
const diceRollSound = new Audio('assets/audios/diceRoll.mp3');
const startSound = new Audio('assets/audios/ludo-start.mp3');
const alertSound = new Audio('assets/audios/error.mp3');
const PlayerMoveSound = new Audio('assets/audios/player-move-sound.mp3');
const obstacleSound = new Audio('assets/audios/obstacleSound.mp3');
const assetSound = new Audio('assets/audios/assetSound.mp3');
const marioLose = new Audio('assets/audios/mario-lose.mp3');


// *** Playing initial sound effects *** \\
function playSound(){
    startSound.play();
}

window.onload=playSound();
    
// // start game logo 

window.onload= addStartAnim(removeStartAnim);

function addStartAnim(removeStartAnim){
setTimeout(()=>{
    document.querySelector(".startAndWinDiv").classList.remove("displayNone");
    removeStartAnim();
},1000)
}

// function for removing start animation
function removeStartAnim(){
setTimeout(()=>{
    document.querySelector(".startAndWinDiv").classList.add("displayNone");
},2000)
}


// ************ Getting user input for names of players and no of moves in the game *********\\

let player1=prompt("Enter your name : ");
let player2="Opponent"


if(player1==null || player1==""){
    player1="Player 1";
}

// starting alert
alert(`Good luck ${player1}, the one who first reaches the position = 100, wins the game!`);



let score1=0;
let score2=0;


//**************setting all the variable names here *******************\\


document.querySelector(".window1").innerHTML=`${player1}'s Window`;
document.querySelector(".window2").innerHTML=`${player2}'s Window`;

document.querySelector(".turn1").innerHTML=`${player1}'s Turn ⬇`;
document.querySelector(".turn2").innerHTML=`${player2}'s Turn ⬇`;

document.querySelector(".score1").innerHTML=`${player1}'s Position = ${score1}`;
document.querySelector(".score2").innerHTML=`${player2}'s Position = ${score2}`;


document.querySelector(".turn1").classList.remove("nonVisible");
document.getElementById("btnP1").classList.remove("nonVisible");

// ******************************************************************************* \\

// // =========================CREATING DIFFERENT RANDOM VALUES FOR ASSETS AND OBSTACLES================================================

var a1=Math.round(Math.random()*98)+1

while(a1===1){
    a1=Math.round(Math.random()*98)+1
}

var a2=Math.round(Math.random()*98)+1

while(a2===a1 || a2===1){
    a2=Math.round(Math.random()*98)+1
}

var a3=Math.round(Math.random()*98)+1

while(a3===a1 || a3===a2 || a3===1){
    a3=Math.round(Math.random()*98)+1
}

var a4=Math.round(Math.random()*98)+1

while(a4===a1 || a4===a2 || a4===a3 || a4===1){
    a4=Math.round(Math.random()*98)+1
}

var a5=Math.round(Math.random()*98)+1

while(a5===a1 || a5===a2 || a5===a3 || a5===a4 || a5===1){
    a5=Math.round(Math.random()*98)+1
}



// Assets

var b1=Math.round(Math.random()*98)+1

while(b1===1 || b1===a1 || b1===a2 || b1===a3 || b1===a4 || b1===a5){
    b1=Math.round(Math.random()*98)+1
}

var b2=Math.round(Math.random()*98)+1

while(b2===b1 || b2===1|| b2===a1 || b2===a2 || b2===a3 || b2===a4 || b2===a5){
    b2=Math.round(Math.random()*98)+1
}

var b3=Math.round(Math.random()*98)+1

while(b3===b1 || b3===b2 || b3===1|| b3===a1 || b3===a2 || b3===a3 || b3===a4 || b3===a5){
    b3=Math.round(Math.random()*98)+1
}

var b4=Math.round(Math.random()*98)+1

while(b4===b1 || b4===b2 || b4===b3 || b4===1|| b4===a1 || b4===a2 || b4===a3 || b4===a4 || b4===a5){
    b4=Math.round(Math.random()*98)+1
}

var b5=Math.round(Math.random()*98)+1

while(b5===b1 || b5===b2 || b5===a3 || b5===b4 || b5===1|| b5===a1 || b5===a2 || b5===a3 || b5===a4 || b5===a5){
    b5=Math.round(Math.random()*98)+1
}


var obst=[a1,a2,a3,a4,a5];
var obstacles = obst.sort((a,b)=>a-b);

var asts=[b1,b2,b3,b4,b5];
var assets=asts.sort((a,b)=>a-b);


// now setting them to assets in dom: 

// let obs = document.querySelector(".obstacles").innerHTML;
// obs=`OBSTACLES = [${obstacles[0]}, ${obstacles[1]}, ${obstacles[2]}, ${obstacles[3]}, ${obstacles[4]}]`;
document.querySelector(".obstacles").innerHTML=`OBSTACLES = [${obstacles[0]}, ${obstacles[1]}, ${obstacles[2]}, ${obstacles[3]}, ${obstacles[4]}]`;

// let ast = document.querySelector(".assets").innerHTML;
// ast=`ASSETS = [${assets[0]}, ${assets[1]}, ${assets[2]}, ${assets[3]}, ${assets[4]}]`;
document.querySelector(".assets").innerHTML=`ASSETS = [${assets[0]}, ${assets[1]}, ${assets[2]}, ${assets[3]}, ${assets[4]}]`;



// calling playerOne function on button click :



document.getElementById("btnP1").addEventListener("click",function(){

    if(document.querySelector(".turn1").classList[1]=="nonVisible"){
        alertSound.play();
    }
    else{
        
        // here we are passing player two as a call back function which will run after the completion of player one function 
        playerOne(playerTwo);
    }
});





 var newRandom1 = 0;
 var newRandom2 = 0;

function playerOne(playerTwo){

    diceRollSound.play();

    var random1 = Math.round(Math.random()*5)+1;
    var random2 = Math.round(Math.random()*5)+1;



    document.querySelector(".turn1").classList.add("nonVisible");
    document.querySelector(".turn2").classList.remove("nonVisible");
    

    let btnVisTimer = ((random1*1000)/2)+500;

    setTimeout(()=>{
    document.getElementById("btnP1").classList.add("nonVisible");
    document.getElementById("btnP2").classList.remove("nonVisible");
    },btnVisTimer);

    // animate
    diceeAnimate("dice1");


    document.getElementById("dice1").setAttribute("src","./assets/dice"+random1+".png");


    // moving positions

    
    let tempScr1 = score1+random1;


// creating a callback for this :- 

function playerMover1(astObsChecker1){
    let id = setInterval(()=>{

         if(score1>=100){
            score1=100;
            clearInterval(id);
            gameEnd(score1,score2);
           }

        if(score1!= tempScr1) {
            PlayerMoveSound.play();
            score1++;
       }

       else {
            astObsChecker1();
            clearInterval(id);
       }
       
        document.querySelector(".score1").innerHTML=`${player1}'s Position = ${score1}`;

        
    },500);
    
}


    // check if the user has stepped on any asset or obstacle


    function astObsChecker1(){
    for(let i=0;i<obstacles.length;i++){

    if(score1===obstacles[i]){

        // console.log("CALLING THE OBSTACLE METHOD")

        obstacleSound.play();
        score1=reachObstacle(score1, player1,1,i, goneObstacle);
        break;
    }
    
    }

    for(let i=0;i<assets.length;i++){
        if(score1===assets[i]){

        // console.log("CALLING THE ASSETS METHOD")

        assetSound.play();
        score1=reachAsset(score1, player1,1,i, goneObstacle);

        // if score becomes equal to 100, end the game!
        if(score1>=100){
            gameEnd(score1,score2);
        }

             break;
        }
        }

    }

    // calling that callback function : 
    playerMover1(astObsChecker1);

    newRandom1=random1;
    newRandom2=random2;

    var inTervalue1 = ((newRandom1*1000)/2)+500;
    playerTwo(inTervalue1);
}






// function for player 2 

function playerTwo(inTervalue){
    
    setTimeout(()=>{



        diceRollSound.play();

        document.querySelector(".turn1").classList.remove("nonVisible");
        document.querySelector(".turn2").classList.add("nonVisible");
        

        let btnVisTimer2 = ((newRandom2*1000)/2)+500;
    
        // enabling the dice roll button after an interval
        setTimeout(()=>{
    
            document.getElementById("btnP1").classList.remove("nonVisible");
            document.getElementById("btnP2").classList.add("nonVisible");
    
        },btnVisTimer2)
    
        // animate
        diceeAnimate("dice2");
    
    
        document.getElementById("dice2").setAttribute("src","./assets/dice"+newRandom2+".png");
    
    
    
    
        // moving positions
    
        let tempScr2 = score2+newRandom2;
        // score1+=random1;
    
        // creating a callback for this 
    
        function playerMover2(astObsChecker2){
        let id2 = setInterval(()=>{

             if(score2>=100){
                score2=100;
                clearInterval(id2);
                gameEnd(score1,score2);
               }

            if(score2!= tempScr2) {
                PlayerMoveSound.play();
                score2++;
           }
    
           else {
                astObsChecker2();
                clearInterval(id2);
           }
    
            document.querySelector(".score2").innerHTML=`${player2}'s Position = ${score2}`;
    
            
        },500);
        
    
        }
        // check if the user has stepped on any asset or obstacle
    
        function astObsChecker2(){

        //obstacle
        for(let i=0;i<obstacles.length;i++){
            // console.log("checking obs")
        if(score2===obstacles[i]){
    
        // console.log("CALLING THE OBSTACLE METHOD")  
        
        obstacleSound.play();
        score2=reachObstacle(score2, player2,2,i, goneObstacle);
            break;
        }
        }
    
        // asset
        for(let i=0;i<assets.length;i++){
            // console.log("checking assts")
            if(score2===assets[i]){
    
        // console.log("CALLING THE ASSETS METHOD")
    
        assetSound.play();
        score2=reachAsset(score2, player2,2,i, goneObstacle);

        // if score becomes equal to 100, end the game!
        if(score2>=100){
            gameEnd(score1,score2);
        }
                break;
            }
            }
        }
    
        // calling the callback function 
    
        playerMover2(astObsChecker2);
    
    
    
        if(score1>=100 || score2>=100){
    
            gameEnd(score1,score2);
    
    
        }


        

    },inTervalue)



    

}


// animation function 

function diceeAnimate(dice){

    
    document.getElementById(dice).classList.add("dicee-animate");
    
  
    setTimeout(function() {
    document.getElementById(dice).classList.remove("dicee-animate");
    }, 1000);
}



//game reset funcition 

function gameReset(){

    window.location.reload(true);
}


//obstacle functions

function reachObstacle(score, player,num,i1, goneObstacle){

    let j=i1+1;
    score-=j;

    setTimeout(()=>{


        document.querySelector(".score"+num).innerHTML=`${player}'s Position = ${score}`;
        document.querySelector(".score"+num).classList.add("scoreDown");

        document.querySelector(".winStatus").classList.remove("nonVisible");
        document.querySelector(".winStatus").innerHTML=`${player} stepped on an obstacle 🐍 at <br> index = ${j},`;

        document.querySelector(".scoreDefinerH").classList.remove("nonVisible");
        document.querySelector(".scoreDefiner").style.color="red";
        document.querySelector(".scoreDefiner").innerHTML=`{Score(-${j}) ⬇}`;
        console.log("i have reached the obstacle")

        goneObstacle(num);
        },500);

        
        return score;
}

function reachAsset(score, player,num,i2, goneObstacle){

    let j=i2+1;
    score+=j;
    


    setTimeout(()=>{


        document.querySelector(".score"+num).innerHTML=`${player}'s Position = ${score}`;
        document.querySelector(".score"+num).classList.add("scoreUp");

        document.querySelector(".winStatus").classList.remove("nonVisible");
        document.querySelector(".winStatus").innerHTML=`${player} stepped on an asset 💹 at <br> index = ${j},`;

        document.querySelector(".scoreDefinerH").classList.remove("nonVisible");
        document.querySelector(".scoreDefiner").style.color="green";
        document.querySelector(".scoreDefiner").innerHTML=`{Score(+${j}) ⬆}`;
        console.log("i have reached the asset")

        goneObstacle(num);
        },500);

        

        return score;

}

// after completing the obstacle or asset function 
function goneObstacle(scoreNum){

setTimeout(()=>{
    document.querySelector(".winStatus").classList.add("nonVisible");
    document.querySelector(".scoreDefinerH").classList.add("nonVisible");

    let cList1 = document.querySelector(".score"+scoreNum).classList[1];

    if(cList1=="scoreUp"){
        document.querySelector(".score"+scoreNum).classList.remove("scoreUp");
    }
    else{
        document.querySelector(".score"+scoreNum).classList.remove("scoreDown");
    }

    // console.log("i have passed the obstacle/asset")

},4000)
}


// game end 

function gameEnd(myScore1, myScore2){

    setTimeout(()=>{

        if(myScore1>=100){
            // alert(`Congratulations, ${player1} has won the Match!!! (${player1}'s score = ${score1}, ${player2}'s score = ${score2})`);
            audioPlay.play();
            document.querySelector(".startAndWin").style.fontSize="4rem";
            document.querySelector(".startAndWinDiv").classList.remove("displayNone");
            document.querySelector(".startAndWin").innerHTML=`Congratulations, You won the Match 🏆! <br> Press any key, or refresh to continue!`;
        }
        else if(myScore2>=100){
            // alert(`Congratulations, ${player2} has won the Match!!! (${player1}'s score = ${score1}, ${player2}'s score = ${score2})`);
            marioLose.play();
            document.querySelector(".startAndWin").style.fontSize="4rem";
            document.querySelector(".startAndWinDiv").classList.remove("displayNone");
            document.querySelector(".startAndWin").innerHTML=`OOPS, You lost the Match ☹! <br> Press any key, or refresh to continue!`;
        }

        
        document.addEventListener("keydown", (event) => {
            // handle keydown
            gameReset();
        });



    },400)


}


//  preventing refresh

if(score1<100 && score2<100){
    window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
}

// restarting game
document.querySelector(".restart").addEventListener("click",()=>{
    window.location.reload(true);
})



// Displaying How to play 

document.querySelector(".playGuide").addEventListener("click",()=>{
    
    document.querySelector(".startAndWinDiv").classList.remove("displayNone")
    document.querySelector(".startAndWin").classList.add("displayNone")
    document.querySelector(".howToPlay").classList.remove("displayNone")
    document.querySelector(".howToPlay").style.zIndex="2";

});


for(let i=0;i<=1;i++){

    document.querySelectorAll(".hpBackBtn")[i].addEventListener("click",()=>{
    
        document.querySelector(".startAndWinDiv").classList.add("displayNone");
        document.querySelector(".startAndWin").classList.remove("displayNone");
        document.querySelector(".howToPlay").classList.add("displayNone");    
    })

}