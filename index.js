//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  //write your code here 
  let words = str.split(' ');
  words.forEach(element => words[words.indexOf(element)] = (element[0].toUpperCase() + element.slice(1)));
  // console.log('7: ', words);
  words = words.join(' ');
  return words;
}
console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  //write your code here 
  words = str.split(' ');
  longest = '';
  words.forEach(element => {
      if (element.length > longest.length)
          longest = element;
  });
  return longest;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(words) {
  longest = '';
  words.forEach(element => {
      if (element.length > longest.length)
          longest = element;
  });
  return longest;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
