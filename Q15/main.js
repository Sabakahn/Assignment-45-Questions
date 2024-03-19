var guestList = ["Ayesha", "Areeba", "Iqra", "Afshan"];
var dontCome = guestList[0];
console.log(dontCome, "nai Ahh skta");
guestList.splice(0, 1, "Shaista");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
