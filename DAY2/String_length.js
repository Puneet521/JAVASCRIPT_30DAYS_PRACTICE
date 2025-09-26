function stringLength(str){
    let count = 0
    for (let ch of str){
        count++
    }
    return count;
}
console.log(stringLength("Hello World!"))