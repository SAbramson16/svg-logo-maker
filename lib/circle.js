const Logo = require('./logo.js');

class Circle extends Logo {
    constructor(background, textColor, text) {
        super(background, textColor, text);
    }

    render() {
        return  `<circle cx="150" cy="100" r="80" fill="${this.background}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Circle;