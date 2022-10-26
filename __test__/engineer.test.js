const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  it(" to create an object with engineer value pairs.", () => {
    const engineer = new Engineer("Alex", 13, "Alex@gmail.com", "WhatUpImAlex");

    expect(engineer).toEqual({
      name: "Alex",
      id: 13,
      email: "Alex@gmail.com",
      github: "WhatUpImAlex",
    });
  });
});

describe("getGithub()", () => {
  it("it should return engineers GitHub.", () => {
    const engineer = new Engineer("Alex", 13, "Alex@gmail.com", "WhatUpImAlex");

    expect(engineer.getGithub()).toEqual(
      `<a href="https://github.com/WhatUpImAlex" target="_blank">WhatUpImAlex<a>`
    );
  });
});
