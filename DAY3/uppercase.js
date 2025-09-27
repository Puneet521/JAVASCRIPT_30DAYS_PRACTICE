// convert string to uppercase without using .upperCase();

// We can do this by using character codes (charCodeAt / String.fromCharCode).
// 👉 Logic:
// Lowercase letters (a–z) have char codes 97–122.
// Uppercase letters (A–Z) have char codes 65–90.
// To convert lowercase → uppercase, subtract 32 from its char code.
// Here’s the implementation:

function convertToUpperCase(str){
    let res = "" ;
   
     for (let ch of str){
        let code = ch.charCodeAt(0);

        if(code >=97 && code <=122){
            res += String.fromCharCode(code - 32);
        }else{
            res += ch;
        }
    }
    return res;
};

console.log(convertToUpperCase("hello! HOW are you?"));