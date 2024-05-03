/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// Testing Git

function isAnagram(s1, s2) {
  if(sortString(s1.toLocaleLowerCase()) === sortString(s2.toLocaleLowerCase())){
    return true;
  }
  return false;
}


const sortString = (str) => {
  return str.split("").sort().join("");
}
console.log(isAnagram("Debit Card","Bad Credit"));

module.exports = isAnagram;
