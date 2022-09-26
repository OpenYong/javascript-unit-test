import { describe, it, expect } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it("should yield NaN for non-transformable values", () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("문자열인 숫자 배열을 전달 받았을때, 숫자 타입의 배열로 반환한다.", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf("number");
    // expect(cleanedNumbers).toBe([1, 2]);
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("만약 배열에 적어도 하나의 빈 문자열이 있다면 에러를 발생시킨다.", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
