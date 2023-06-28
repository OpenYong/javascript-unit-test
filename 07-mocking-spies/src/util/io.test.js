import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

// vi.mock로 module import와 export를 mocking할 수 있다.
vi.mock("fs");

// path mocking
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("writeFile 메소드를 실행시킨다.", () => {
  const testData = "테스트 메시지";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();

  // 파일 path를 모두 적어서 테스팅하는 것은 귀찮은 일.
  // mock메소드를 살짝 수정해서 testFilename이 path가 되도록 해서 테스트 한다.
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
