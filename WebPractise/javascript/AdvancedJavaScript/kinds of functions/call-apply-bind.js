var car = {
    registrationNumber: "FT1234",
    brand: "Benz",
    
    
    displayDetails : function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}
car.displayDetails();  //FT1234 Benz

// But what if we want to borrow a method?
// var myCarDetails = car.displayDetails();
// myCarDetails();

//Well, this not work as "this" is now assigned to the global context which deosnt have neigher the registration

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();


var car = {
    registrationNumber: "FT1234",
    brand: "Benz",
    
    
    displayDetails : function(ownerName){
        console.log(ownerName + ", this is your car:" + this.registrationNumber + " " + this.brand);
    }
}
// Passing Arguments with bind
var myCarDetails = car.displayDetails.bind(car , "Yagna");
myCarDetails();









// call() and apply() methods
// There is a car object without displayDetails Function, which is at global context.

var car = {
    registrationNumber: "FT1234",
    brand: "Benz",
}    
    
function displayDetails(ownerName){
    console.log(ownerName + ", this is your car:" + this.registrationNumber + " " + this.brand);
}
// with apply() method 
displayDetails.apply(car , ["Yagna"]);
// with call() method
displayDetails.call(car, "Yagna");





