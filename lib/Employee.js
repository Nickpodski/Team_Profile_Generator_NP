const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.emial = email;
  }
  //  start() {
  //    this.getName();
  //  }

   getName() {

   }

   getId() {

   }

   getEmail() {

   }

   getRole() {

   }
}

module.exports = Employee;