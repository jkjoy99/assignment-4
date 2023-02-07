// -------------------------------------------****
// Problem 1: Let’s play a mind game
// ------------------------------------*****
function mindGame(number){
    const multiply = number * 3;
    const multiplyAdd = multiply + 10;
    const dividedAdd = multiplyAdd / 2;
    const subtractionAdd = dividedAdd - 5;
    return subtractionAdd;
}
const total = mindGame(5);
console.log(total);
// --------------------------------------***
// Problem 2: Finding even or odd
// ----------------------------------*** 
function evenOdd(phero) {
    if (phero.length % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  console.log(evenOdd(5));

//   ---------------------------------------------------
//   Problem 3: Is Less or Greater than seven****
// ------------------------------------------------

function isLGSeven(input) {
    const difference = input - 7;
    if (difference < 0) {
      return difference;
    } else {
      return input * 2;
    }
  }
  console.log(isLGSeven(6))

    // --------------------------------------
//   Problem 4: Finding Bad data
    //  --------------------------------   
  function findingBadData(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        count++;
      }
    }
    return count;
  }
  console.log(findingBadData( 1,2,5))

// ------------------------------------------------------
//   Problem 5: Convert your gems into diamond
    // --------------------------------------------

function gemsToDiamond(g1, g2, g3) {
    const total = g1 * 21 + g2 * 32 + g3 * 43;
    return total > 2000 ? total - 2000 : total;
  }
  console.log(gemsToDiamond(1, 1, 1))
  
  
  
