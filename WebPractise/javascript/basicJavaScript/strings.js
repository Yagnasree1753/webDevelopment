const str1 = 'Hello, world!';      // Single quotes
const str2 = "Hello, world!";     // Double quotes
const str3 = `Hello, world!`;      // Backticks(template literals)

//2. Concatenating Strings

const greeting = 'Hello, ';
const FirstName = 'Yagna';
const message = greeting + FirstName; // 'Hello, Yagna'
console.log(message);

//3. Template Literals
const age = 21;
const text = `I am ${age} years old.`; //` I am 21 years old.` 
console.log(text);

//4. Accessing Characters
const str = 'Hello';
const char = str[0]; //'H'
console.log(char);

//5. String Length
const str123 = 'Hello, world!';
const length = str123.length; //13
console.log(length);

//6. String Methods
const hello = 'Hello, world!';
const lowerStr = hello.toLowerCase(); //  'hello, world!'
const upperStr = hello.toUpperCase(); //  'HELLO, WOrld!'
const slicedStr = hello.slice(0,5);   //  'Hello'
console.log(lowerStr);
console.log(upperStr);
console.log(slicedStr);

//7. Finding substrings
const hello123 = "Hello, world";
const index = hello123.indexOf("world");  //7
const includesWord = hello123.includes("Hello"); // true

//8.  Replacing substrings
const hey12 = "Hello woeld!";
const newStr = hey12.replace('world', ';everyone'); // 'Hello, everyone!'
console.log(newStr);

//9. Splitting Strings
const strcoll = `apple|banana|cherry`;
const fruits = strcoll.split('|');  //['apple', 'banana', 'cherry'] 
console.log(fruits);

//10. Template Literals with Expression
const a = 10;
const b = 20;
const sumText = `The sum of ${a} and ${b} is ${a + b}`; // Thew sum of 10 and 20 is 30.
console.log(sumText);