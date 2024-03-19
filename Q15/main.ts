let guestList = ["Ayesha","Areeba","Iqra","Afshan"];

let dontCome = guestList[0];

console.log(dontCome, "nai Ahh skta");

guestList.splice(0,1, "Shaista");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me`));
