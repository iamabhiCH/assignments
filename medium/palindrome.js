/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let st = str.replace(/[^a-zA-Z ]/g, "");
  let str1 = st.split(" ").join("");
  str1 = str1.toLocaleLowerCase();
  const len = str1.length;
  for(let i=0;i<len/2; i++){
    if(str1[i] !== str1[len - 1 - i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
