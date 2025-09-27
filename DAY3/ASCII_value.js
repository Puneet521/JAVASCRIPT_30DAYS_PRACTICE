// find the ascii value of each character in a string 

function countASCII(str){
    let  res = {};
    for (let ch of str){
        res[ch] = ch.charCodeAt(0)
    }
    return res;
}
console.log(countASCII('Helloe hiow are you'));

