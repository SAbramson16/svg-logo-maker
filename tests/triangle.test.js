const Triangle = require('../lib/triangle.js')

describe('Render Triangle', () => {
    it('should return false if the background colour, the text colour, and the text are not as expected', () => {
        const triangle = new Triangle("orange", "purple", "DMA");
        expect(triangle.render()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill="orange"/><text x="50" y="80" font-size="30" text-anchor="middle" fill="purple">DMA</text>`);
    });
});
