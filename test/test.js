let should = require('should');
let sum = require('../sum');

describe('sum.js', () => {
    it('soma deve retornar 5', () => {
        sum(2, 3).should.be.equal(5);
    });
    it('soma deve retornar 20', () => {
        sum(10, 10).should.be.equal(20);
    })
})