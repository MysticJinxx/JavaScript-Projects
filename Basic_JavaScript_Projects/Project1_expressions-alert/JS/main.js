var A = " This is a string.";  //Assigning a string to variable A.
var B = ' My name is Joshua Dishong' + ' and' + ' I\'m a software developer.'; //Assigning 3 strings added together to variable B.
var Name = "Josh", Age = "30", Color = "Purple"; //Assigning multiple variables in one statement.
window.alert("Hello, World!") //Adding an alert box with a string.

window.alert("Hey you, " + A + "!"); //Adding an alert box to include a variable

//FUNCTIONs
function My_First_Function() {            //Defining a function and naming it.
    var str = "This is the button text!"; //Defining a variable and givig it a string value.

    document.getElementById("Button_Text")//Putting the value of the variable ino the HTML elementFromPoint
                                          //with the "Button=Text" id.
}

function myFunction() { 
    document.getElementById("demo").innerHTML = "You pressed a key inside the input field";
}




document.write("Hello, World!");

document.write(A);

document.write(B);

document.write(Color);

document.write(3 + 3); //Adding an expression