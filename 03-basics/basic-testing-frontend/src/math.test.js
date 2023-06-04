import { it, expect } from "vitest";

import { add } from "./math.js";

it("배열 안의 숫자를 모두 더함", () => {
  // Arrange - 가독성을 높이고, 바꾸기 쉽도록
  const numbers = [1, 2, 3, 4, 5];

  // Act
  const result = add(numbers);

  // Assert
  const expectedAssert = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  ); // 항상 결과값을 알 수 없기떄문에 변수로 작성해주었다.
  expect(result).toBe(expectedAssert);
});

it("유효하지 않은 숫자가 들어 왔을 때, NaN을 발생시켜야한다.", () => {
  // Arrange - invalid 라는 string을 inputs 요소로 둔다.
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("숫자 문자열을 가진 배열이 제공되었을때 올바른 sum 이 발생해야한다.", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedAssert = numbers.reduce(
    (prevValue, curValue) => prevValue + +curValue,
    0
  );
  expect(result).toBe(3);
});
