const Intern = require("../lib/intern");

describe("Intern class", () => {
  it("to create an object with intern value pairs.", () => {
    const intern = new Intern("Sam", 78, "Sam@gmail.com", "UNC");

    expect(intern).toEqual({
      name: "Sam",
      id: 78,
      email: "Sam@gmail.com",
      school: "UNC",
    });
  });
});
