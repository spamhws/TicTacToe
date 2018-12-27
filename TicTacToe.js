var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");


var body = document.querySelector("body");

var jtron = document.querySelector('.jumbotron')

var arr = [one, two, three, four, five, six, seven, eight, nine]

var op = 0.1;
var display = document.querySelector(".aboveBorder");
var displayText = '';

var turn = 1;
var totalTurn = 0;
var win = 0;

var j = 250
var u = 30

var audioOne = new Audio('Sounds/keystroke1.mp3');
var audioTwo = new Audio('Sounds/keystroke2.mp3');
var audioThree = new Audio('Sounds/keystroke3.mp3');
var s = 2;

audioOne.volume = 0.3;
audioTwo.volume = 0.3;
audioThree.volume = 0.3;

function changeMarker(){
  if ((turn===1) && (this.textContent == '') && (win == 0)){
    this.textContent = 'X';
    turn = 2;
    totalTurn += 1;
    setTimeout(function() {turnDisplay()}, 15);
  } else if ((this.textContent == '') && (win == 0)){
    this.textContent = 'O';
    turn = 1;
    totalTurn += 1;
    setTimeout(function() {turnDisplay()}, 15);
    }
    winCheck();
}

for (var i = 0; i < arr.length; i++) {
  arr[i].addEventListener('click', changeMarker)
}

function arrFulfill(text){
  var k = 0;
  var turnCheck = totalTurn;
  display.textContent = '';
  for (let i = 0; i < text.length; i++){
    setTimeout(function(){
      if (turnCheck == totalTurn){display.textContent += text[i];
        audioThree.currentTime = 0;
        audioTwo.currentTime = 0;
        audioOne.currentTime = 0;
        if (s == 1){
          audioOne.play();
        } else if (s == 2) {
          audioTwo.play();
        }else if (s == 3) {
          audioThree.play();
        }
        s = Math.floor(Math.random() *(4 - 1)) + 1;
      }}, k)
    k += ((Math.random()*j)+u);

      }
}

function winCheck(){
  for (var i = 0; i < 2; i++) {
    if (i == 0){
      var n = 'X'
    } else if (i == 1) {
      var n = 'O'
    }

    if ((one.textContent == n) && (two.textContent == n) && (three.textContent == n)){
      win = i+1
    } else if ((four.textContent == n) && (five.textContent == n) && (six.textContent == n)){
      win = i+1
    } else if ((seven.textContent == n) && (eight.textContent == n) && (nine.textContent == n)){
      win = i+1
    } else if ((one.textContent == n) && (four.textContent == n) && (seven.textContent == n)){
      win = i+1
    } else if ((two.textContent == n) && (five.textContent == n) && (eight.textContent == n)){
      win = i+1
    } else if ((three.textContent == n) && (six.textContent == n) && (nine.textContent == n)){
      win = i+1
    } else if ((one.textContent == n) && (five.textContent == n) && (nine.textContent == n)){
      win = i+1
    } else if ((three.textContent == n) && (five.textContent == n) && (seven.textContent == n)){
      win = i+1
    }
  }
}

function winTransparent(){
  setInterval(function(){
    body.style.backgroundColor = 'rgba(0, 255, 0, '+op+')';
    op += 0.02;
  }, 10)
}

// var timerId = setInterval(function () {
//   // console.log(totalTurn);
//   winCheck()
//   if (display.textContent === ''){
//     jtron.marginBottom = '100px';
//   } else {
//     jtron.marginBottom = 'auto';
//   }
// }, 1)

function turnDisplay(){
  if ((totalTurn < 9) && (win == 0) && (turn === 1)){
    displayText = 'Now is X\'s turn:'
    arrFulfill(displayText);
  } else if ((win == 0) && (totalTurn < 9)){
    displayText = 'Now is O\'s turn:'
    arrFulfill(displayText);
  } else if (win == 1){
    displayText = 'X won!'
    u = 100; j = 300;
    arrFulfill(displayText);
    winCheck()
    winTransparent()
  } else if (win == 2){
    displayText = 'O won!'
    u = 100; j = 300;
    arrFulfill(displayText);
    winCheck()
    winTransparent()
  } else if ((totalTurn == 9) && (win == 0)){
    displayText = 'Draw!'
    arrFulfill(displayText);
    winCheck()
  }
}

turnDisplay()
