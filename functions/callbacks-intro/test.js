const number = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
console.log("Subset of even numbers:", number.filter(num => num % 2 === 0));

const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log("Subset of even numbers:", evens);