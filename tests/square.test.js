const Square = require('../lib/square.js')

describe('Render Square', () => {
    it('should return false if the background colour, the text colour, and the text are not as expected', () => {
        const square = new Square("pink", "yellow", "JPP");
        expect(square.render()).toEqual(`<rect x="50" y="50" width="100" height="100" fill="pink"/><text x="100" y="110" font-size="30" text-anchor="middle" fill="yellow">JPP</text>`);
    });
});
