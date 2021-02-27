const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (id, name, email, github) {
    super(id, name, email);
    this.gitHub = github;
    let role = "Engineer";
    this.role = role;
  }
  getRole(role) {
    return role;
  }
  
  getGithub() {

  }
  
}

module.exports = Engineer;