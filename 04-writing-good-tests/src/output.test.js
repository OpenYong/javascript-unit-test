import { describe, it, expect } from "vitest";

import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("어떤 값이 전달되더라도 string 타입을 반환해야한다. ", () => {
    const val1 = 123;
    const val2 = "invalid";
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("number가 result로 제공된 경우 계산 결과를 포함하는 문자열을 반환해야 한다.", () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('결과로 "no-calc"가 제공되면 빈 문자열을 반환해야 한다.', () => {
    const result = "no-calc";

    const resultText = generateResultText(result);

    expect(resultText).toBe("");
  });

  it('"invalid"가 결과로 제공된 경우 "Invalid"를 포함하는 문자열을 반환해야 한다.', () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
});
