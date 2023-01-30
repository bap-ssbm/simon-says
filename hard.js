var buttonColors = ["red", "blue", "green", "yellow","cyan","white","black","orange","purple"];
function nextSequence(){
   

    level++;
    $('h1').text("Level " + level);
    
    var randomNum = Math.floor(9 * Math.random());
    var chosenColor = buttonColors[randomNum];
    gamePattern.push(chosenColor);


    var randomColorClass = "." + chosenColor;
    $(randomColorClass).fadeOut(100).fadeIn(100);

    if(soundSet){
        playSound(chosenColor);
    }
    

    

}