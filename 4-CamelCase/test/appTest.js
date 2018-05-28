const assert = require("chai").assert;
const app = require("../app");

//Results
let resultStr = app.toCamelCase("today-is_good");
let expected = 'todayIsGood';

describe('App toCamelCase', function() {
    it('toCamelCase should return a string in camel case format', function() {
        assert.equal(resultStr, expected);
    });
});