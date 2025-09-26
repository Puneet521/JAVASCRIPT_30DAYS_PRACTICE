function checkPalidrone(str){
    let res = "";
    for(let i=str.length-1; i>=0; i--){
        res += str[i];
    }
    return res === str ? 'palidrone' : 'Not-A-Palidrone';
}
console.log(checkPalidrone('madam'));
