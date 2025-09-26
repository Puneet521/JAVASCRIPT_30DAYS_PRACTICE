function shortestWord(sentence){
    let words = sentence.split(" ");
    let shortestWord = words[0]

    for (let word of words){
        if (word.length < shortestWord.length){
            shortestWord = word;
        }
    }

    return shortestWord;
}
console.log(shortestWord('hey its nice to connect with u'))