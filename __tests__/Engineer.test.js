const Engineer = require("../lib/Engineer");

test("check engineers name", () => {

    const engineer = new Engineer ("Duncan", 1, "Engineer", "dherington1");

    expect(engineer.name).toEqual("Duncan");
    expect(engineer.id).toEqual(1)
    expect(engineer.getRole()).toEqual("Engineer")
    expect(engineer.getGithub()).toEqual("dherington1")
  
})