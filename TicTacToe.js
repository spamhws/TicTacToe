var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");

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

one.addEventListener('click', function(){
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
})

two.addEventListener('click', function(){
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
})

three.addEventListener('click', function(){
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
})

four.addEventListener('click', function(){
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
})

five.addEventListener('click', function(){
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
})

six.addEventListener('click', function(){
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
})

seven.addEventListener('click', function(){
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
})

eight.addEventListener('click', function(){
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
})

nine.addEventListener('click', function(){
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
})


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
  console.log(win);
  if ((one.textContent == 'X') && (two.textContent == 'X') && (three.textContent == 'X')){
    win = 1
  } else if ((four.textContent == 'X') && (five.textContent == 'X') && (six.textContent == 'X')){
    win = 1
  } else if ((seven.textContent == 'X') && (eight.textContent == 'X') && (nine.textContent == 'X')){
    win = 1
  } else if ((one.textContent == 'X') && (four.textContent == 'X') && (seven.textContent == 'X')){
    win = 1
  } else if ((two.textContent == 'X') && (five.textContent == 'X') && (eight.textContent == 'X')){
    win = 1
  } else if ((three.textContent == 'X') && (six.textContent == 'X') && (nine.textContent == 'X')){
    win = 1
  } else if ((one.textContent == 'X') && (five.textContent == 'X') && (nine.textContent == 'X')){
    win = 1
  } else if ((three.textContent == 'X') && (five.textContent == 'X') && (seven.textContent == 'X')){
    win = 1
  }

  if ((one.textContent == 'O') && (two.textContent == 'O') && (three.textContent == 'O')){
    win = 2
  } else if ((four.textContent == 'O') && (five.textContent == 'O') && (six.textContent == 'O')){
    win = 2
  } else if ((seven.textContent == 'O') && (eight.textContent == 'O') && (nine.textContent == 'O')){
    win = 2
  } else if ((one.textContent == 'O') && (four.textContent == 'O') && (seven.textContent == 'O')){
    win = 2
  } else if ((two.textContent == 'O') && (five.textContent == 'O') && (eight.textContent == 'O')){
    win = 2
  } else if ((three.textContent == 'X') && (six.textContent == 'O') && (nine.textContent == 'O')){
    win = 2
  } else if ((one.textContent == 'O') && (five.textContent == 'O') && (nine.textContent == 'O')){
    win = 2
  } else if ((three.textContent == 'O') && (five.textContent == 'O') && (seven.textContent == 'O')){
    win = 2
  }
}

var timerId = setInterval(function () {
  winCheck()
}, 1)

function turnDisplay(){
  if ((totalTurn < 9) && (win == 0) && (turn === 1)){
    displayText = 'Now is X\'s turn:'
    arrFulfill(displayText);
  } else if (win == 0){
    displayText = 'Now is O\'s turn:'
    arrFulfill(displayText);
  } else if ((totalTurn >= 9) && (win = 0)){
    displayText = 'Draw!'
    arrFulfill(displayText);
  } else if (win == 1){
    displayText = 'X won!'
    u = 100; j = 300;
    arrFulfill(displayText);
    clearTimeout(timerId);
  } else if (win == 2){
    displayText = 'O won!'
    u = 100; j = 300;
    arrFulfill(displayText);
    clearTimeout(timerId);
  }
}

turnDisplay()
