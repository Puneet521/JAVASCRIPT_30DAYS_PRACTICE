function removeDuplicates(str){
    let res = "";
    for (let ch of str){
        if(!res.includes(ch)){
            res += ch;
        }
    }
    return res;
}
console.log(removeDuplicates('heypuneet how are you'));