function myFunction() { //Naming and defining a function
    var str = "This is the button text!";//Defining a variable and giving it a string
    let carName = "Honda";//Defining carName and giving it a string
    let text = "Inside: " + " " + carName;//Defining text and concatenating a string and a variable.

    document.getElementById('demo').innerHTML = text;//Putting the value of the variable ino the HTML elementFromPoint
                                                    //with the "demo" id.

    document.getElementById('Button_Text');//Putting the value of the variable into the HTML elementFromPoint
                                           //with the "Button=Text" id.
}


function concatenateFunction() { //Naming and defining a function
    var sentence = 'I am learning'; //Defining a variable and giving it a string
    sentence += ' a lot from this book!'; //Concatenating a variable and a string
    
    document.getElementById('Concatenate').innerHTML = sentence;//Putting the value of the variable ino the HTML elementFromPoint
                                                                //with the "Concatenate" id.
}