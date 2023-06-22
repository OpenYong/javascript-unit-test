import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("토근 값을 생성해낸다. callback", () =>
  new Promise((resolve, reject) => {
    const userEmail = "test@test.com";

    generateToken(userEmail, (err, token) => {
      // expect(token).toBeDefined(); // Undefined가 아닌것을 기대함

      try {
        // expect(token).toBeDefined();
        expect(token).toBe(2);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }));

it("토근 값을 생성해낸다. Promise", () => {
  const userEmail = "test@test.com";

  return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
});

it("토근 값을 생성해낸다. async,await ", async () => {
  const userEmail = "test@test.com";

  const token = await generateTokenPromise(userEmail);

  expect(token).toBeDefined();
});
