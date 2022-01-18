var die=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
dice1 = Math.floor(Math.random()*6);
dice2 = Math.floor(Math.random()*6);
document.getElementById("dice1").setAttribute("src",die[dice1]);
document.getElementById("dice2").setAttribute("src",die[dice2]);
if(dice1>dice2){
    document.querySelector("h1").innerText="⛳Player 1 won";
}
else if(dice1===dice2){
    document.querySelector("h1").innerText="It's a draw";
}
else{
    document.querySelector("h1").innerText="Player 2 won⛳";
}