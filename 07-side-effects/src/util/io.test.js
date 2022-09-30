import { it, expect } from "vitest";

import writeData from "./io";

it("함수를 실행하여 파일을 생성한다.", () => {
  const testData = "Test";
  const testFileName = "test.txt";
  
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
