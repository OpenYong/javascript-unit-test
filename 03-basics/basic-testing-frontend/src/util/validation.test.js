import { it, expect, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("인풋이 빈 문자열일 때, 에러를 발생시킨다.", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it("인풋이 빈 문자열일 때, must not be empty 라는 메시지를 포함한다.", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });
});

describe("validateNumber()", () => {
  it("인풋이 숫자 값이 아닐때 에러를 발생시킨다.", () => {
    const input = "1";
    const validateFn = () => validateNumber(input);
    expect(validateFn).toThrow();
  });

  it("인풋이 숫자형일 떄 에러를 발생시키지 않는다.", () => {
    const input = 1;
    const validateFn = () => validateNumber(input);
    expect(validateFn).not.toThrow();
  });

  it("인풋이 NaN일 때 에러를 발생시킨다.", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it("인풋이 NaN일 때 에러메시지에 Invalid number를 포함시킨다.", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });
});
