const Employee = require("../lib/employee");

describe("Employee class", () => {
  it(" to create an object with employee value pairs.", () => {
    const employee = new Employee("josh", 53, "josh@gmail.com");

    expect(employee).toEqual({
      name: "josh",
      id: 53,
      email: "josh@gmail.com",
    });
  });
});

describe("getEmail ()", () => {
  it("it should return employees email.", () => {
    const employee = new Employee("josh", 53, "josh@gmail.com");

    expect(employee.getEmail()).toEqual(
      `<a href="mailto:josh@gmail.com">josh@gmail.com</a>`
    );
  });
});
