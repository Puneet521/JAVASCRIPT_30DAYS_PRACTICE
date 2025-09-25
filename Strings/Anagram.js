// Anagram --- means str1 & str2 are of same length and have same character
// but might be they have different order
function checkAnagram(str1, str2){
     if (str1.length !== str2.length) return false;

     let sortedstr1 = str1.split("").sort().join();
     let sortedstr2 = str2.split("").sort().join();

     return sortedstr1 === sortedstr2;
}
console.log(checkAnagram('listen', 'silent'));