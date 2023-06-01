import { it, expect } from "vitest";

import { add } from "./math.js";

it("배열 안의 모든 숫자 값을 더한다.", () => {
  const result = add([1, 2, 3, 4, 5]);
  expect(result).toBe(15);
});
