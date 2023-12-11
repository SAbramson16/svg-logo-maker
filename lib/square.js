const Logo = require('./logo.js');

class Square extends Logo {
    constructor(background, textColor, text) {
        super(background, textColor, text);
    }

    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.background}"/><text x="100" y="110" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Square;