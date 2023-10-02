var randomNumber1 = Math.floor(Math.random() *6) +1; // number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice image 1- dice image 6

var randomImageSoure = "images/" + randomDiceImage;  //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSoure);



var randomNumber2 = Math.floor(Math.random() *6) +1; // number 1-6

var randomImageSoure2 = "images/dice" + randomNumber2 + ".png";  //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSoure2);


//if player 1 wins

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩✨Player 1 Wins..!!✨🚩"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩✨Player 2 Wins..!!✨🚩"
}
else {
    document.querySelector("h1").innerHTML = "🎊Oppss..Draw..!!🎊"
}

