let num = process.argv.slice(2);
num = Number(num);

const rollingDice = function(num) {
  // make the dice rolling "num" times.
  // return the results.
  let diceResults = [];
  for (let i = 0; i < num; i++) {
    diceResults.push(Math.floor((Math.random() * 6) + 1));
  }
  return diceResults;
};
//This next function is from an other function I used. It is overly complexed
const joinList = function(lists) {
  let empty = "";
  if (lists.length === 0) {
    return empty;
  }
  let readable = lists[0];
  
  for (let list = 1; list < lists.length; list++) {
    readable += ", " + lists[list];
  }
  return readable;
};


console.log("Rolled " + num + " dice: " + joinList(rollingDice(num)));
/*
> node dice-roller.js 3
Rolled 3 dice: 2, 6, 5
*/