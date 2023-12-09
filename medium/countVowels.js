/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

var str = "the quick brown fox";

function countVowels(str) {
    str = str.toLocaleLowerCase();
    console.log(str);
    const reg = /[aeiou]/gi
    var x = str.match(reg);
    // console.log(x.length);
    // console.log(x);
    return x.length;
}

countVowels(str);

module.exports = countVowels;