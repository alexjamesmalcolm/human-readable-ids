import { describe, it, expect } from "@jest/globals";
import { humanReadableId } from "./humanReadableId";

describe("humanReadableId", () => {
  it("should create an id one million times", () => {
    const iterations = 1000000;
    for (let i = 0; i < iterations; i++) {
      const id = humanReadableId();
      expect(id.length).toBeGreaterThan(0);
    }
  });
});
