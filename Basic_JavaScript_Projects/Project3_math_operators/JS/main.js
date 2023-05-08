//addition
function addFunction() {
    var addition = 16 + 16;

    document.getElementById('Math').innerHTML = '16 + 16 = ' + addition;
}

//subtraction
function subFunction() {
    var subtraction = 16 - 4;

    document.getElementById('Subtract').innerHTML = '16 - 4 = ' + subtraction;
}

//multiplication
function multiplyFunction() {
    var multiplication = 16 * 4;

    document.getElementById('Multiply').innerHTML = '16 * 4 = ' + multiplication; 
}

//division
function divideFunction() {
    var division = 16 / 4;

    document.getElementById('Divide').innerHTML = '16 / 4 = ' + division;
}

//multiple operations
function moreMath() {
    var simpleMath = (5 + 5) * 10 / 2 - 2;
    
    document.getElementById('Multiple').innerHTML = '(5 + 5) * 10 / 2 - 2 = ' + simpleMath;
}

//modulus operator
//returns the remainder of 26 / 3
function modulusFunction() {
    var modulus = 26 % 3;

    document.getElementById('Modulus').innerHTML = '26 % 3 = ' + modulus;
}

//UNARY OPERATORS
//Negation operator
function negationFunction() {
    var x = 10;

    document.getElementById('Negation').innerHTML = -x;
}

//Increment operator
function increment() {
    var X = 10;
    X++;
    document.getElementById('Increment').innerHTML = X++;
}

//Decrement operator
function decrement() {
    var Y = 10;
    Y--;
    document.getElementById('Decrement').innerHTML = Y--;
}

//Math.random
function randomFunction() {
    document.getElementById('Random').innerHTML = (Math.random() * 100);
}

//Math Object - Allows one to perform mathematical tasks on numbers
//Ex. Math.PI; would return 3.141592653589793 or PI

//Math Method - syntax is Math.method(number)
//Ex. Math.round(x)

function objectFunction() {
    document.getElementById('mathObject').innerHTML = Math.round(4.5)   
}