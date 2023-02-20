/* arrow func
a) square each element
b) calculate sum of the square elements
b) return average of the sum of the square elements
*/

const doCrazyMath = (numArray) => {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = Math.pow(numArray[i], 2);

    sum += numArray[i];
  }

  const avg = sum / numArray.length;
  return avg;
};

const num = [1, 2, 3, 5, 7];
console.log(doCrazyMath(num));
