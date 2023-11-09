const person = {
    firstName: "Gudivada",
    lastName: "Yagna Sree",
    age: 21
};

console.log(person.firstName);    // Output: Gudivada
console.log(person["lastName"]);  // Oytput: Yagna Sree

//Add a new Property
person.job = "Engineer";
console.log(person.job); // Output: Engineer
 
//Edit an existing property


//Access the property of Nested Object 
const person1 = {
    name:{
        first: "Gudivada",
        last: "Yagna Sree"
    },
    age:21
};
console.log(person.name.first); // Output: Gudivada