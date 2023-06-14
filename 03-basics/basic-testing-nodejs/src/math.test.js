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

it("빈 배열이 제공되었을때 0이 발생되게 된다.", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("함수에 매개 변수를 넣어주지 않았을 때 에러를 throw 한다.", () => {
  // Q:error는 return value가 아닌데 어떻게  테스트를 할까?
  // A:try catch 로도 해결할 수 있다.

  // 방법 1.
  // try {
  //   const result = add();
  // } catch (error) {
  //   expect(error).toBeDefined();
  // }

  // 방법 2.
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("배열이 아닌 복수의 매개변수가 전달 되었을때 에러 throw 해야한다", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
