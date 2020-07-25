const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const managerList = managerArr => {
    if(!ifEmpty(managerArr)) {
      return '';
    }
  
    return `
    `;
  };

const engineersList = engineersArr => {
  if(!ifEmpty(engineersArr)) {
    return '';
  }

    return `
    `;
};

const internList = internArr => {
  if(!ifEmpty(internArr)) {
    return '';
  }

  return `
  `;
};

module.exports = employeesArr => {
    const [ manager, ...employees ] = employeesArr;

    const engineers = employees.filter(employee => filterRole(employee, 'Engineer'));
    const interns = employees.filter(employee => filterRole(employee, 'Intern'));

    return `
    `;
};