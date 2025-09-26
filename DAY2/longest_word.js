function longestWord(sentence){
    let words = sentence.split(" ");
    let maxlengthword = "";

     for (let word of words){
        if(words.length > maxlengthword.length){
            maxlengthword = word;
        }
     }
     return maxlengthword;
}
console.log(longestWord("hey its nice to connect with u"));