import { it, expect } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

it("인풋이 숫자 값이 아닐때 에러를 발생시킨다.", () => {
  const input = "1";
  const validateFn = () => validateNumber(input);
  expect(validateFn).toThrow();
});

it("인풋이 숫자형일 떄 에러를 발생시키지 않는다..", () => {
  const input = 1;
  const validateFn = () => validateNumber(input);
  expect(validateFn).not.toThrow();
});
