const inquirer = require('inquirer');
const fs = require('fs');

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
        // {
        //     type: 'list',
        //     name: "liscense",
        //     message: "What license does this application use?"
        // },
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

        let readMe = `Description: ${data.description} 
        Installation Instructions: ${data.installation} 
        Contributing: ${data.contributing} 
        Questions: If you have any questions you can reach me at ${data.github} or at my email: ${data.email}.`

        fs.writeFile(`${data.title}.md`, mdFile, (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    });