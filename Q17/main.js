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
//Inform that only two can be invited for dinner
console.log("Unforunateiy, the new dinner the table wont arrive on time, so I can only invite two Guest to dinner with me");
//remove the guest until only two names remain 
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, "I cant invite you to dinner"));
}
console.log("Invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
