const arr = ["Job", "Mary", "ABDULLAH", "Sharma", 56, 32, 45];


const res = [];
arr.forEach(arr => {
if (typeof (arr) !== "number") {
    res.push(arr.length)
    }
});
console.log(res);