// there are two ways for creating an empty array
let arr = new Array();
let arr1 = [];

// Alomost all the time, the second syntax is used. We can supplu initial elements in the brackets:
let fruits = ["Apple", "banana", "Cherry"];

// we can get an element by its number in square brackets:
console.log(fruits[0]);  // Apple
console.log(fruits[1]);  // Banana
console.log(fruits[2]);  // Cherry 

// we can replace an element:
fruits[2] = "Pear"; // now ["Applie", "banana", "Pear"]

// Adding new element
fruits[3] = "Papaya"  // now ["Apple", "banana", "Pear", "papaya"]
console.log(fruits.length);
console.log(fruits);

// Extracts the last element of the array and returns itL:
let fruit1 = ["Mango", "banana", "Pear", "papaya"];

console.log(fruit1.pop()); // removes the last element
console.log(fruit1);  //["Mango", "banana", "Pear"]

console.log(fruit1.push("kiwi")); // adds element at last
console.log(fruit1);  //["Mango", "banana", "Pear", "kiwi"]

console.log(fruit1.shift()); // removes the first element
console.log(fruit1);  //["banana", "Pear", "papaya"]

console.log(fruit1.unshift("Apple")); //Adds to first element
console.log(fruit1);  //["Apple", "banana", "Pear", "kiwi"]


//loops
let arr2 = ["Pine", "Banana", "Pear"];

for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

// iterates over array elements
for(let fruit of arr2){
    console.log(fruit);
}