var assert = require('assert');
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function(){
//             assert.equal(-1, [1,2,3].indexOf(4));
//         });
//     });
// });
describe('Math', function() {
    describe('testOne', function() {
        it('Deve passar se 3*3 igual a 9', function(){
            assert.equal(9, (3*3));
        });
    });
    describe('testTwo', function() {
        it('Deve passar se (3–4)*8 igual a -8', function() {
            assert.equal(-8, (3-4)*8);
        });
    });
});