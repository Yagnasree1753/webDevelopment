let arr = [];
function wordconverter(){
    arr.push();
}
wordconverter();
console.log(arr);



function WordConverter(words) {
    return words.map(word => word.length);
    }
    
    // Example array of words
    const arrayOfWords = ["hello", "world"];
    
    const wordLengths = WordConverter(arrayOfWords);
    console.log(wordLengths); // Output: [5, 5]