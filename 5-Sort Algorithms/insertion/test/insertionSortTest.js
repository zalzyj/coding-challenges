const assert = require("chai").assert;
const app = require("../insertionSort");


describe('Test insertionSort', function() {

    it('insertionSort([12, 3, 1, 5, 8]) should return [1, 3, 5, 8, 12]', function() {
        assert.deepEqual(app.insertionSort([12, 3, 1, 5, 8]), [1, 3, 5, 8, 12]);
    });
    it('insertionSort([]) should return []', function() {
        assert.deepEqual(app.insertionSort([]), []);
    });
});