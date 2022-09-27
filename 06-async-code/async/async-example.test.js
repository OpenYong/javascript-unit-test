import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("토근 값을 생성해낸다. callback", (done) => {
  const userEmail = "test@test.com";

  generateToken(userEmail, (err, token) => {
    // expect(token).toBeDefined(); // Undefined가 아닌것을 기대함

    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (error) {
      done(error);
    }

    // toBe(2) 도 테스트에 통과하고 있고,
    // 실제로 작동하는 테스트 코드가 아니라고 봐야함.
    // 고쳐보자!
    // done();
  });
});

it("토근 값을 생성해낸다. Promise", () => {
  const userEmail = "test@test.com";

  expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
});

it("토근 값을 생성해낸다. async,await ", async () => {
  const userEmail = "test@test.com";

  const token = await generateTokenPromise(userEmail);

  expect(token).toBeDefined();
});
