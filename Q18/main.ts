//Making aArray of Countries & print its Original Order
let countriesToVisit: string[] = ["China","Demark","Brazil","Argentina"];
console.log("Orginal Order:", countriesToVisit);

//print the Array in Alphertical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//show that the array is still in its original order
console.log("Still in Original Order:", countriesToVisit);

//print the array is still in its original order
console.log("Reverse Order:", [...countriesToVisit].reverse());

//Show that array is still in its original order 
console.log("Still in Original Order:", countriesToVisit);

//we have changed the Original Array Order now 
console.log("Original Array Reverse:", countriesToVisit.reverse());

//print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

//print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());

//we have changed the Original Array Order now  in reverse order again
console.log("Original Array Reversed again:", countriesToVisit.reverse());