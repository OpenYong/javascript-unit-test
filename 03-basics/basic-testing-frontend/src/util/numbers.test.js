import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

it("숫자 문자열을 전달했을때 숫자를 반환한다", () => {
  //Arrange
  const stringInput = "9";

  //Act
  const result = transformToNumber(stringInput);

  //Assert
  expect(result).toBeTypeOf("number"); // 주의 NaN은 number type이다.
});

it("숫자 문자열을 전달했을때 숫자를 반환한다", () => {
  const input = "9";

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it("숫자 문자열이 아닌 일반 문자열이 전달됐을때 NaN을 발생시킨다.", () => {
  const stringInput = "숫자가 아닌";
  const input = {};

  const result = transformToNumber(stringInput);
  const result2 = transformToNumber(input);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
