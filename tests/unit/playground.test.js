import { evenOrOdd, multiply } from "@/playground";

describe("basic math", () => {
  it("add two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtracts two numbers", () => {
    expect(5 - 3).toBe(2);
  });

  describe("evenOrOdd", () => {
    describe("when even", () => {
      it("the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("the number is odd", () => {
      it("odd", () => {
        expect(evenOrOdd(5)).toBe("Odd");
      });
    });
  });
});

describe("multiply", () => {
  it("multiplies two numbers together", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
