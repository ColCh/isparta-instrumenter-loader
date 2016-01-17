import simple from 'js/simple.js';

describe('simple', function () {
    it('should compute x*x from 2', function () {
        simple(2).should.be.equal(4);
    });
});
