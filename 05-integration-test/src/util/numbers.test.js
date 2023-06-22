import { describe, it, expect } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("숫자 문자열을 전달했을때 number 타입으로 변환하여  반환한다", () => {
    //Arrange
    const stringInput = "9";

    //Act
    const result = transformToNumber(stringInput);

    //Assert
    expect(result).toBeTypeOf("number");
  });

  it("숫자 문자열을 전달했을때 number 타입으로 변환하여 반환한다", () => {
    const stringInput = "9";

    const result = transformToNumber(stringInput);

    expect(result).toBe(+stringInput);
  });

  it("숫자 문자열이 아닌 일반 문자열이 전달됐을때 NaN 발생시킨다.", () => {
    const stringInput = "숫자가 아닌";
    const input = {};

    const result = transformToNumber(stringInput);
    const result2 = transformToNumber(input);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("문자형 숫자가 전달되었을 때 숫자형으로 변환하며 숫자값 배열을 반환한다.", () => {
    const numberValues = ["1", "2"];

    const result = cleanNumbers(numberValues);

    expect(result[0]).toBeTypeOf("number");
  });

  it("만약 배열에 적어도 하나의 빈 문자열이 있다면 에러를 발생시킨다.", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
