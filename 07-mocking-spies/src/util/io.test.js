import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

// vi.mock로 module import와 export를 mocking할 수 있다.
vi.mock("fs");

it("writeFile 메소드를 실행시킨다.", () => {
  const testData = "테스트 메시지";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  expect(fs.writeFile).toBeCalled();
});
