const Employee = require("../lib/Employee");

test("Checking that manager object is being created properly ", () => {

  const employee = new Employee ("Duncan", 1, "Dherington1@comcast.net");

  expect(employee.name).toEqual("Duncan");
  expect(employee.id).toEqual(1);
  expect(employee.email).toEqual("Dherington1@comcast.net");

}) 
