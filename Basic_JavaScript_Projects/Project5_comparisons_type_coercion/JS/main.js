// ===
X = 10;
Y = 10;
document.write(X === Y);//this returns true

X = 10;
Y = 'ten';
document.write(X === Y);//this returns false

X = 10;
Y = '10';
document.write(X === Y);//this returns false

X = 10;
Y = 15;
document.write(X === Y);//this returns false


//Console
console.log(4 * 8);//Displays the answer to 4 * 8 in the console

console.log(10 < 2);//Displays false in the console, 10 is not less than 2


//Typeof
document.write(typeof 'Operator');//Displays the type of the element following the typeof operator

l//Concatenate
document.write(' 20' + 23);//Shows that a string and a number can be concatenated


//Booleans
document.write(10 > 2);//displays true, 10 is greater than 2

document.write(10 < 2);//displays false, 10 is not less than 2


//And/Or operators
document.write(5 == 5 && 10 > 2);//displays true, 5 is equal to 5 AND 10 is greater than 2

document.write(5 == 6 && 10 > 2);//displays false, 5 is not equal to 6, but 10 is greater than 2
                                 //AND needs both to be true to return true

document.write(5 == 5 || 10 < 2);//displays true, either 5 == 5 or 10 < 2 needs to be corred in OR
                                 //in this case, 5 is equal to 5 so its true
document.write(5 == 6 || 10 < 2);//displays false, neither 5 is equal to 6 OR 10 is less than 2


//Nan - Not a number
function nanFunction() {
    document.getElementById('NaN').innerHTML = 10 / 'five';
}

//displays true because the string 'five' is not a number
function isNaN_True_Function() {
    document.getElementById('isNanTrue').innerHTML = isNaN('five');
}    

//displays false because 5 is indeed a number
function isNaN_False_Function() {
    document.getElementById('isNanFalse').innerHTML = isNaN(5);
}

//dipslays infinity
function infinityFunction() {
    document.getElementById('Infinity').innerHTML = 1000E400;
}    

//diplays -infinity
function negInfinityFunction() {
    document.getElementById('-Infinity').innerHTML = -1000E400;
}

//Doube equal signs
function trueFunction() {
    document.getElementById('True').innerHTML = (10 + 10) == 20;
}//Returns true

function falseFunction() {
    document.getElementById('False').innerHTML = (10 - 10) == 20;
}//Returns False

//Not operator
function notFunction() {
    document.getElementById('Not').innerHTML = !(10 < 20);//false because 10 is NOT greater than 20
}

function notFunction2() {
    document.getElementById('Not2').innerHTML = !(10 > 20);//true because 10 is NOT NOT greater than 20
}