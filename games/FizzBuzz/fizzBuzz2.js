//global variables

// Arrow key codes
	var fizzBuzz = 38; //Up
	var fizz = 37; //Left
	var buzz = 39; //Right

//Displayed number on the DOM
var currentFizzBuzzNumber = 0;
console.log(currentFizzBuzzNumber);

//FizzBuzz individual count
var fizzBuzzCount = 0;
var fizzCount = 0;
var buzzCount = 0;

//FizzBuzz Total count
var totalCount = 0;

//DOM variables
var currentNumber = document.getElementById("currentNumber");
currentNumber.innerHTML = currentFizzBuzzNumber;

var score = document.getElementById("scoreNumber");
score.innerHTML = totalCount;

//add keyEvent listener
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event) {
	switch (event.keyCode) {
		case fizzBuzz:
			if (currentFizzBuzzNumber % 3 === 0 && currentFizzBuzzNumber % 5 == 0) {
				fizzBuzzCount++;
				//console.log("FizzBuzzNumber " + fizzBuzzCount);

				totalCount+= 2;
				score.innerHTML = totalCount;
				//console.log(totalCount);
			}
			
			currentFizzBuzzNumber++;
			currentNumber.innerHTML = currentFizzBuzzNumber;
			//console.log("The current number is " + currentFizzBuzzNumber);
			break;

		case fizz:
			if (currentFizzBuzzNumber % 3 === 0) {
				fizzCount++;
				//console.log("FizzNumber " + fizzCount);
				
				totalCount++;
				score.innerHTML = totalCount;
				//console.log(totalCount);
			}
			
			currentFizzBuzzNumber++;
			currentNumber.innerHTML = currentFizzBuzzNumber;
			//console.log("The current number is " + currentFizzBuzzNumber);
			break;

		case buzz:
			if (currentFizzBuzzNumber % 5 === 0) {
				buzzCount++;
				//console.log("BuzzNumber " + buzzCount);

				totalCount++;
				score.innerHTML = totalCount;
				//console.log(totalCount);
			}

			currentFizzBuzzNumber++;
			currentNumber.innerHTML = currentFizzBuzzNumber;
			//console.log("The current number is " + currentFizzBuzzNumber);
			break;
	} 
}

