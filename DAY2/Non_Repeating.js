function firstNonRepeating(str){
    for (let ch of str){
        if(str.indexOf(ch) === str.lastIndexOf(ch)){
          return ch;
        }
    }
}
console.log(firstNonRepeating('hello'));

// to check all non-repeating character

function NonRepeatingCharacter(str){
    let res = "";
    for (let ch of str){
        if(str.indexOf(ch)===str.lastIndexOf(ch)){
           res += ch;
        }   
    };
    return res;
}
console.log(NonRepeatingCharacter('hello'));