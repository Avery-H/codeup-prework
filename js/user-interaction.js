"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var name = prompt('What is your name!');
	while (name == '') {
		name = prompt('What is your name!');
	}
// TODO: Show an alert message that welcomes the user based on their input.
alert("Welcome " + name + "!");
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var truther = confirm('Click okay if you like Pizza!');
var liar;
if (truther == true) {
    liar = "Sweet me too!";
} else {
    liar = "Well, I'm not calling you a truther!";
}

alert(liar);