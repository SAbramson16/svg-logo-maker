const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

let shapeChoices = ['Square', 'Triangle', 'Circle']

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter a three character text.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a colour for the text.',
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Please select square, triangle or circle',
        choices: shapeChoices
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a colour for the shape.'
    },
]

class CLI {
    constructor() {
    }

    run() {
        return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);

            if (answers.text.length > 3 || answers.text.length < 1) {
                console.log("Invalid text length for the logo: " + answers.text + " - must be between 1-3 characters. Current length is: " + answers.text.length);
                return;
            }

            let generatedLogo = '<svg version="1" width="300" height="200">';

            switch(answers.shapes) {
                // If shape is square
                case shapeChoices[0]:
                    let square = new Square(answers.shapeColor, answers.textColor, answers.text);
                    generatedLogo += square.render();
                    break;
                // If shape is triangle
                case shapeChoices[1]:
                    let triangle = new Triangle(answers.shapeColor, answers.textColor, answers.text)
                    generatedLogo += triangle.render();
                    break;
                // If shape is circle
                case shapeChoices[2]:
                    let circle = new Circle(answers.shapeColor, answers.textColor, answers.text)
                    generatedLogo += circle.render();
                    break;
                default:
                    console.log("Something is wrong with the shape selection!");
                    break;
            }

            generatedLogo += '</svg>';

            fs.writeFile('./output/logo.svg', generatedLogo, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg'));
            fs.writeFile('./output/index.html', generatedLogo, (err) =>
            err ? console.error(err) : console.log('Generated index.html'));
        });
    }
}

module.exports = CLI;