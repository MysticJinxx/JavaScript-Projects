//Switch
function animalFunction() {
    var animal_output;
    var animals = document.getElementById("Animal").value;
    var animal_string = " is the best animal";
    switch (animals) {
        case "Dog":
            animal_output = "Dog" + animal_string;
            break;
        case "Cat":
            animal_output = "Cat" + animal_string;
            break;
        case "Bat":
            animal_output = "Bat" + animal_string;
            break;
        case "Snake":
            animal_output = "Snake" + animal_string;
            break;
        case "Bird":
            animal_output = "Bird" + animal_string;
            break;
        case "Spider":
            animal_output = "Spider" + animal_string;
            break;
        case "Bear":
            animal_output = "Bear" + animal_string;
            break;
        default:
            animal_output = "Please enter an animal exactly as written in the above list.";
    }
    document.getElementById("Output").innerHTML = animal_output;
}

//getElementByClassName
//filling cavnas with a gradient
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

//Canvas
function canvasGradient() {
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    //create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(20, 10, 500, 225);
    document.getElementById("Canvas").innerHTML = ctx;
}

//Canvas2
function canvasCircle() {
    var x = document.getElementById("Canvas2");
    var context = x.getContext("2d");
    context.beginPath();
    context.arc(95, 50, 40, 0, 2 * Math.PI);
    context.stroke();
    document.getElementById("Canvas2").innerHTML = context;
}