function withLogging(fn){   //Normal Function
    return function(...args){
        const result = fn(...args);
        console.log(`Function ${fn.name} returned ${result}`);
        return result;
    };

}  
const sum = (a,b) => a+b;  //Arrow Function
const loggedSum = withLogging(sum); //Normal Function is calling Arrow Function
loggedSum(4, 5);