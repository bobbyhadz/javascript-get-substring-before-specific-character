// EXAMPLE 1 - Get Substring before a specific Character in JavaScript

const str = 'one two_three four';

const before_ = str.substring(0, str.indexOf('_'));

console.log(before_); // 👉️ 'one two'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get Substring before the last occurrence of a specific Character

// const str = 'one two_three_four';

// const before_ = str.substring(0, str.lastIndexOf('_'));

// console.log(before_); // 👉️ 'one two_three'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get Substring before a specific Character using String.split()

// const str = 'one two_three four';

// const before_ = str.split('_')[0];

// console.log(before_); // 👉️ 'one two'
