function rideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Age check
function ageFunction() {
    var Age, Can_vote;
    Age = document.getElementById('Age').value;//Takes the value from the Age id in HTML and assigns it to the variable Age
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";//checks the value of age to 18, if greater than 18 output is old enough, if not its not old enough
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}

//Constructors
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " +
        Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Species, Age, Skin, Color) {
    this.Animal_Species = Species;
    this.Animal_Age = Age;
    this.Animal_Skin = Skin;
    this.Animal_Color = Color;
}

var Jay = new Animal("Dog", 6, "Fur", "Black and White");
var Jake = new Animal("Snake", 8, "Scales", "Green");
var Carl = new Animal("Llama", 12, "Wool", "Tan");

function newThis_Function() {
    document.getElementById("New_and_This").innerHTML = "Jay is a " + Jay.Animal_Species + " with " +
        Jay.Animal_Color + Jay.Animal_Skin + " who is " + Jay.Animal_Age + " years old.";
}

//Nested Functions
function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 0;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}