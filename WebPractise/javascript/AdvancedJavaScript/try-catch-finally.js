const numerator = 100, denominator = "a";
try{
    console.log(numerator/denominator);
    console.log(a);
}
catch(error){
    console.log("An error cought");
    console.log("Error Message: " + error);
}
finally{   //Finally block will always execute
    console.log("Finally will execute at every time");

}