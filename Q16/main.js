//Creating a Guest List 
var guestList = ["Ayesha", "Areeba", "Iqra", "Afshan"];
//Making variable for those who cant come
var dontCome = guestList[0];
//print the name of guest who cant come 
console.log(dontCome, "Nai Ahh skti");
//Add or remove Guest
guestList.splice(0, 1, "Shaima");
//Message print for bigger table
console.log("Good News ! We have found a Bigger Table For Dinner");
//Adding a new guest at starting
guestList.unshift("Shumaila");
//Adding a new name at ending
guestList.push("Sidra");
//Add new guest at middle
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index
guestList.splice(middleIndex, 0, "Aliza");
console.log("Updated List of our Guests");
//Sending an invitation 
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me")); });
