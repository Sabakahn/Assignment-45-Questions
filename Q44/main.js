function mySandwiches() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    return "I want Sandwiche of ".concat(item);
}
;
var collection1 = mySandwiches("Ham", "Cheeze", "Lettuce");
var collection2 = mySandwiches("Turkey", "Swiss");
var collection3 = mySandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
