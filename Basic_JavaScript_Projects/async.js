function myFunction() {
    let part1 = "I have ";
    let part2 = "made this a ";
    let part3 = "complete sentence!";
    let wholeSentence = part1.concat(part2, part3);
    
    document.getElementById("p1").innerHTML = wholeSentence;
}