//!! function to generate each team menbers html
const generateManager = function (manager) {
  return `
        <div class="col">
          <div class="card h-100 ">
            <div class="card-body text-bg-primary">
              <h5 class="card-title text-center">${manager.getName}</h5>
              <p class="card-text">
                ${manager.getRole}
              </p>
            </div>
            <div class="card-footer">
              <div class="card" style="width: 18rem">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${manager.getId}</li>
                  <li class="list-group-item">Email:<a href="#">${manager.getEmail}</a></li>
                  <li class="list-group-item">
                    ${manager.getofficeNumber}
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
                  <h5 class="card-title text-center">${engineer.getName}</h5>
                  <p class="card-text">
                    ${engineer.getRole}
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card" style="width: 18rem">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID:${engineer.getId}</li>
                      <li class="list-group-item">Email:<a href="#">${engineer.getEmail}</a></li>
                      <li class="list-group-item">
                        GitHub:<a href="#">${engineer.getGithub}</a>
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
                  <h5 class="card-title text-center">${intern.getName}</h5>
                  <p class="card-text">
                    ${intern.getRole}
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card" style="width: 18rem">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID:${intern.getId}</li>
                      <li class="list-group-item">Email:<a href="#">${intern.getEmail}</a></li>
                      <li class="list-group-item">
                        School:<a href="#">${intern.getSchool}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            `;
};

module.exports = {
  generateManager,
  generateEnginer,
  generateIntern,
};
