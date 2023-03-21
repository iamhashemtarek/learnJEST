beforeAll(() => {
  console.log("start testing");
});

afterAll(() => {
  console.log("end of testing");
});

describe("number operations", () => {
  test("1 plus 1 should be 2", () => {
    let x = 1;
    let b = 1;
    expect(x + b).toBe(2);
  });

  test("1 plus 4 shouldn't be 6", () => {
    let x = 1;
    let y = 4;
    expect(x + y).not.toBe(6);
  });
});

describe("check for truthy & flasy values mathcers", () => {
  test("test that the variable is undefined", () => {
    let x;
    expect(x).toBeUndefined();
  });

  test("test that the var in null", () => {
    let x = null;
    expect(x).toBeDefined();
  });

  test("test that the var is greater than zero", () => {
    let x = 8;
    expect(x).toBeGreaterThan(0);
  });

  test("test that the var is less than or equal zero", () => {
    let x = -8;
    expect(x).toBeLessThanOrEqual(0);
  });

  test("test for falsy variable", () => {
    let x = false;
    expect(x).toBeFalsy();
  });
});

describe("array mathcers", () => {
  let arr = ["x", "y", "z"];

  test(`test that the array contains char 'x'`, () => {
    expect(arr).toContain("x");
  });

  test("test that an array containing only strings", () => {
    expect(arr).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});

describe("reference equality", () => {
  let user = {
    fname: "hashem",
    lname: "tarek",
    age: 22,
  };

  test("should return a user with fname equals hashem", () => {
    expect(user.fname).toBe("hashem"); //toBe() => only used with primitive data types
    expect(user).toEqual({
      fname: "hashem",
      lname: "tarek",
      age: 22,
    });
  });

  // more general matcher
  test("should return a user with fname, lname and age keys", () => {
    expect(user).toEqual(
      expect.objectContaining({
        fname: expect.any(String),
        lname: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  //complex one => user object in array

  test("should return an array of object which have 2 properties name and age", () => {
    let arr = [
      {
        name: "hashem",
        age: 22,
      },
      {
        name: "ali",
        age: 20,
      },
      {
        name: "ahmed",
        age: 18,
      },
    ];

    expect(arr).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
});
