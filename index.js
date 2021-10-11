const inquirer = require("inquirer");
const fs = require('fs');
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const generateEmployeePage = require("./lib/generateEmployee");

const assembledTeam = [];

const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter in the manager's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number: ",
      },
    ])
    // input will be managerData
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      // create new variable to access our manager object
      const manager = new Manager(name, id, email, officeNumber);
      // push our answers into the array
      assembledTeam.push(manager);
      whichEmployee();
    });
};

const whichEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeChoice",
        message: "Which type of employee would you like to add?",
        choices: ["Intern", "Engineer"],
      },
    ])
    .then((answers) => {
      const { employeeChoice } = answers;

      if (employeeChoice === "Engineer") {
        engineerQuestions();
      } else {
        internQuestions();
      }
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter in engineer's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the enineer's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email: ",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the engineers github username: ",
      },
    ])
    .then((engineerData) => {
      const { name, id, email, github } = engineerData;
      // create new variable to acess our engineer objecy
      const engineer = new Engineer(name, id, email, github);
      // push our answers to our array
      assembledTeam.push(engineer);

      inquirer
        .prompt([
          {
            type: "confirm",
            name: "anotherMember",
            message: "Would you like to add another employee?",
            default: false,
          },
        ])
        .then((answers) => {
          if (answers.anotherMember === true) {
            whichEmployee();
          } else {
        
            writeToFile('./dist/index.html', generateEmployeePage(assembledTeam));
          }
        });
      });
    };
    
    
const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the intern's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email: ",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter where the intern goes to school: ",
      },
    ])
    .then((internData) => {
      const { name, id, email, school } = internData;
      // create new variable to acess our engineer objecy
      const intern = new Intern(name, id, email, school);
      // push our answers to our array
      assembledTeam.push(intern);

      inquirer
        .prompt([
          {
            type: "confirm",
            name: "anotherMember",
            message: "Would you like to add another employee?",
            default: false,
          },
        ])
        .then((answers) => {
          if (answers.anotherMember === true) {
            whichEmployee();
          } else {
            
            writeToFile('./dist/index.html', generateEmployeePage(assembledTeam));
          }
        });
    });
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
    if (err) {
      console.log(err);
      // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
      return;
    }
    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
  
      console.log("Your team was successfully created! Check it out with index.html")  
  
  });
}

// managerQuestions();

const init = () => {
  // run questions
  managerQuestions();
};

init();
