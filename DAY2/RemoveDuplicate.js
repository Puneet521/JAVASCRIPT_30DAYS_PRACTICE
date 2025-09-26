// keep only first occurence of duplicates character
 function removeDuplicates(str){
    let res = "";
    let seen = new Set();

    for (let ch of str){
        if(!seen.has(ch)){
            seen.add(ch)
            res += ch;
        }
    }
    return res;
}
console.log(removeDuplicates('Hello'));

// Remove Duplicate character completely
function removeDuplicatesCompletely(str){
      let frequency = {};
      let res = "";
    
      for (let ch of str){
        if(frequency[ch]){
           frequency[ch]++;
        }else {
            frequency[ch] = 1
        }
      } 
      
      for (let ch of str){
        if (frequency[ch]===1){
             res += ch;
        }
      }
      return res;
}
console.log(removeDuplicatesCompletely('hello'));