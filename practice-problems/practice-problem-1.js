// 1. Arrow func, 3 parameter, multiply
const multiplyByArrow = (x, y, z) => {
  return x * y * z;
};
console.log(multiplyByArrow(10, 2, 4));

// 2. print sentence in three lines
const multiLine = `I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(multiLine);

// 3. arrow func, 2 parameter, 1 parameter will be pass as argument and other as default, add them
const addByArrowUsingDefault = (a, b = 10) => {
  return a + b;
};
console.log(addByArrowUsingDefault(10));
