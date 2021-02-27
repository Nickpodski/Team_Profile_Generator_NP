const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (id, name, email, github) {
    super(id, name, email);
    this.github = github;
    let role = "Engineer";
    this.role = role;
  }
  getRole() {
    return this.role;
  }
  
  getGithub() {
    return this.github;
  }
  
}

module.exports = Engineer;