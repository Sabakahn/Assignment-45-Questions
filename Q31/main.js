var userNames2 = ["Ayesha", "Areeba", "Iqra", "Afshan"];
userNames2 = [];
if (userNames2.length > 0) {
    for (var i = 0; i < userNames2.length; i++)
        if (userNames2[i] == "Admin") {
            console.log("Hello ".concat(userNames2[i], "thank yuo for logging in again"));
        }
}
else {
    console.log("We need to find sonme users!");
}
