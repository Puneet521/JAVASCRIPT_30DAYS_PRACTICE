function firstRepeatingCharacter(str){
    let seen = new Set();

    for (let ch of str){
        if (seen.has(ch)){
            return ch;
        }
        seen.add(ch);
       }
       return null
}
console.log(firstRepeatingCharacter('hello'));

// All Repeating Character in String
function allRepeatingCharacter(str){
    let seen = new Set();
    let repeating = new Set();

    for (let ch of str){
        if (seen.has(ch)){
            repeating.add(ch);
        }else{
            seen.add(ch);
        }
    }
    return [...repeating].join("");
}
console.log(allRepeatingCharacter('hello'))