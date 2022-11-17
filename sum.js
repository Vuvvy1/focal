
const args = process.argv.slice(2);
let p1 = Number(process.argv[2]);
let p2 = Number(process.argv[3]);

function sumInput() {
  let sum = p1 + p2;
  return sum;
}
console.log(sumInput());