// convert string to lowercase without using .lowerCase();

// We can do this by using character codes (charCodeAt / String.fromCharCode).
// 👉 Logic:
// Lowercase letters (a–z) have char codes 97–122.
// Uppercase letters (A–Z) have char codes 65–90.
// To convert lowercase → uppercase, subtract 32 from its char code.
// Here’s the implementation:

function convertToLowerCase(str){
    let res = "";

    for (let ch of str){
        let code = ch.charCodeAt(0);

        if (code >=65 && code <=90){
            res += String.fromCharCode(code+32);
        }else{
            res+= ch;
        }
    }
    return res;
}
console.log(convertToLowerCase("Hey How are YOU!"));