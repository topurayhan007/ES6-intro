// arrow func, take 2 array, combine, find Max from combined array
const combineAndFindMax = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];

  const max = Math.max(...newArr);
  return max;
};

const arr1 = [1, 2, 5, 99];
const arr2 = [9, 12, 66];
console.log(combineAndFindMax(arr1, arr2));
