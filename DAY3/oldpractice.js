// reverse a string with builtin
function reverseString1(str){
   return str.split("").reverse().join("");
}
console.log(reverseString1('hello'));

// reverse string without builtin method
function reverseString2(str){
    let res = "";
    for (let i=str.length-1; i>=0; i--){
        res += str[i];
    }
    return res;
}
console.log(reverseString2('hello'));

// check if a string is palidrone or not 
 function checkPalidrone(str){
    let res = "";
    for (let i=str.length-1; i>=0; i--){
        res += str[i];
    }
    return res === str ? 'palidrone' : 'Not-A-Palidrone'
}
console.log(checkPalidrone('madam'))

// count vowels in string 
function countVowels(str){
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let ch of str){
        if (vowels.includes(ch)){
            count ++
        }
    }
    return count;
};
console.log(countVowels('hello'));

// count constant in string
function countConstants(str){
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for(let ch of str){
        if(/[a-zA-z]/.test(ch) && !vowels.includes(ch)){
            count ++
        }
    }
    return count;
}
console.log(countConstants('hey how are you'));

// count both vowels & const in string
function countVowelsConstants(str){
    let vowels = 'aeiouAEIOU';
    let vowelcount = 0;
    let constcount = 0;
    for (let ch of str){
        if(/[a-zA-Z]/.test(ch) && vowels.includes(ch)){
            vowelcount++;
        } else if(/[a-zA-Z]/.test(ch) && !vowels.includes(ch)){
            constcount ++;
        }
    }
    return { 'vowel': vowelcount, 'constant': constcount }
}
console.log(countVowelsConstants('hello how are you!'));

// find the length of string without using .length
function stringLength(str){
    let count =0;
    for (let ch of str){
        count++;
    }
    return count;
}
console.log(stringLength('hello! HOW ARE you'));

// convert first letter to uppercase in sentence
function upperCase(sentence){
    let words = sentence.split(" ");

    for (let i=0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ")
}
console.log(upperCase('hey how are You'))