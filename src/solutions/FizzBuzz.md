# FizzBuzz Step-by-Step Solution

1. Setup the exercise function and write the first test.

```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number): number | string => {

}

export default fizzbuzz;

```

```ts
// fizzbuzz.test.ts
import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz Test Suite", () => {
  it("should return 1 when the input is 1", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
  })
})

```

2. Run the `yarn test` and see it fail.

3. Write the minimum code to pass the test. Run `yarn test`.

```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  return 1;
}

```

4. Add the simplest next test that will fail. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return 1 when the input is 1", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
  })
  it("should return 2 when the input is 2", () => {
    expect(fizzbuzz(2)).toStrictEqual(2);
  })
})

```

5. Write the minimum code to pass the test. Run `yarn test`.

```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 2) return 2;
  return 1;
}

```

6. Add the simplest next test that will fail. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return 1 when the input is 1", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
  })
  it("should return 2 when the input is 2", () => {
    expect(fizzbuzz(2)).toStrictEqual(2);
  })

  it("should return 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
  })
})

```

7. Write the minimum code to pass the test. Run `yarn test`.

```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 3) return "Fizz";
  if (input === 2) return 2;
  return 1;
}

```

8. Add the simplest next test that will fail. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return 1 when the input is 1", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
  })
  it("should return 2 when the input is 2", () => {
    expect(fizzbuzz(2)).toStrictEqual(2);
  })
  it("should return 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
  })
  it("should return 4 when the input is 4", () => {
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
})
```

9. Write the minimum code to pass the test. Run `yarn test`.

```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 4) return 4;
  if (input === 3) return "Fizz";
  if (input === 2) return 2;
  return 1;
}

```

10. Refactor - at this point we are starting to see a pattern. If the input is 3 we are returning "Fizz", otherwise we are returning the input.
Let's stop and refactor our tests and function. Rerun our tests with `yarn test` after the refactor to make sure nothing is broken.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not 3", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
  })
})
```

```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 3) return "Fizz";
  return input;
}

```

11. Thinking about our exercise, the next test that will fail will be for an input of 5. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not 3", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
  })
})
```

12. Add the minimum code for the test to pass. Run `yarn test`.

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 5) return "Buzz";
  if (input === 3) return "Fizz";
  return input;
}

```

13. The next test that will fail will be for an input of 6. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not 3", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
  })
  it("should return 'Fizz' when the input is 6", () => {
    expect(fizzbuzz(6)).toStrictEqual("Fizz");
  })
})
```

14. Add the minimum code for the test to pass. Run `yarn test`.

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 5) return "Buzz";
  if (input === 3 || input === 6) return "Fizz";
  return input;
}

```

15. The next test that will fail will be for an input of 9. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not 3", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
  })
  it("should return 'Fizz' when the input is 6", () => {
    expect(fizzbuzz(6)).toStrictEqual("Fizz");
  })
  it("should return 'Fizz' when the input is 9", () => {
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  })
})
```

16. Add the minimum code for the test to pass. Run `yarn test`.

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 5) return "Buzz";
  if (input === 3 || input === 6 || input === 9) return "Fizz";
  return input;
}

```

17. The next test that will fail will be for an input of 10. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not 3", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
  })
  it("should return 'Fizz' when the input is 6", () => {
    expect(fizzbuzz(6)).toStrictEqual("Fizz");
  })
  it("should return 'Fizz' when the input is 9", () => {
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is 10", () => {
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  })
})
```

18. Add the minimum code for the test to pass. Run `yarn test`.

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 5 || input === 10) return "Buzz";
  if (input === 3 || input === 6 || input === 9) return "Fizz";
  return input;
}

```

19. Refactor - at this point we are starting to see a pattern. If the input is a multiple of 3 we are returning "Fizz". If the input is a multiple of 5 we are returning "Buzz". Otherwise we are returning the input.
Let's stop and refactor our tests and function. Rerun our tests with `yarn test` after the refactor to make sure nothing is broken.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not a multiple of 3 or 5", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is a multiple of 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
    expect(fizzbuzz(6)).toStrictEqual("Fizz");
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is a multiple of 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  })
})
```

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0) return "Fizz";
  return input;
}

```

20. The next test that will fail will be for an input of 15. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not a multiple of 3 or 5", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is a multiple of 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
    expect(fizzbuzz(6)).toStrictEqual("Fizz");
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is a multiple of 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  })
  it("should return 'FizzBuzz' when the input is 15", () => {
    expect(fizzbuzz(15)).toStrictEqual("FizzBuzz");
  })
})
```

21. Add the minimum code to make this test pass. Run `yarn test`.

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 15 ) return "FizzBuzz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0) return "Fizz";
  return input;
}

```


22. The next test that will fail will be for an input of 30. Run `yarn test`.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not a multiple of 3 or 5", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is a multiple of 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
    expect(fizzbuzz(6)).toStrictEqual("Fizz");
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is a multiple of 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  })
  it("should return 'FizzBuzz' when the input is 15", () => {
    expect(fizzbuzz(15)).toStrictEqual("FizzBuzz");
  })
  it("should return 'FizzBuzz' when the input is 30", () => {
    expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
  })
})
```

23. Add the minimum code to make this test pass. Run `yarn test`.

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input === 15 || input === 30) return "FizzBuzz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0) return "Fizz";
  return input;
}

```

24. Refactor - at this point we are starting to see our last pattern. If the input is a multiple of 15 we are returning "FizzBuzz". To make this better reflect our constraints, we can write this as if the input is a multiple of 3 and the input is a multiple of 5. Let's stop and refactor our tests and function. Rerun our tests with `yarn test` after the refactor to make sure nothing is broken.

```ts
// fizzbuzz.test.ts

describe("FizzBuzz Test Suite", () => {
  it("should return the input if the input is not a multiple of 3 or 5", () => {
    expect(fizzbuzz(1)).toStrictEqual(1);
    expect(fizzbuzz(2)).toStrictEqual(2);
    expect(fizzbuzz(4)).toStrictEqual(4);
  })
  it("should return 'Fizz' when the input is a multiple of 3", () => {
    expect(fizzbuzz(3)).toStrictEqual("Fizz");
    expect(fizzbuzz(6)).toStrictEqual("Fizz");
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  })
  it("should return 'Buzz' when the input is a multiple of 5", () => {
    expect(fizzbuzz(5)).toStrictEqual("Buzz");
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  })
  it("should return 'FizzBuzz' when the input is a multiple of 3 and a multiple of 5", () => {
    expect(fizzbuzz(15)).toStrictEqual("FizzBuzz");
    expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
  })
})
```

 ```ts 
// fizzbuzz.ts

const fizzbuzz = (input: number) => {
  if (input % 5 === 0 && input % 3 === 0) return "FizzBuzz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0) return "Fizz";
  return input;
}

```

## Summary

Now running our tests and checking the test coverage we can see our test suite has become excellent documentation for our function. 
Run `yarn test` and `yarn view-coverage`.

```ts
// Jest test output
FizzBuzz Test Suite
    ✓ should return the input if the input is not a multiple of 3 or 5
    ✓ should return 'Fizz' when the input is a multiple of 3
    ✓ should return 'Buzz' when the input is a multiple of 5
    ✓ should return 'FizzBuzz' when the input is a multiple of 3 and a multiple of 5
```
Great work! Ready to try another TDD Kata. See [Count Words](../../katas/countwords/README.md)
