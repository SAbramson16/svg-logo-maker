const Circle = require('../lib/circle.js')

describe('Render Circle', () => {
    it('should return false if the background colour, the text colour, and the text are not as expected', () => {
        const circle = new Circle("red", "blue", "SDA");
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SDA</text>`);
    });
});
