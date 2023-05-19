/* 
Overview 

Create a JS file that uses classes to create an object representing a deck of cards. Then create a simple console version of the card game 'War'

Steps: 

1. Create a Deck class 

2. Create a method on the Deck class that dynamically generates each card object
example card object: {suit: "hearts", value: 2}

a card's value corresponds to the number/face card's rank

ace = 1
cards 2-10 = their number value 
jacks = 11 
queens = 12 
kings = 13 

3. card objects can be held inside an array 

4. create a method to select a random card object 

5. create a function that runs the random card method on each deck, and compares the values of the 2 random cards

6. console log both card objects, and a message declaring which one has the higher value

*/

//
class Deck {
	suits = ["spades", "clovers", "hearts", "diamonds"];
	values = [
		"ace",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"jack",
		"queen",
		"king",
	];

	generateRandomSuit() {
		return this.suits[Math.floor(Math.random() * (this.suits.length - 1))];
	}

	generateRandomValue() {
		return Math.floor(Math.random() * (this.values.length - 1));
	}

	generateCard() {
		let value = this.generateRandomValue();
		let suit = this.generateRandomSuit();
		console.log(`suit "${suit}" : value "${value}"`);
		return value;
	}
}

let deck1 = new Deck().generateCard();
let deck2 = new Deck().generateCard();

if (deck1 > deck2) {
	console.log(`Player 1 Wins!`);
} else if (deck1 === deck2) {
	console.log(`Draw!`);
} else {
	console.log(`Player 2 Wins!`);
}
