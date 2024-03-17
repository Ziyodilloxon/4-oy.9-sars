// 102 misol
// function isNumberInRange(num, range) {
//   if (
//     typeof num !== "number" ||
//     typeof range !== "object" ||
//     range === null ||
//     !("min" in range) ||
//     !("max" in range)
//   ) {
//     return false;
//   }

//   return num > range.min && num < range.max;
// }
// console.log(isNumberInRange(156, { min: 100, max: 200 }));

// 103 misol
// function isSquareEndsWithSameNumber(num) {
//   if (typeof num !== "number") {
//     return false;
//   }
//   let square = num * num;
//   let lastDigitSquare = square % 10;
//   return lastDigitSquare === num % 10;
// }
// console.log(isSquareEndsWithSameNumber(8));

// 104 misol
// function addIndexToElement(arr) {
//   if (!Array.isArray(arr)) {
//     return [];
//   }
//   return arr.map((value, index) => value + index);
// }
// console.log(addIndexToElement([1, 2, 3, 4, 5]));

// 106 misol
// function son(number) {
//   return String(number).length;
// }
// console.log(son(256));

// 107 misol
// function randomNumberBetween(a, b) {
//   return Math.floor(Math.random() * (b - a + 1)) + a;
// }
// console.log(randomNumberBetween(5, 99));

// 110 misol
// function countUpperCaseLetters(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countUpperCaseLetters("fvLzpxmgXSSDFssdcdfcddfgyrDrobbgMVrc"));

// 107 misol
// function maxPossibleNumber(num) {
//   let numStr = num.toString();
//   let sortedDigits = numStr.split("").sort((a, b) => b - a);
//   let maxPossible = parseInt(sortedDigits.join(""));
//   return maxPossible;
// }
// console.log(maxPossibleNumber(12193));
