const Manager = require("../lib/Manager")

test("Checking that manager object is being created properly ", () => {

  const manager = new Manager ("Duncan", 1, "Manager", "1234");

  expect(manager.name).toEqual("Duncan");
  expect(manager.id).toEqual(1)
  expect(manager.getRole()).toEqual("Manager")
  expect(manager.getOfficeNumber()).toEqual("1234")

})