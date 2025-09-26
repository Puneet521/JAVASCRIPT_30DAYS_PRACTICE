function characterFrequency(str){
    let frequency ={};

    for (let ch of str){
        if(frequency[ch]){
            frequency[ch]++;
        }else{
            frequency[ch]=1;
        }
    }
    return frequency
}
console.log(characterFrequency("aaacgdfthun"));

// character frequency in a3b2se like string format
function characterFrequencyString(str){
    let frequency = {}

     for (let ch of str){
        if(frequency[ch]){
            frequency[ch]++;
        }else{
            frequency[ch]=1;
        }
    }
    
     let res = ""
    for (let keys in frequency){
        res += keys + frequency[keys];
    }
    return res;
}
console.log(characterFrequencyString('aaabbftttyyy'))