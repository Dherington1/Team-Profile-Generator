const Intern = require("../lib/Intern");

test ("Checking to make sure Intern object was created properly", () => {

  const intern = new Intern ("Duncan", 1, "Dherington1@comcast.net", "SFSU");

    expect(intern.name).toEqual("Duncan")
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual("Dherington1@comcast.net");
    expect(intern.school).toEqual("SFSU");
    
})