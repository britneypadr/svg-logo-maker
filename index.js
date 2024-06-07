const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function getUserInput() {
    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be 3 characters or less.',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hex value):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hex value):',
      },
    ];
  
    return inquirer.prompt(questions);
  }  