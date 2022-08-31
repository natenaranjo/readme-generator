// Declaring the dependencies and variables
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt (
        [
            {
                type: 'input',
                message: 'Enter a the title of the project',
                name: 'title',
                validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
            },
            {
                type: 'input',
                message: 'Describe the project:',
                name: 'description',
                validate: (value) => { if(value){return true} else {return ' Enter a Description to continue'}},
            },
            {
                type: 'input',
                message: 'What is the installation process?',
                name: 'installation',
                validate: (value) => { if(value){return true} else {return ' Enter N/a if none or a Installation Process'}},
            },
            {
                type: 'input',
                message: 'What is the usage of this project?',
                name: 'usage',
                validate: (value) => { if(value){return true} else {return ' Enter N/a if none or the usage process to continue'}},
            },
            {
                type: 'input',
                message: 'Who all contributed to the project?',
                name: 'contribution',
                validate: (value) => { if(value){return true} else {return ' Enter a N/a or a contibutor to continue'}},
            },
            {
                type: 'input',
                message: 'Is there any testing procedures?',
                name: 'test',
                validate: (value) => { if(value){return true} else {return ' Enter a N/a or a test procedures to continue'}},
            },
            {
                type: 'list',
                message: 'What license to use on this project?',
                name: 'license',
                choices: ['MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A'],
                validate: (value) => { if(value){return true} else { return 'Make a choice.'}}
            },
            {
                type: 'input',
                message: 'Github Username: ',
                name: 'username',
                validate: (value) => { if(value){return true} else {return 'Enter your Github username to continue.'}}
            },
            {
                type: 'input',
                message: 'Email Address: ',
                name: 'email',
                validate: (value) => {if(value){return true}else{return 'Enter your email to continue.'}}
            }
        ]
    )

