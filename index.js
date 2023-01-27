var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
//to start the game when a is pressed
var level = 0;
var gameStarted = false;

// function for the next button coming adds it to the game pattern as well
function nextSequence(){
    //had the longest time , figuring out that the reason, why it kept bugging out after it made a new game and losing instanlty
    // is because i didnt make a new user pattern after a new sequence was created
    //userPattern = []; i moved this to right after u press a and this function gets called to get rid of the bug that if the user pressed the buttons randomly
    //it resets the userPattern array

    level++;
    $('h1').text("Level " + level);
    
    var randomNum = Math.floor(4 * Math.random());
    var chosenColor = buttonColors[randomNum];
    gamePattern.push(chosenColor);


    var randomColorClass = "." + chosenColor;
    $(randomColorClass).fadeOut(100).fadeIn(100);


    playSound(chosenColor);
    

}


// function to play animation and play sound based on user click and add it to the array of user
$(".btn").click(function(){ 

    var userColor = $(this).attr("id");
    
    userPattern.push(userColor);
    

    playSound(userColor);
    animatePress(userColor);

    //uses .length because we want to target each of the objects inside the gamePattern Array along side the userPattern
    checkAnswer(userPattern.length - 1);
 });

// to play sound 
function playSound(name){
    var colorAudio = "sounds/" + name + ".mp3";
    var audioPlay = new Audio(colorAudio);
    audioPlay.play();
 }
//to animate press
function animatePress(currentColor){
    
    $('.' + currentColor).addClass("pressed");
    setTimeout(function() {
        $('.' + currentColor).removeClass("pressed");
    }, 100);
}

//to play the game

$(document).keypress(function(event){

    console.log(event.key);
    if( event.key === "a" && !gameStarted){

        userPattern = [];

        nextSequence();
        gameStarted = true;
    }
})

$('#level-title').click(function(){

    console.log();
    if( !gameStarted){

        userPattern = [];

        nextSequence();
        gameStarted = true;
    }
})



//checking answer of user vs current level user pattern

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userPattern[currentLevel]){
        console.log("success");
        

        if(gamePattern.length === userPattern.length){
            
            setTimeout(function() {
                nextSequence();
                
            }, 1000);
            userPattern = [];
        }
    }
    else{

        //for when user gets pattern wrong

        console.log("wrong");
        $('body').addClass("game-over");
        setTimeout(function() {
        $('body').removeClass("game-over");
        }, 200);
        $('h1').text("Game Over, Press Any Key or click me to Restart");


        
        startOver();
 




        
    }


}

function startOver(){
    level = 0;
    gamePattern = [];
    
    gameStarted = false;
    
    
}
