class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    let role = "Employee";
    this.role = role;
  }
   getName() {
    return  this.name;
   }

   getId() {
    return this.id;
   }

   getEmail() {
    return this.email;
   }

   getRole() {
    return this.role;
  }
}

module.exports = Employee;