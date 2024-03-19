var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carDetails(manufacturer, modelName) {
    var addionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        addionalInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, Object.fromEntries(addionalInfo));
    return car;
}
;
var myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year, 2022']);
console.log(myCarDetails);
