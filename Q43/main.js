var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames2 = ["Ayesha", "Iqra", "Shaima", "Shaista",];
//making a copy of an array
var magicianNamesCopy = __spreadArray([], magicianNames2, true);
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, magicianNamesCopy_1 = magicianNamesCopy; _i < magicianNamesCopy_1.length; _i++) {
        var item = magicianNamesCopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreetings;
}
;
var myGreetings = show_magicians("Hello");
var makeArray = myGreetings === null || myGreetings === void 0 ? void 0 : myGreetings.split("\n");
console.log(makeArray);
