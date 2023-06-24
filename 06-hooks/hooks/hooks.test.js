import { it, expect } from "vitest";

import { User } from "./hooks";

it("이름을 업데이트 한다.", () => {
  const name = "Lee";
  const age = 99;
  const newName = "Yong";

  const user = new User(name, age);
  user.updateName(newName);

  expect(user.name).toBe(newName);
});

it("'name' 프로퍼티를 가져야한다.", () => {
  const name = "Lee";
  const age = 99;

  const user = new User(name, age);

  expect(user).toHaveProperty("name");
});

it("전달된 name 값을 저장해야한다.", () => {
  const name = "Lee";
  const age = 99;

  const user = new User(name, age);

  expect(user.name).toBe(name);
});

it("'name' 프로퍼티 값을 지워야한다.", () => {
  const name = "Lee";
  const age = 99;

  const user = new User(name, age);
  user.deleteAge();

  expect(user.name).toBeNull;
});

it("deleteAge메소드 실행 후에도 'age' 프로퍼티를 가져야한다.", () => {
  const name = "Lee";
  const age = 99;

  const user = new User(name, age);
  user.deleteAge();

  expect(user).toHaveProperty("age");
});
