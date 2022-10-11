import { extractEnteredNumberValues } from "./src/parser.js";
import {
  validateStringNotEmpty,
  validateNumber,
} from "./src/util/validation.js";
import { calculateResult } from "./src/math.js";
import { transformToNumber } from "./src/util/numbers.js";
import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form); // 1

  const result = calculateResult(numberValues); // 4
  const resultText = generateResultText(result); // 5

  outputResult(resultText); // 6
}

form.addEventListener("submit", formSubmitHandler);
