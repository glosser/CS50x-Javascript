ORTUNE TELLER

function tellFortune (occupation, location, partner, children) {

var future = 'You will be a ' + occupation + ' in ' + location + 
', and married to ' + partner + ' '+ ' with ' + children + 'children.';

console.log(future);
}
tellFortune('banker', 'Miami', 'Louise', '5');
tellFortune ('doctor', 'New York', 'Ann', '2');
tellFortune ('Mailman', 'Milwaukee', 'Tina', '0');



AGE CALCULATOR

function calculateAge (curyear, birthyear) {

var age = curyear - birthyear;

console.log('You are either ' + age + ' or ' + (age -1));
}
calculateAge(1989, 2016);
calculateAge(1979, 2016);
calculateAge(1969, 2016);

LIFETIME SUPPLY CALCULATOR

function calculateSupply (curage, maxage, dayamount) {

var total = (dayamount * 365) * (maxage - curage);

var lifetime = 'You will need ' + total + ' to last you until the ripe old age of ' + maxage;

console.log(lifetime);

}

calculateSupply(20, 100, 300);
calculateSupply(35, 100, 520);
calculateSupply(13, 100, 12083239892338);


GEOMETRIZER
function calcCircumference (radius) {
var circumference = 2 * 3.14159 * radius;
console.log('The circumference is ' + circumference);
}

function calcArea (radius) {
var area = 3.14159 * radius * radius;
console.log('The area is ' + area);
}

TEMPERATURE CONVERTER

function celsiusToFahrenheit (celsius) {
var c2f = ((celsius  * 9) / 5) + 32);
console.log(celsius + '°C is ' + c2f + '°F');
} 

function fahrenheitToCelsius (fahrenheit) {
var f2c = ((fahrenheit - 32) * 5) / 9);
console.log(fahrenheit + '°F is ' + f2c + '°C');
}
