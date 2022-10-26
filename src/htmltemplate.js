const generateHTML = (team) => {
  console.log(team);

  const generateManager = function (manager) {
    return `
        <div class="col">
          <div class="card h-100 ">
            <div class="card-body text-bg-primary">
              <h5 class="card-title text-center">${manager.getName()}</h5>
              <p class="card-text">
                ${manager.getRole()}
              </p>
            </div>
            <div class="card-footer">
              <div class="card" style="width: 18rem">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${manager.getId()}</li>
                  <li class="list-group-item">Email:<a href="#">${manager.getEmail()}</a></li>
                  <li class="list-group-item">
                   <p> Office Number: ${manager.getofficeNumber()} </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        `;
  };

  const generateEnginer = function (engineer) {
    return `

            <div class="col">
              <div class="card h-100 ">
                <div class="card-body text-bg-primary">
                  <h5 class="card-title text-center">${engineer.getName()}</h5>
                  <p class="card-text">
                    ${engineer.getRole()}
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card" style="width: 18rem">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID:${engineer.getId()}</li>
                      <li class="list-group-item">Email:<a href="#">${engineer.getEmail()}</a></li>
                      <li class="list-group-item">
                        GitHub:<a href="#">${engineer.getGithub()}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            `;
  };

  const generateIntern = function (intern) {
    return `
   
            <div class="col">
              <div class="card h-100 ">
                <div class="card-body text-bg-primary">
                  <h5 class="card-title text-center">${intern.getName()}</h5>
                  <p class="card-text">
                    ${intern.getRole()}
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card" style="width: 18rem">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID:${intern.getId()}</li>
                      <li class="list-group-item">Email:<a href="#">${intern.getEmail()}</a></li>
                      <li class="list-group-item">
                        School:<p>${intern.getSchool()}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            `;
  };
  function generateTeamCards() {
    const htmlCardArray = [];

    htmlCardArray.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );

    htmlCardArray.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEnginer(engineer))
    );

    htmlCardArray.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
    );

    return htmlCardArray.join("");
  }
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <nav class="navbar">
          <div class="container-fluid">
            <h1>My Team</h1>
          </div>
        </nav>
        <section class="cards">
          <div class="row row-cols-3 row-cols-md-3 g-4">
       ${generateTeamCards()}
        </section>  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="./dist/index.html"></script>
      </body>
    </html>`;
};


module.exports = generateHTML;
