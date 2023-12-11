const Logo = require('./logo.js');

class Triangle extends Logo {
    constructor(background, textColor, text) {
        super(background, textColor, text);
    }

    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.background}"/><text x="50" y="80" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Triangle;