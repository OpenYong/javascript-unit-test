import { it, expect, describe } from "vitest";

import { validateStringNotEmpty, validateNumber } from "./validation.js";

describe("validateStringNotEmpty()", () => {
  it("전달하는 문자열이 빈값일때, 에러를 throw 한다.", () => {
    const stringInput = "   ";
    const resultFn = () => {
      validateStringNotEmpty(stringInput);
    };
    expect(resultFn).toThrow();
  });

  it("should throw an error if any other value than a string is provided", () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });
});

describe("validateNumber()", () => {
  it("전달하는 값이 숫자가 아니면 에러를 throw 한다.", () => {
    const input = "  asd ";
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).toThrow(/Invalid number/);
  });

  it("전달하는 값이 숫자가 아니면 에러를 throw 한다.", () => {
    const input = "12";
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).toThrow();
  });
});
