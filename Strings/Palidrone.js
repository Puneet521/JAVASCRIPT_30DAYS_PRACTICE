function checkPalindrone(str){
    let res = "";
    for (let i=str.length-1; i>=0; i--){
        res += str[i];
    }
    return res == str ? 'paildrone' : 'Not-A-Palidrone';
}
console.log(checkPalindrone('Hey'));