function longestWord(str){
    let words = str.split(" ");
    let MaxLengthWord = "";
    for (let word of words){
        if (word.length > MaxLengthWord.length){
            MaxLengthWord = word;
        }
    }
    return MaxLengthWord;
}
console.log(longestWord("Hey How are You!"));