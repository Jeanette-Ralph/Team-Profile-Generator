const fs = require('fs')

// don't need employee, since these classes extend employee
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// creating the path
const path = require('path');
const generateTeam = require('./generate-app/generateTeam');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

const team = [];

// will ask user if want to add any other team members
const promptMenu = () => {
    inquirer.prompt([
        {
            // needs to be a list for choices

            type: 'list',
            message: 'Do you want to add another team member. If yes, choose from the options below.',
            choices: ['Manager', 'Intern', 'Engineer', 'All done!'],
            name: 'employeesMenu'
        }
    ]).then(choices => {
        switch (choices.employeesMenu) {
            // needs to match the choice
            case 'Manager':
                promptManager();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'Engineer':
                promptEngineer();
                break;
            default:
                makeTeam();
        }
    })
};

// prompting for entering engineer data
const promptEngineer = () => {
    console.log('Add an engineer to your team!');
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter the name of the engineer.',
                name: 'name',

                // adding validation for name input
                validate: engineerName => {

                    if (engineerName) {
                        return true
                    } else {
                        console.log('You must enter a name for the engineer.');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                message: 'Please enter the employee id of the engineer.',
                name: 'id',

                // adding validation for id input
                validate: engineerId => {

                    if (engineerId) {
                        return true
                    } else {
                        console.log('You must enter an employee ID for the engineer.');
                        return false;
                    }
                }

            },

            {
                type: 'input',
                message: 'Please enter the employee email for the engineer.',
                name: 'email',

                // adding validation for email input
                validate: engineerEmail => {

                    if (engineerEmail) {
                        return true;
                    } else {
                        console.log('You must enter the employee email for the engineer.');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                message: 'Please enter the github username for the engineer.',
                name: 'gitHub',

                // adding validation for email input
                validate: engineerGitHub => {

                    if (engineerGitHub) {
                        return true;
                    } else {
                        console.log('You must enter the github username of the engineer.');
                        return false;
                    }
                }
            }
        ]
    ).then(responses => {
        // getting the responses
        console.log(responses);
        const engineer = new Engineer(responses.name, responses.id, responses.email, responses.gitHub);


        // pushing the new instanc of engineer w/ the reponses to the empty array
        team.push(engineer);
        console.log(team);

        // calling prompt menu, so they can keep adding team members
        promptMenu();
    })
};

const promptIntern = () => {
    console.log('Add an intern to your team!');
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the name of the intern.',
            name: 'name',

            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('You must enter a name for the intern.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter  the employee id of the intern.',
            name: 'id',

            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log('You must enter the employee id for the intern.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter  the employee email of the intern.',
            name: 'email',

            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log('You must enter the employee email for the intern.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter  the school of the intern.',
            name: 'school',

            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log('You must enter the school for the intern.');
                    return false;
                }
            }
        }
    ]
    ).then(responses => {
        console.log(responses);
        const intern = new Intern(responses.name, responses.id, responses.email, responses.school);
        team.push(intern);
        promptMenu();
    })
};

const promptManager = () => {
    console.log('Add a manager to your team!');
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the name of the manager.',
            name: 'name',

            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('You must enter a name for the manager.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter  the employee id of the manager.',
            name: 'id',

            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('You must enter the employee id for the manager.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter  the employee email of the manager.',
            name: 'email',

            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('You must enter the employee email for the manager.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter the office number of the manager.',
            name: 'officeNumber',

            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log('You must enter the office number for the manager.');
                    return false;
                }
            }
        }
    ]
    ).then(responses => {
        console.log(responses);
        const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
        team.push(manager);
        promptMenu();
    })
};

const makeTeam = () => {
    console.log('Your team is created!');

    // make conditional if output directory does not exsist, then make it to the one we have 
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    // writing the file to the specfied path from above
    fs.writeFileSync(outputPath, generateTeam(team), 'utf-8');

}

promptEngineer();





