// character frequency
function characterFrequency(str){
    let frequency = {};
    for (let ch of str){
        if (frequency[ch]){
            frequency[ch]++;
        }else {
            frequency[ch]=1
        }
    }
    return frequency;
}
console.log(characterFrequency('banana'));

// character frequency --- string format
function characterFrequency2(str){
    let frequency ={}
    for (let ch of str){
        if (frequency[ch]){
            frequency[ch]++;
        }else{
            frequency[ch]=1;
        }
    }
    // converting obj to string format
    let res = "";
    for (let keys in frequency){
        res += keys + frequency[keys];
    }
    return res;
}
console.log(characterFrequency2("banana"));
