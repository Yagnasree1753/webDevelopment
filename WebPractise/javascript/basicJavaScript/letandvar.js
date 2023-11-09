var x=1;     // var is public keyword cab be changed anywhere in the code
let y=1;     // let is private keyword and only changed inside block
const z=60;  // cant change anywhere either in the blok or outside the block

console.log(x);     //expected output: 1
console.log(y);     //expected output: 1
console.log(z);     //expected output: 60

if(true){
    var x=2;          
    console.log(x);   // expected output: 2
    let y=2;
    console.log(y);    //expected output: 2
}

console.log(x);     //expected output: 2
console.log(y);     //expected output: 1
console.log(z);     //expected output: 60
