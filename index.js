document.querySelector("h1").addEventListener("click", dice_play);

function dice_play(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1.toString() +".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2.toString() +".png");

    if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
    }
    else if (randomNumber2 < randomNumber1){
        document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Equality!"
    }
}

