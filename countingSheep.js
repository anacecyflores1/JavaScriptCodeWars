// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

let sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
// The correct answer would be 17.

// NOT SOLVED YET-----------------------------------------
// Solution:
function countSheeps(sheep) {
  let sheepCounter = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      sheepCounter++;
    }

    if (sheep[i] === false) {
      sheepCounter + 0;
    }
  }
  return sheepCounter;
}

console.log(countSheeps(sheep));
