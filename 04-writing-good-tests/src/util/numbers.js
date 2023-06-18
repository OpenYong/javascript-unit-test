import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
  // return NaN;
  return +value;
}

// 3.
export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}
