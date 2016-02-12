function fortuneteller() {
var children;
var partner;
var location;
var occupation;
var future = 'You will be a ' + occupation + ' in ' + location + 
', and married to ' + partner + ' '+ ' with ' + children + 'children.';
console.log(future);
}
fortuneteller();

function agecalculator() {
var curyear;
var birthyear;
var age = curyear - birthyear;
console.log('They are either ' + age + ' or ' + (age -1));
}
agecalculator();

function lifetimecalculator() {
var curage;
var maxage;
var dayamount;
var total = (dayamount * 365) * (maxage - curage);
var lifetime = 'You will need ' + total + ' to last you until the ripe old age of ' + maxage;
console.log(lifetime);
}
lifetimecalculator();

function geometrizer() {
var radius;
var circumference = 2 * 3.14159 * radius;
console.log('The circumference is ' + circumference);
var area = 3.14159 * radius * radius;
console.log('The area is ' + area);
}
geometrizer();

function temperatureconverter() {
var celsius;
var c2f=((celsius*9/5)+32);
console.log(celsius + '°C is ' + c2f + '°F'); 
var fahrenheit;
var f2c = ((fahrenheit-32*5)/9);
console.log(fahrenheit + '°F is ' + f2c + '°C');
}
temperatureconverter();

