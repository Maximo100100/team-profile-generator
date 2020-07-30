const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// check if the arr is empty
const ifEmpty = (arr) => {
  if(arr == undefined || arr.length == 0) {
    return false;
  }
  return true;
}

// returns employee role to filter 
const filterRole = (employee, role) => {
  if(employee.getRole() == role) {
    return employee;
  }
}

// engineer template
const engineersList = engineerArr => {
//if empty return empty string
  if(!ifEmpty(engineerArr)) {
    return '';
  }
//uses map to do the fuction for every engineer
  return `
  ${engineerArr.map(engineer => {
  return `
<div>
  <h4>${engineer.getName()}</h4>
</div>
<ul>
  <li>ID: ${engineer.getId()}</li>
  <li>Email: <a href="mailto:${engineer.getEmail()}" target='_blank'> ${engineer.getEmail()}</a></li>
  <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target='_blank'> ${engineer.getGithub()}</a></li> 
</ul>
  `
  })}`;
};

// intern template
const internList = internArr => {
//if empty return empty string
  if(!ifEmpty(internArr)) {
    return '';
  }
//uses map to do the fuction for every intern
  return `
  ${internArr.map(intern => {
  return `
<div>
  <h4>${intern.getName()}</h4>
</div>
<ul>
  <li>ID: ${intern.getId()}</li>
  <li>School: ${intern.getSchool()}</li>
  <li>Email: <a href="mailto:${intern.getEmail()}" target='_blank'> ${intern.getEmail()}</a></li>
</ul>
`
  })}`;
};

// Return html page and makes the employeesArr from manager and employees
module.exports = employeesArr => {
    const [ manager, ...employees ] = employeesArr;
// filters objects by role and adds them to their lists respectively 
    const engineers = employees.filter(employee => filterRole(employee, 'Engineer'));
    const interns = employees.filter(employee => filterRole(employee, 'Intern'));
// returns page with engineers and interns added 
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Profile</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<!--page content -->
  <div class="container">
    <div class="page-header">
      <h1>Your Team</h1>
    </div>
  <div>
  <h4>${manager.getName()}</h4>
  </div>
      <ul>
        <li>ID: ${manager.getId()}</li>
        <li>Office Number: ${manager.getOfficeNumber()}</li>
        <li>Email: <a href="mailto:${manager.getEmail()}" target='_blank'> ${manager.getEmail()}</a></li>
      </ul>
      ${engineersList(engineers)}
      ${internList(interns)}
  </div>
</body>
</html>
    `;
};