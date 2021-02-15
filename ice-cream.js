// Do not modify these first two lines
let iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...

let newIceCreamFlavours = iceCreamFlavours;
newIceCreamFlavours.push("root beer");

console.log(newIceCreamFlavours);

// Step 3: Log first flavour

console.log(iceCreamFlavours[0]);

// Step 4: Log last flavour

console.log(newIceCreamFlavours[newIceCreamFlavours.indexOf("root beer")]);

// Step 5: Log number of items in the array

console.log(newIceCreamFlavours.length);