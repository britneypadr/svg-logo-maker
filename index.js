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
  
  function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeInstance;
    switch (shape) {
      case 'Triangle':
        shapeInstance = new Triangle();
        break;
      case 'Circle':
        shapeInstance = new Circle();
        break;
      case 'Square':
        shapeInstance = new Square();
        break;
    }
  
    shapeInstance.setColor(shapeColor);
  
    const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
  
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }  