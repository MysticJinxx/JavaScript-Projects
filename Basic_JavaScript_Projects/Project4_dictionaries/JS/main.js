//Dictionary
function myDictionary() {//Naming Dictionary
    var Animal = {       //Creating Key:Value pairs
        Species: 'Dog',
        Color: 'Black/White',
        Breed: 'Husky',
        Name: 'Jay',
        Age: '6',
        Mood: 'Crazy',
    };

    delete Animal.Name;//Deletes the value Name from Animal.Name
    document.getElementById('Dictionary').innerHTML = Animal.Name;
}