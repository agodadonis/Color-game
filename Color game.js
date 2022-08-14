var numberOfSquares = 6
var colors = [];
var pickedColor;


  
  
  var squares = document.querySelectorAll(".square");
  var colorDisplay = document.getElementById("colorDisplay");
  var messageDisplay = document.getElementById("message");
  var h1 =  document.querySelector("h1");
  var resetButton = document.getElementById("reset");
  var modeButtons = document.querySelectorAll(".mode");



  initialize();

  function initialize(){
    setUpModeButtons();
    setUpSquares();
    reset();
}


resetButton.addEventListener("click", function() {
      reset();
      })

  
  function changeColor(color){
      // loop through the squares
      for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
      } 
    }  


  function pickColor(){
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandomColors(num){
    //make an array
    var arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
      // get random color and push into array
      arr.push(randomColor())
    }
    // return that array
    return arr;
  }  

  function randomColor(){
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }  

  function reset(){
     colors = generateRandomColors(numberOfSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to math picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    messageDisplay.textContent ="";
    // change color of the squares
    for (var i = 0; i < squares.length; i++) {
      if(colors[i]){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  } else{
    squares[i].style.display = "none";
  }
    }
    h1.style.backgroundColor = "steelblue";

  }
function setUpModeButtons(){
  // mode buttons event listeners
     for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      // if(this.textContent === "Easy"){
      //   numberOfSquares = 3;
      // } else {
      //   nu mberOfSquares = 6;
      // }
      reset();
      // figure out how many squares to show
      // pick new colors
      // pick new pickedColor
      // update page to reflect changes

    });
  }
//   var easyBtn = document.querySelector("#easyBtn");
//   var hardBtn = document.querySelector("#hardBtn");
// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numberOfSquares = 3
//   colors = generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }
//      else {
//       squares[i].style.display = "none";
//     }
//   }
// })
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numberOfSquares = 6
//    colors = generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//    squares[i].style.backgroundColor = colors[i];
//    squares[i].style.display = "block";
//   }

// })
}
 
function setUpSquares(){
  for (var i = 0; i < squares.length; i++) {
    // click listeners
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again!";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
    }

}
