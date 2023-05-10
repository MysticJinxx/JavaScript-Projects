//Slice
function sliceFunction() {
    var Sentence = "My dog Jay is the best.";
    var Section = Sentence.slice(7, 10); //slices index 7-10 and stores it in the Section variable.
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase
function upperFunction() {
    let text = document.getElementById("Upper").innerHTML;//takes the text from the "Upper" id's paragraph
                                                          //and turns it into the variable text
    document.getElementById("Upper").innerHTML = text.toUpperCase();
    //Takes the variable text and changes it to uppercase then displays it on screen 
}

//Search Method
function searchFunction() {
    let text = document.getElementById("Search").innerHTML;
    let posistion = text.search(/Jay/)//takes the text variable and searches it for the string "Jay"
                                      //stores it in variable posistion
    document.getElementById("Search").innerHTML = posistion;//prints the posistion variable to the webpage.
}

//toString Method
function number_to_string() {
    let num = 400;//stores 400 in varialbe num
    let text = num.toString();//takes num variable and converts it to a string, stores in var text
    document.getElementById("toString").innerHTML = text;
}

//Precision Method
function precisionFunction() {
    let num = 491029501119129.992424;
    document.getElementById("Precision").innerHTML = num.toPrecision(8);
    //Displays the number to 8 positions.
}

//Fixed Method
function fixedFunction() {
    let num = 10.3685462;
    document.getElementById('Fixed').innerHTML = num.toFixed(2);
    //fixes the number to the amount of indexes you specify, in this case, It will round the the tenths place.
}

//Valueof Method
function valueFunction() {
    let text = "My dog Jay is the best!";
    let result = text;
    document.getElementById("Valueof").innerHTML = result;
    }