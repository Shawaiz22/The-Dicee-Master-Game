
const audioPlay = new Audio('/assets/audios/gameplay.mp3');
const buttonSound= new Audio('/assets/audios/button-click.mp3');


document.onload=audioPlay.play();
window.onload=audioPlay.play();
document.onload=startPlay();
window.onload=startPlay();


// image change animation :- 


setInterval(()=>{
    
    let img = document.querySelector(".dp");
    let imgVal = document.querySelector(".dp").attributes[0].value;

    if(imgVal=="./assets/myDp.jpg"){
    
        img.setAttribute("src","./assets/myDp2.jpg")   
    }
    else{
            img.setAttribute("src","./assets/myDp.jpg")
        
    }
    // setTimeout(()=>{},1000);
},5500)



// click sounds 
let len1 = document.querySelectorAll("b").length;

for(let i=0;i<len1;i++){
    document.querySelectorAll("b")[i].addEventListener("click",function(){

        buttonSound.play();
    })
}

let len2 = document.querySelectorAll("button").length;

for(let i=0;i<len2;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        buttonSound.play();
    })
}

let len3 = document.querySelectorAll("a").length;

for(let i=0;i<len3;i++){
    document.querySelectorAll("a")[i].addEventListener("click",function(){

        buttonSound.play();
    })
}
// click sounds closed



// audio play  
function startPlay(){

    audioPlay.play();
    if(typeof audioPlay.loop=='boolean'){
        audioPlay.loop=true;
    }

    else{

    audioPlay.addEventListener('ended',function(){
        this.currentTime=0;
        this.play();
    },false);
}
}
// audio play closed 

//to mute the sound
document.querySelector(".muterBtn").addEventListener("click",function(){

    let docText = document.querySelector(".muterBtn").classList[1];
    let doc= document.querySelector(".muterBtn");

    if(docText==="mute"){
        doc.innerHTML="Tap to unmute 🔇";
        doc.classList.remove("mute");
        doc.classList.add("muted");
        audioPlay.pause();
    }
    else{
        doc.innerHTML="Tap to mute 🔉";
        doc.classList.remove("muted");
        doc.classList.add("mute");
        audioPlay.play();
    }
})
// muting the sound closed


//displaying choosing no of players

document.querySelector(".enterBtn").addEventListener("click",function(){

    document.querySelector(".enterBtn").classList.add("displayNone");
    document.querySelector(".hpBtn").classList.add("displayNone");
    document.querySelector(".aboutBtn").classList.add("displayNone");
    document.querySelector(".leftAside").classList.add("displayNone");
    document.querySelector(".feedPara").classList.add("displayNone");
    document.querySelector(".rightAside").classList.remove("displayNone");
    document.querySelector(".credits").style.marginTop="2.5rem";
});

//closed 



//going back
document.querySelector(".backBtn").addEventListener("click",function(){

    document.querySelector(".enterBtn").classList.remove("displayNone");
    document.querySelector(".hpBtn").classList.remove("displayNone");
    document.querySelector(".aboutBtn").classList.remove("displayNone");
    document.querySelector(".leftAside").classList.remove("displayNone");
    document.querySelector(".rightAside").classList.add("displayNone");
    document.querySelector(".feedPara").classList.remove("displayNone");
    document.querySelector(".credits").style.marginTop="0";
});
//closed



// displaying how to play:-
document.querySelector(".hpBtn").addEventListener("click",function(){

    document.querySelector(".hpBtn").classList.add("displayNone");
    document.querySelector(".enterBtn").classList.add("displayNone");
    document.querySelector(".aboutBtn").classList.add("displayNone");
    document.querySelector(".leftAside").classList.add("displayNone");
    document.querySelector(".howToPlay").classList.remove("displayNone");
    document.querySelector(".feedPara").classList.add("displayNone");
    document.querySelector(".credits").style.marginTop="0";
    document.querySelector(".headingImg").style.marginTop="0";
    document.querySelector(".credits").style.fontSize="1.2rem";
    document.querySelector(".topAside").style.marginTop="-3rem";
    
});
//closed

//going back
for(let i=0;i<=1;i++){
document.querySelectorAll(".hpBackBtn")[i].addEventListener("click",function(){

    document.querySelector(".enterBtn").classList.remove("displayNone");
    document.querySelector(".hpBtn").classList.remove("displayNone");
    document.querySelector(".aboutBtn").classList.remove("displayNone");
    document.querySelector(".leftAside").classList.remove("displayNone");
    document.querySelector(".howToPlay").classList.add("displayNone");
    document.querySelector(".feedPara").classList.remove("displayNone");
    // document.querySelector(".headingImg").style.marginTop="4rem";
    document.querySelector(".credits").style.fontSize="1.5rem";
    document.querySelector(".topAside").style.marginTop="0";
});
}
//closed



// displaying about:-
document.querySelector(".aboutBtn").addEventListener("click",function(){



    document.querySelector(".aboutBtn").classList.add("displayNone");
    document.querySelector(".hpBtn").classList.add("displayNone");
    document.querySelector(".enterBtn").classList.add("displayNone");
    document.querySelector(".leftAside").classList.add("displayNone");
    document.querySelector(".credits").classList.add("displayNone");
    document.querySelector(".aboutMe").classList.remove("displayNone");
    document.querySelector(".feedPara").classList.add("displayNone");
    document.querySelector(".credits").style.marginTop="0";
    document.querySelector(".headingImg").style.marginTop="0";
    document.querySelector(".credits").style.fontSize="1.2rem";
    document.querySelector(".topAside").style.marginTop="-3rem";
    
});
//closed

//going back
for(let i=0;i<=1;i++){
document.querySelectorAll(".aboutBackBtn")[i].addEventListener("click",function(){

    document.querySelector(".enterBtn").classList.remove("displayNone");
    document.querySelector(".hpBtn").classList.remove("displayNone");
    document.querySelector(".aboutBtn").classList.remove("displayNone");
    document.querySelector(".leftAside").classList.remove("displayNone");
    document.querySelector(".credits").classList.remove("displayNone");
    document.querySelector(".aboutMe").classList.add("displayNone");
    document.querySelector(".feedPara").classList.remove("displayNone");
    // document.querySelector(".headingImg").style.marginTop="4rem";
    document.querySelector(".credits").style.fontSize="1.5rem";
    document.querySelector(".topAside").style.marginTop="0";
});
//closed
}


// displaying Form:-
document.querySelector(".formSubmit").addEventListener("click",function(){

    document.querySelector(".aboutMe").classList.add("displayNone");
    document.querySelector(".hiddenForm").classList.remove("displayNone");
    document.querySelector(".credits").classList.remove("displayNone");
    document.querySelector(".muterBtn").classList.add("displayNone");
    
    document.querySelector(".headingImg").style.marginTop="4rem";
    document.querySelector(".credits").style.fontSize="1.5rem";
    document.querySelector(".topAside").style.marginTop="0";
    
});



document.querySelector(".feedPara").addEventListener("click",function(){

    document.querySelector(".aboutBtn").click();
    document.querySelector(".formSubmit").click();
    document.querySelector(".feedPara").classList.add("paraclicked");
    document.querySelector(".feedPara").classList.add("displayNone");

    
    if(document.querySelector(".feedPara").classList.contains("paraclicked")){
    document.querySelector(".formSubmitBackBtn").addEventListener("click",function(){
        // document.querySelector(".formSubmitBackBtn").click();
        document.querySelector(".aboutBackBtn").click();
        document.querySelector(".feedPara").classList.remove("paraclicked");
    })
    }
});
//closed

//going back
document.querySelector(".formSubmitBackBtn").addEventListener("click",function(){

    document.querySelector(".muterBtn").classList.remove("displayNone");
    document.querySelector(".aboutMe").classList.remove("displayNone");
    document.querySelector(".hiddenForm").classList.add("displayNone");
    document.querySelector(".credits").classList.add("displayNone");
    document.querySelector(".credits").style.marginTop="0";
    document.querySelector(".headingImg").style.marginTop="0";
    document.querySelector(".credits").style.fontSize="1.2rem";
    document.querySelector(".topAside").style.marginTop="-3rem";
    
});
//closed



document.querySelector(".check1").addEventListener("click",function(){

    document.querySelector(".check1").classList.toggle("selected");
    document.getElementById("player1").click();

    var temp = document.querySelector(".check2").classList[2];

    if(temp==="selected"){
        document.querySelector(".check2").classList.remove("selected");
        document.getElementById("player2").click();
    }
    
});





document.querySelectorAll(".checkBox")[1].addEventListener("click",function(){
    

    document.querySelector(".check2").classList.toggle("selected");
    document.getElementById("player2").click();

    var temp = document.querySelector(".check1").classList[2];

    if(temp==="selected"){
        document.querySelector(".check1").classList.remove("selected");
        document.getElementById("player1").click();
    }
});

document.getElementById("btnGame").addEventListener("click",function(){

    let player1 = document.querySelector(".check1").classList[2];
    let player2= document.querySelector(".check2").classList[2];

    let target = document.getElementById("btnGameLink");
    
    if(player1==="selected"){
        target.setAttribute("href","./dicee.html");
    }

    else if(player2==="selected"){
        target.setAttribute("href","./dicee2P.html");
    }

    else{
        alert("Please select gameplay type !!! ")
    }
})





