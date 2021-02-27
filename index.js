const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const managerHtml = require('./src/manager');
const mainHtml = require('./src/mainHtml');
const internHtml = require('./src/intern');
const engineerHtml = require('./src/engineerHTML');
const engineerHTML = require('./src/engineerHTML');


function questions(role) {
  const q = [
  { name: "id", message: `Enter ${role}'s ID: ` },
  { name: "name", message: `Enter ${role}'s Name: ` },
  { name: "email", message: `Enter ${role}'s Email: ` },
  ]
  return q;
};

let team = [];
let cards = '';

const getMan = () => {
  const q = questions('Manager');
  const qM = { name: "office", message: "Enter Office Number: " };
  q.push(qM);
  inquirer
    .prompt(q).then(answers => {
      let teamManger = new Manager(answers.id, answers.name, answers.email, answers.office);
      team.push(teamManger)
      checkDone();
    })
    .catch(er => { console.log(er); })
}

const getEng = () => {
  const q = questions("Engineer");
  const qE = { name: "github", message: "Enter GitHub Username: " };
  q.push(qE);
  inquirer
  .prompt(q).then(answers => {
    let eng = new Engineer(answers.id, answers.name, answers.email, answers.github);
    team.push(eng);
    checkDone();
  })
  .catch(er => { console.log(er); })
}

const getInt = () => {
  const q = questions("Intern");
  const qI = { name: "school", message: "Enter Intern's School: " };
  q.push(qI);
  inquirer
  .prompt(q).then(answers => {
    let intern = new Intern(answers.id, answers.name, answers.email, answers.school);
    team.push(intern);
    checkDone();
  })
  .catch(er => { console.log(er); })
}

const checkDone = () => {
  inquirer
    .prompt({type: 'list', name: 'add', message: "Add another Employee, or are you finished?", choices: ['Engineer', 'Intern', 'Finished']})
    .then(ans => {
      let a = ans.add;
      switch (a) {
        case 'Engineer': 
          getEng();
          return;
        case 'Intern':
          getInt();
          return;
        default:
          generateCards();
          return;
      }
    })
}

const generateHTML = (cards) => {
  const newHtml = mainHtml(cards);
  // console.log(newHtml)
  fs.writeFile('./dist/myTeam.html', newHtml, (err) => {
    err ? console.log(err) : console.log(`Success`);
  });
}

const generateCards = () => {
  team.forEach(ele => {
    let a = ele;
    console.log(a);
    switch(ele.role) {
      case "Manager":
        cards += managerHtml(ele);
        break;
      case "Engineer":
        cards += engineerHtml(ele);
        break;
      case "Intern":
        cards += internHtml(ele);
        break;
      default:
        break;
    }
  });
  console.log(cards);
  generateHTML(cards);
}


const start = () => {
  getMan();
}

start();




