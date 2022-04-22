// links the inquirer and fs modules
const inquirer = require('inquirer');
const fs = require('fs');

// Uses the inquirer module to ask the user for multiple inputs in the integrated terminal and stores them within objects
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: "installation",
            message: "Please enter some Installation Instructions"
        },
        {
            type: 'input',
            name: "license",
            message: "What license does this application use? (lowercase only please)"
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can the application be used?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How might a user test the application?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter the names of all contributing devs'
        }
    ])
    .then((data) => {
        console.log(data);
        //logs all of the md code in one large string as a const variable with calls to the earlier objects for the given answers, also lacks indentation since it broke the code
        const readMe = `## Title: ${data.title}
![](https://img.shields.io/badge/license-${data.license}-green)
[${data.license}](https://choosealicense.com/licenses/${data.license})
        
## Table of Contents

--[Description](#description)

--[Usage](#usage)

--[Installation](#installation)

--[Testing](#testing)

--[Contributing](#contributing)

--[Questions](#questions)


## Description: 
${data.description} 

## Usage:
${data.usage}

## Installation: 
${data.installation} 

## Testing:
${data.tests}

## Contributing: 
${data.contributing} 

## Questions: 
If you have any questions you can reach me at:
[GitHub](https://www.github.com/${data.github}) or at [email](mailto:${data.email}).`

// Uses the fs module to generate a md file with the user's input at the title, also checks for errors and console logs if an error or success
        fs.writeFile(`${data.title}.md`, readMe, (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    });