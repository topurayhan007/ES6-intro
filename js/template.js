const person = "Adam Sandler"; // 'Adam Sandler' prettier extension gave double quote
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine =
  "First Line text \n" +
  "Second line of code \n" +
  "Third line of code \n" +
  "Fourth line of code";
// console.log(multiLine);

const newMultiLine = `First Line of text
Second line of text
Third line of text
Fourth line of text`;
// console.log(newMultiLine);

const a = 20;
const b = 30;
const num = [78, 56, 47, 88, 23];
const summary = "sum of: " + a + " and " + b + " is: " + (a + b);
// console.log(summary);

const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);
