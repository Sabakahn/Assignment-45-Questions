var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] == 1) {
        console.log("".concat(myNumbers[i], "st"));
    }
    else if (myNumbers[i] == 2) {
        console.log("".concat(myNumbers[2], "nd"));
    }
    else if (myNumbers[i] == 3) {
        console.log("".concat(myNumbers[3], "rd"));
    }
    else if (myNumbers[i] >= 4 || myNumbers[i] <= 9) {
        console.log("".concat(myNumbers[i], "th"));
    }
}
