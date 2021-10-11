const managerCard = (manager) => {
  return ` 
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <i class="fas fa-mug-hot"><span><h4>Manager</h4></span></i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email:<a href="mailto: ${manager.email}">${manager.email}</a></p>
                    <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
        `;
};

const engineerCard = (engineer) => {
  return ` 
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <i class="fas fa-glasses"><span><h4>Engineer</h4></span></i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email:<a href="mailto: ${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>
        `;
};

const internCard = (intern) => {
  return ` 
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <i class="fas fa-user-graduate"><span><h4>Intern</h4></span></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto: ${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
        `;
};

const generateEmployeePage = (data) => {
  let teamCards = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") {

      teamCards += managerCard(data[i]);

    } else if (data[i].getRole() === "Intern") {

      teamCards += internCard(data[i]);

    } else {

      teamCards += engineerCard(data[i]);

    }
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>team-profile-generator</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
    </head>
      <body>
        <header>
          <nav class="navbar" id="navbar">
          <h1 class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text"
          >Team Profile</h1>
    </nav>
  </header>
      <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${teamCards}
                </div>
            </div>
        </main>
        
    </body>
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>
    </html>`;
};

module.exports = generateEmployeePage;


