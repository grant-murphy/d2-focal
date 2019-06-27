const diceRoll = function(rolls) {

  let randomNumbers = [];
  for (let i = 1; i <= rolls; i++) {
    randomNumbers.push(Math.floor(Math.random() * (7 - 1) + 1));

  }
  return `Rolled ${rolls} Dice: ${randomNumbers.join(', ')}`
}

const rolls = process.argv[2];
console.log(diceRoll(rolls));