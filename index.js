const buttonColors = ["green","red","blue","yellow"];
var iterationCheck = 0;
var gamePattern = [];
var userChosenColor = [];
var chosenColor = null;
var iterationColor = []
var gameRunning = false
var roundCounter = 0;


function nextSequence(){
    gamePattern=[];
    gameRunning = true;
    iterationCheck = 0
    userChosenColor = []
    iterationColor= []
    for (let i = 0; i < 10; i++){
        chosenColor = buttonColors[Math.floor(Math.random() * 4)];
        gamePattern.push(chosenColor);
    }
    FadeColor()
    NewLevel()
    iterationColor.push(gamePattern[iterationCheck])
    console.log(gamePattern);
};


function validationCheck(user){
    userChosenColor.push(user)
    roundCounter++
    console.log("selectedColors: " + userChosenColor + " length: " + userChosenColor.length)
    console.log("validationCheck: " + iterationCheck + " userChosenColor length: " + userChosenColor.length + " selectedColors: " + userChosenColor + " iterationColors: " + iterationColor );
    if (gameRunning && userChosenColor.length === (iterationCheck + 1) && JSON.stringify(userChosenColor) === JSON.stringify(iterationColor)){
        iterationCheck++;
        NewLevel()
        setTimeout(function(){
            nextRound(gamePattern[iterationCheck]);
        },500);
    }
    else if (user != iterationColor[roundCounter-1]){
        console.log("in elseIF " + "user: " + user + " color compare " + iterationColor[roundCounter])
        FailLevel()
    }
    
};

function nextRound(user){
    console.log("nextRound User: "+ user)
    iterationColor.push(gamePattern[iterationCheck])
    userChosenColor = []
    roundCounter = 0
    NewLevel()
    FadeColor()
};

function FadeColor(){
    $('#'+gamePattern[iterationCheck]).fadeOut().fadeIn()
};

function NewLevel(){
    $("#level-title").text("Level: " + (iterationCheck +1))
};

function FailLevel(){
    $("#game_audio_wrong")[0].play();
    $("#level-title").text("You lose, press any button to try again.");
};



$(document).keypress(nextSequence)




$("#green").click(function() {
    $("#game_audio_green")[0].play();
    $(this).fadeOut().fadeIn();
    if (gameRunning){
        setTimeout(function(){
            validationCheck("green");
        },1000);
    }

});

$("#blue").click(function() {
    $("#game_audio_blue")[0].play();
    $(this).fadeOut().fadeIn();
    if (gameRunning){
        setTimeout(function(){
            validationCheck("blue");
        },1000);
    }

});

$("#red").click(function() {
    $("#game_audio_red")[0].play();
    $(this).fadeOut().fadeIn();
    if (gameRunning){
        setTimeout(function(){
            validationCheck("red");
        },1000);
    }

});


$("#yellow").click(function() {
    $("#game_audio_yellow")[0].play();
    $(this).fadeOut().fadeIn();
    if (gameRunning){
        setTimeout(function(){
            validationCheck("yellow");
        },1000);
    }

});






