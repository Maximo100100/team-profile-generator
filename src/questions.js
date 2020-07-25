
const newEmployee = [
    {
        type: 'list',
        name: 'role',
        message: 'Choose an employee to add: ',
        choices: ['Engineer', 'Intern']
    }
];

const managerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the team manager: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the name of the team manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the team manager: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the team manager: ',
    },
    {
        type: 'input',
        name: 'office',
        message: 'Enter the office number of the team manager: ',
    }
];

const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the engineer: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the name of the engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the team manager: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the engineer: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the github username of the engineer: ',
    }
];

const internQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the intern: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the name of the intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the intern: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the intern: ',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school of the intern: ',
    }
];

module.exports = { newEmployee , managerQ, engineerQ, internQ };