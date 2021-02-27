const Employee = require("./Employee");

class Intern extends Employee {
  constructor (id, name, email, school) {
    super(id, name, email);
    this.school = school;
    let role = "Intern";
    this.role = role;
  }
  getRole() {
    return this.role;
  }

  getSchool() {
    return this.school;
  }
  
}

module.exports = Intern;