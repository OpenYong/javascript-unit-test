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
  );
  expect(result).toBe(expectedAssert);
});

it("유효하지 않는 숫자가 제공되었을때 NaN이 발생해야한다", () => {
  // add 라는 함수를 여러 작업자가 사용하게 되고 숫자가 아닌 것을 pass 하게 되었을때 문제가 된다.
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

it("빈 배열이 제공되었을때 0이 발생되게 된다.", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("함수에 매개 변수를 넣어주지 않았을 때 에러를 throw 한다.", () => {
  // error는 return value가 아닌데 어떻게  테스트를 할까?
  // try catch 로도 해결할 수 있다.

  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow(/is not iterable/);
});

it("배열이 아닌 복수의 매개변수가 전달 되었을때 에러 throw 해야한다", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = (num1, num2) => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
