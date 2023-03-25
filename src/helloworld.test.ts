import helloworld from "./helloworld";

describe("Hello World Test Suite", () => {
  it("returns the string 'Hello World'", () => {
    expect(helloworld()).toStrictEqual("Hello World")
  })
})
