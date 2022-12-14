import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("함수를 실행하여 파일을 생성한다.", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("정상적으로 호출이 되면 reosolve를 호출하여 Promise를 반환한다.", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  // expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
