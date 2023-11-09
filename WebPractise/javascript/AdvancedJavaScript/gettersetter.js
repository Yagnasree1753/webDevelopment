class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`; 
    }
    
    set fullName(name) {
        const parts = name.split(' ');// Jane Smith
        this.firstName = parts[0]; //Jane
        this.lastName = parts[1]; //Smith
    }
    
    }
    
const person = new Person('John', 'Doe');
console.log(person.fullName); // "John Doe" //I am calling Getter
person.fullName = 'Jane Smith'; // when the full name is on the LHS console.log(person. fullName); // "Jane Smith" Then I am calling Setter.
console.log(person.fullName); // "Jane Smith"