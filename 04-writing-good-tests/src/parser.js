export function extractNumbers(formData) {
  const num1Input = formData.get("num1");
  const num2Input = formData.get("num2");

  return [num1Input, num2Input];
}

// 1. form 데이터에서 number inputs 가져오기
export function extractNumberValues(form) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  return numberInputs;
}
