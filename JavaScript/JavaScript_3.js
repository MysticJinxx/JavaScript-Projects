function displayType(character) {
    let characterType = character.getAttribute("data-character");
    alert(character.innerHTML + " is a character in " + characterType);
}