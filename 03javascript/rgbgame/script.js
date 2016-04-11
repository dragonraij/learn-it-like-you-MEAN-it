var colors = [
    "rgb(255, 0,0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0,0, 255)",
    "rgb(255, 0, 255)"
    ]
    
var pickedColor = colors[3];
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var currentColor = this.style.background;
        //compare color to picked Color
        if (currentColor=== pickedColor) {
            alert("correct");
        }
        else{
            alert("Wrong");
        }
        
    })
    
}