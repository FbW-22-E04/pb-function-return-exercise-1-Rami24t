//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  //write your code here 
  words = str.split(' ');
  words.forEach(element => {
    element = element[0].toUpperCase()+element.slice(1);
  });
  return words.join(' ');
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  //write your code here 
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  //write your code here 
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
