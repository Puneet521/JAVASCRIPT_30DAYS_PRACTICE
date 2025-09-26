// Without Built-in Method
function reverseString(str){
    let res = "";
    for (let i=str.length-1; i>=0; i--){
        res += str[i];
    }
    return res;
};
console.log(reverseString('Hello World'));

// With Built-in Method
function reverseString2(str){
    return str.split("").reverse().join("");
};
console.log(reverseString2("Hello World"))