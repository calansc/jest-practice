const practice = require("./practice");

test("capitalize", () => {
  expect(practice.capitalize("string")[0]).toMatch(/[A-Z]/);
});
test("capitalize('banana')", () => {
  expect(practice.capitalize("banana")[0]).toMatch("B");
});
test("capitalize('zebra')", () => {
  expect(practice.capitalize("zebra")[0]).toMatch("Z");
});

test("reverseString('apple')", () => {
  expect(practice.reverseString("apple")).toMatch("elppa");
});
test("reverseString('milk')", () => {
  expect(practice.reverseString("milk")).toMatch("klim");
});

test("calculator('a,b')", () => {
  expect(practice.calculator.add(1, 2)).toEqual(3);
});
test("calculator('a,b')", () => {
  expect(practice.calculator.add(11, -2)).toEqual(9);
});
test("calculator('a,b')", () => {
  expect(practice.calculator.subtract(4, 1)).toEqual(3);
});
test("calculator('a,b')", () => {
  expect(practice.calculator.multiply(4, 4)).toEqual(16);
});
test("calculator('a,b')", () => {
  expect(practice.calculator.divide(10, 2)).toEqual(5);
});

test("caesarCypher('abc',1)", () => {
  expect(practice.caesarCipher("abc", 1)).toMatch("bcd");
});
test("caesarCypher('ab-c',2)", () => {
  expect(practice.caesarCipher("ab-c", 2)).toMatch("cd-e");
  expect(practice.caesarCipher("cd-e", 2)).toMatch("ef-g");
});

test("analyzeArray('2,3,4,7')", () => {
  let array = [2, 3, 4, 7];
  expect(practice.analyzeArray(array)).toEqual({
    average: 4,
    min: 2,
    max: 7,
    length: 4,
  });
});
