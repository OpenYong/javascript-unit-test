import { it, expect } from "vitest";

import writeData from "./io";

it("writeData() 메소드를 실행시킨다.", () => {
  const testData = "테스트 메시지";
  const testFilename = "test.txt";

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
