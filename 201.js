// 201. Advenced Control Flow
// condition ? answer1 : answer2    if문 간단히!


function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

console.log(answer);


// Switch

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "1 you encounter a monster";
            break;
        case "back":
            whatHappens = "2 you arrived home";
            break;
        case "right":
            whatHappens = "3 you found a river";
            break;
        case "left":
            whatHappens = "4 you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand());
console.log(moveCommand("back"));
console.log(moveCommand("right"));
console.log(moveCommand("left"));
console.log(moveCommand("forward"));