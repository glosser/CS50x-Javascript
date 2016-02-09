<!DOCTYPE js>
function openWin() {
myWindow = window.open("http://www.espn.com", 'width=100, height=100');
myWindow.moveBy(-200, 200)
}

function moveWin(){
	myWindow.resizeTo(800, 800);
	mywindow.focus
}

function checkWin() {
    if (!myWindow) {
        document.getElementById("msg").innerHTML = "'myWindow' has never been opened!";
    } else {
          if (myWindow.closed) { 
              document.getElementById("msg").innerHTML = "closed";
          } else {
              document.getElementById("msg").innerHTML = "open";
          }
    } 
}

var x = document.getElementById("myTime");
setInterval(function(){ console.log(myTime); }, 5000);


var myWindow
document.getElementById("DrinkingAge").min = "21";
var age = prompt("What's your age?");
switch(age) {
    case DrinkingAge >= 21:
        myWindow = window.open("http://www.sierranevada.com/beer", 'width=100, height=100');
                break;
    case DrinkingAge < 21:
        myWindow = window.open("http://www.disney.com", 'width=100, height=100');
        break;
    }

var myWindow;
var r = confirm("Would you like to view the mobile version of this website?");
if (r == true) {
    myWindow = window.open("index-mobile.html", 'width=100, height=100');
} else {
    myWindow = window.open("index.html", 'width=100, height=100');
}    
