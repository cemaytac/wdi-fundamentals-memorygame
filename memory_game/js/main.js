console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

var cardOne=[0]
var carTwo=[2]
cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");
console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) {
  alert("You found a match!");
} else {
	alert("Sorry, try again.")
}