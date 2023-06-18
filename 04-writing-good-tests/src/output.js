// 4.
export function generateResultText(calculateResult) {
  let resultText = "";

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + calculateResult;
  }

  return resultText;
}

// 5.
export function outputResult(resultText) {
  const output = document.getElementById("result");
  output.textContent = resultText;
}
