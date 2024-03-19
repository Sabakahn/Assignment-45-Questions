function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
;
//3 cities
var city1 = describe_city("Karachi");
var city2 = describe_city("Larkana");
var city3 = describe_city("Hyderabad");
var city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
