class User{
    _name = "";
    constructor(name){
        this._name = name;
    }
    sayHi(){
        console.log(this._name)
    }
}
 
var user = new User("Yagna");
user.sayHi();



class Employee{
    printName = "";
    constructor(Name){
        this.printName = Name;
        console.log(this.printName)
    }
}
var user = new Employee("yagna");

