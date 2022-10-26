const Manager = require("../lib/manager");

describe("Manager class", () => {
  it("to create an object with manager value pairs.", () => {
    const manager = new Manager(
      "David",
      23,
      "David@gmail.com",
      "010-101-010 x6547"
    );

    expect(manager).toEqual({
      name: "David",
      id: 23,
      email: "David@gmail.com",
      officeNumber: "010-101-010 2323",
    });
  });
});
