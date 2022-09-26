import { expect, it } from "vitest";
import { generateToken } from "./async-example";

it("토근 값을 생성해낸다.", () => {
  const userEmail = "test@test.com";

  generateToken(userEmail, (err, token) => {
    // expect(token).toBeDefined(); // Undefined가 아닌것을 기대함
    expect(token).toBe(2);
    // toBe(2) 도 테스트에 통과하고 있고,
    // 실제로 작동하는 테스트 코드가 아니라고 봐야함.
    // 고쳐보자!
  });
});
