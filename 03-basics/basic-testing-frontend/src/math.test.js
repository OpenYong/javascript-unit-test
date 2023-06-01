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
