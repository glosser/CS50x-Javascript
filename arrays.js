<!DOCTYPE JS>

Your Top Choices
var movies = ['Godfather', 'Star Wars', 'Pulp Fiction'];
var choices = ["My 1st choice", "My 2nd choice", "My 3rd choice"];
var x = [1,2,3];
console.log(movies);
console.log(choices);

The Word Guesser
var letters = ['D','O','G'];
var guessed = ['_', '_', '_'];
function WordGuesser(letter) {
	var good = false;
	var more = false;
	for (var i = 0; i < letters.length; i++){
	if (letters[i] == letter) {
	guessed[i] = letter;
	good = true;
	}
	if (guessed[i] == '_') {
	more = true;
	}
	}
	if (good) { 
	console.log('Correct')
	console.log(guessed.join(''));
	if (!more) {
	console.log('Great job!');
	}
	} else {
	console.log('Wrong!');
	}
}
WordGuesser('D');
WordGuesser('O');
WordGuesser('G');
