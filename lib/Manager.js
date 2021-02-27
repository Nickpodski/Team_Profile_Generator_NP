const Employee = require("./Employee");

class Manager extends Employee {
  constructor (id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
    let role = "Manager"
    this.role = role;
  }
  getRole() {
    return this.role;
  }
  
}

module.exports = Manager;