var curren_users = ["Ayesha", "Areeba", "iqrA", "Afshan", "Sidra", "Aliza"];
var new_users = ["Shaima", "Shaista", "Iqra", "Saba", "sidra"];
new_users.forEach(function (new_users) {
    var new_usertoLower = new_users.toLowerCase();
    //We will use some() methode
    var userNameTaken = curren_users.some(function (curren_user) { return curren_user.
        toLowerCase() === new_usertoLower; });
    if (userNameTaken) {
        console.log("".concat(new_users, " needs to choose a new username because it's already taken);\n    }else{\n        console.log(").concat(new_users, " is the member added"));
        curren_users.push(new_users);
    }
});
console.log(curren_users);
