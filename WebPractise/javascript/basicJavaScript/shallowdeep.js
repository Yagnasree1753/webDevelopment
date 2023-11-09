//1. Shallow copy
const original = {a : 1, b : {c : 2}};
const copy = Object.assign({}, original);
copy.b.c = 3;
console.log(original.b.c);  // Output: 3 original is effected.

//2. Shallow Copy using Spread Operatoer
const original1 = {a : 1, b : {c : 2}};
const copy1 = { ...original1 };
copy1.b.c = 3;
console.log(original1.b.c); // Output: 3 original is effected.

//3. Deep Copy
const originalObj = {a : 1, b : {c : 2}};
const copy2 = JSON.parse(JSON.stringify(originalObj));
copy2.b.c = 3;
console.log(originalObj.b.c);  // Output: 2 original is not effected.
console.log(copy2.b.c);


