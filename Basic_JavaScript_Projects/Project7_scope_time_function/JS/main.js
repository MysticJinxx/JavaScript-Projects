var X = 60;//Global Variable
function addNumbers_1() {
    var Z = 30//Local Variable
    console.log(2 - + X + Y + Z + "<br>");//<br> assures that the next fucntion will be written below this one.
}

function addNumbers_2() {
    var Y = 20
    document.write(X + Y);
}

addNumbers_1();
addNumbers_2();

//Get date
function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//If/Else statement
function scoreFunction() {
    Score = document.getElementById("Score").value;
    if (Score >= 1500) {
        announcer = "You are awesome!";
    }
    else {
        announcer = "You are bad!";
    }
    document.getElementById("If_Else").innerHTML = announcer;
}

//Else if
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    
    if (Time < 12 == Time > 0) {//if it is between midnight and noon
        Reply = "It is morning!";
    }
    else if (Time >= 12 == Time < 18) {//if time is between 12 noon and 6 pm
        Reply = "It is afternoon!"
    }
    else { //if time is after 6pm but before midnight
        Reply = "It is evening!"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}