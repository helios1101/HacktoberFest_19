/*
 * Fibonacci sequence is a mathematical phenomenon where 
 * a number is found in a proportion following the pattern
 * reflected in the following number sequence:
 * 0, 1, 1, 2, 3, 5, 8, 13...
 * where the sum of the two previous numbers creates the next number.
 * This naturally lends itself to a recursive definition.
 * @param(end) number to end at
 * @return fibonacci number at end.
 */

export function fibonacci(end) {
  // If the number is not an integer, it's not part of the sequence. So return -1
  if(!Number.isInteger(end)) {
    return -1;
  } else {
    if(end > 1) {
      //if the number is larger than one, we can calculate it with the recursive call
      return fibonacci(end - 1) + fibonacci(end - 2); //e. g. the 2nd fibonnaci number is 1. 1 + 0 is 1.
    }
    else {
      //This reflects a "base case", meaning it's one of the constants of the sequence. Namely, 0, or 1.
      return end;
    }
  }
}
export function fibTests() {
  console.assert(fibonacci(3.6) === -1); //not an integer
  console.assert(fibonacci(0) === 0); //base case
  console.assert(fibonacci(1) === 1); //base case
  console.assert(fibonacci(2) === 1); //example above
  console.assert(fibonacci(6) === 8); //another case for validation of normal path
}