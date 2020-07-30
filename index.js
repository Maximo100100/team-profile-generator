// requires 
const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./src/template.js');
// requires Constructor
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// requires questions
const {managerQ, engineerQ, internQ, newEmployee} = require("./src/questions.js");

// make empty arr
let employees = [];

// check the chosen role
const checkRole = employee => {
    if(employee.role == 'Engineer') {
        return addEngineer();
    }
    if(employee.role == 'Intern') {
        return addIntern();
    }
    else {
        return template(employees);
    }
};

// prompts user to add new member and asks which 
const addMember = () => {
    return inquirer
        .prompt(newEmployee)
        .then(employee => checkRole(employee))
}

//Adds choosen role and pushes the response to employee array
const addEngineer = () => {
    return inquirer
        .prompt(engineerQ)
        .then(employee => {
            employees.push(new Engineer(employee.name, employee.id, employee.email, employee.github));
            return addMember();
        })
};
const addIntern = () => {
    return inquirer
        .prompt(internQ)
        .then(employee => {
            employees.push(new Intern(employee.name, employee.id, employee.email, employee.school));
            return addMember();
        })
};

console.log('Create your team answering the following')
inquirer
// questions start for the manager, pushes new manager
    .prompt(managerQ)
    .then(employee => {
        employees.push(new Manager(employee.name, employee.id, employee.email, employee.office));
    })
    .then(addMember)
    .then(data => {
        console.log('Your html page is ready find it in dist/');
        fs.writeFile('./dist/index.html', data, err => {
          if (err) throw new Error(err);
        })
      });