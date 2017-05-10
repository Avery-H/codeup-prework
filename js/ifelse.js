"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'violet'; // TODO: change this to your favorite color from the list
var message;
// TODO: Create a block of if/else statements to check for every color except indigo and violet.
if ( color == 'red')
{
	console.log("Red, the last color my mortal enemies");
}
else if(color == 'orange')
{
	console.log('Oranges are great for cleaning your digestive system!');
}
else if( color == 'yellow')
{
	console.log("Sometimes its hard for the human eyes to pick up bright colors such as yellow");
}
else if( color == 'green')
{
	console.log("The U.S. Currency has brought a great significance to the color green");
}
else if( color == 'blue')
{
	console.log("Blue eyes are the prettiest in my opinion");
}
else ( color == 'indigo','violet')
{
	console.log("I do not know anything by that color.");
}

color = ('violet') ? "Violets actually my favorite color" : "Not my favorite color tho";
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
