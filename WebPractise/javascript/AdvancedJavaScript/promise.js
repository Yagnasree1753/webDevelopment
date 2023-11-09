// Let's suppose the program below is asynchronous program
// then the program cabn be habdled by using promise

const count = true;

let countValue = new Promise(function(resolve, reject){  //Background Thread
    if (count) {
        // Call api, call db, call file system
        resolve("I have completed all operations.");
    } else {
        reject("There is no count value");
    }
});
console.log(countValue);