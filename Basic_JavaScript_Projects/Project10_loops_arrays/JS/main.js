function Call_Loop() {
    let text = "";
    let i = 0;
    while (i < 10) {//the loop
        text += "<br>The number of dogs is: " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

//Length property
function lengthProperty() {
    let text = "Hello, World!"
    let length = text.length;

    document.getElementById("length").innerHTML = length;
}

//For loop
let Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
let Content = "";
let Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array
function arrayFunction() {
    let Instrument = [];
    Instrument[0] = "Guitar";
    Instrument[1] = "Drums";
    Instrument[2] = "Piano";
    Instrument[3] = "Bass";
    Instrument[4] = "Violin";
    Instrument[5] = "Trumpet";
    Instrument[6] = "Flute";
    
    document.getElementById("Array").innerHTML = Instrument[0] + " is the best instrument!";
} 

//Constant (const)
function constantFunction() {
    const Animal = { type: "Mammal", species: "Dog", name: "Jay" };
    Animal.name = "Oddie";
    Animal.color = "White";

    document.getElementById("Constant").innerHTML = Animal.name;
    document.getElementById("Constant").innerHTML = Animal.name + " has " + Animal.color + " fur.";
}

//let
function letFunction() {
    let X = 100;
    document.getElementById("Let").innerHTML = X;
    {
        let X = 200;
        document.getElementById("Let").innerHTML = X;
    }
    document.getElementById("Let").innerHTML = X;
}//writes 100 becuase let blocks in the other variable.

//Return Statement - stops the execution of a function and returns a value.
let demo = returnFunction(4, 3);

function returnFunction(a, b) {
    
    return a * b;
}
document.getElementById("Return").innerHTML = demo;

//Objects
let Vehicle = {
    type: "Plane ",
    model: "P-51 Mustang ",
    year: "1941 ",
    color: "red ",
    description: function () {
        return "The " + Vehicle.type + " is a " + Vehicle.color + Vehicle.model +
            " built in " + Vehicle.year;
    }
};
document.getElementById("Objects").innerHTML = Vehicle.description();

//Break statement - can be used to jump out of a loop
function breakStatement() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }//this will make the program stop at 2
        text += "The number is " + i + "<br>";
        document.getElementById("Break").innerHTML = text;
    }
}

//Continue statement -  breaks one iteration (in the loop), if a specified condition occurs,
//and continues with the next iteration in the loop.
function continueStatement() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }//this will have the program skip writing 3
        text += "The number is " + i + "<br>";
        document.getElementById("Continue").innerHTML = text;
    }
}