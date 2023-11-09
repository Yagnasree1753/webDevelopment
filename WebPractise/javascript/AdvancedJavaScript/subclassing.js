class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}
var ani = new Animal("Dog");
ani.speak()



