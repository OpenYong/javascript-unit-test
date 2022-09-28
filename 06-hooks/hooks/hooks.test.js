import { it, expect, beforeEach, beforeAll, afterEach, afterAll } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user;

beforeAll(() => {
  user = new User(testEmail);
  console.log("beforeAll()");
});
beforeEach(() => {
  user = new User(testEmail);
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

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
