function isPalindrome(word) {
  // Write your algorithm here
  // var re = /[\W_]/g;
  var lowRegWord = word.toLowerCase();
  var reverseWord = lowRegWord.split('').reverse().join(''); 
  return reverseWord === lowRegWord
}

/* 
  Add your pseudocode here
  make all lowercase
  split word and reverse
  if equals, it is a palindrome(true)
*/

/*
  Add written explanation of your solution here
  The function takes a word and splits and reverses it to see if it still equals the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;
