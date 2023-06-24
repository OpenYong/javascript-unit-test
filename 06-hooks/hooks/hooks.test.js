import {
  it,
  describe,
  expect,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";

import { User } from "./hooks";

// 코드 작성 반복을 줄이고 싶다면,
// 전역 변수로도 설정이 가능하다.
const name = "Lee";
const age = 99;
let user;

beforeAll(() => {
  console.log("beforeAll()");
});
beforeEach(() => {
  user = new User(name, age);
  console.log("beforeEach()");
});
afterEach(() => {
  console.log("afterEach()");
});
// db저장 같은 테스트를 했다면 여기서 지워주는 코드를 작성한다.
// clean up !
afterAll(() => {
  console.log("afterAll()");
});

it("이름을 업데이트 한다.", () => {
  const newName = "Yong";

  user.updateName(newName);

  expect(user.name).toBe(newName);
});

it("'name' 프로퍼티를 가져야한다.", () => {
  expect(user).toHaveProperty("name");
});

it("전달된 name 값을 저장해야한다.", () => {
  expect(user.name).toBe(name);
});

it("'name' 프로퍼티 값을 지워야한다.", () => {
  user.deleteAge();

  expect(user.name).toBeNull;
});

it("deleteAge메소드 실행 후에도 'age' 프로퍼티를 가져야한다.", () => {
  user.deleteAge();

  expect(user).toHaveProperty("age");
});
