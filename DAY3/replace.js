// replace all spaces in a string with -

// 1. using split join
function replaceSpaces(str){
    return str.split(" ").join("_");
}
console.log(replaceSpaces('hey hoiw are youi!'));

// 2. regex method
function replaceRegexMethod(str){
    return str.replace(/ /g, "_");
}
console.log(replaceRegexMethod('hey hoiw are youi!'));

// 3. using loop method 
// Replaces space " " with _
// Replaces newline \n with _
// Replaces tab \t with _

function replace(str){
    let res = "";

    for (let ch of str){
        if (ch===" " || ch=== '\n' || ch==='\t'){
            res += '_';
        }else{
            res +=ch;
        }
    }
    return res;
}
console.log(replace('hey hoiw are youi!'));