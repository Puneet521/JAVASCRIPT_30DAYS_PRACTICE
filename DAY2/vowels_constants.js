// To check Vowels
function checkVowels(str){
     let count =0;
     let vowels = "aeiouAEIOU";
     for (let ch of str){
        if(vowels.includes(ch)){
            count++
        }
     }
     return count;
};
console.log(checkVowels('Hello, World'));

// To check Constant
function checkConstants(str){
    let count =0;
    let vowels ='aeiouAEIOU';

    for (let ch of str){
        if(/[a-zA-Z]/.test(ch) && !vowels.includes(ch)){
         count++;
        }
    }
    return count;
}
console.log(checkConstants('Hello, World'));


// to check vowels & constant Together

function checkVowelsConstants(str){
    let vowelscount = 0;
    let constcount = 0
    let vowels = 'aeiouAEIOU';

    for (let ch of str){
      if (vowels.includes(ch)){
         vowelscount++
      } else if(/[a-zA-Z]/.test(ch) && !vowels.includes(ch)){
        constcount++
      }
    }
    return { vowels: vowelscount, consonants: constcount };
}
console.log(checkVowelsConstants("Hello, World"));

