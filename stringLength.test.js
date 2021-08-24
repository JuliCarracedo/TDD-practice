const { it } = require("@jest/globals");
const stringLength = require("./stringLength");

it('returns null for length of 0', () =>{expect(stringLength('')).toBeNull()});
it('returns string length of 5', () =>{expect(stringLength('hello')).toBe(5)});
it('returns null for length of 11', () =>{expect(stringLength('hello world')).toBeNull()});

