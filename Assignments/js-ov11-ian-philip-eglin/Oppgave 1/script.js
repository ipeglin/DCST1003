// Declaring array
let v = [1, 2, 3];

// Incrementing each element in the array by two
let doubleIncremented = v.map((element) => element + 2);
console.log(doubleIncremented);

// Multiplying every element in the array by two
let doubledElement = v.map((element) => element * 2);
console.log(doubledElement);

// Summing up all the elements in the array
let sumOfElements = v.reduce((accu, element) => accu + element, 0);
console.log(sumOfElements);

// Calculating the main of all elements in the array
let meanOfElements = (v.reduce((accu, element) => accu + element, 0) / v.length);
console.log(meanOfElements);

// Appending all elements to new array, but as strings
let elementsAsStrings = v.map((element) => "" + element + "");
console.log(elementsAsStrings);

// Appending strings containing index of original array and it's respective value
let arrayAsString = v.map((element) => "v[" + v.indexOf(element) + "] = " + element);
console.log(arrayAsString);