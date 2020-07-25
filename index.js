var inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { newEmployee, managerQ, engineerQ, internQ } = require("./src/questions.js");
const { writeFile, copyFile } = require('./src/generate-site.js');

let employees = [];

const checkRole = employee => {
    if(employee.role == 'Engineer') {
        return addEngineer();
    }
    else if(employee.role == 'Intern') {
        return addIntern();
    }
    else {
        return generatePage(employees);
    }
}

const addTeam = () => {
    return inquirer
        .prompt(rolePrompt)
        .then(employee => checkRole(employee))
}

const addEngineer = () => {
    return inquirer
        .prompt(engineerQ)
        .then(employee => {
            employees.push(new Engineer(employee.name, employee.id, employee.email, employee.github));
            return addTeam();
        })
}

const addIntern = () => {
    return inquirer
        .prompt(internQ)
        .then(employee => {
            employees.push(new Intern(employee.name, employee.id, employee.email, employee.school));
            return addTeam();
        })
}

inquirer
    .prompt(managerQ)
    .then(employee => {
        employees.push(new Manager(employee.name, employee.id, employee.email, employee.office));
    })
    .then(addTeam)
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then((writeFileResponse) => {
        if(writeFileResponse.ok) {
            return copyFile();
        }
        console.log(writeFileResponse);
    })
    .then(copyFileResponse => {
        if(copyFileResponse.ok) {
            return console.log('Success! File was created.');
        }
        console.log(copyFileResponse);
    })
    .catch(error => {
        console.log(error);
    });

const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', fileContent, err => {
                if (err) {
                    reject(err);
                    return;
                }
        
                resolve({
                    ok: true,
                    message: 'File created!'
                });
            });
        });
    };