const { expect } = require("@jest/globals");

function sum(a, b) {
   return a + b;
};

function multiplyBy3(num) {
   return num * 3;
};

function returnOBJ(){
   return {
      a: 1,
      sauce: true,
   }
}

//module.exports = sum; <---- commented out because we are working on the same file
   // typically your tests will be in a separate file
   
// the tests are below

// test() gets two arguments
   // the first argument will be a string that describes what the test should result to
   //the second argument is a callback function that will actually run the test
      // expect is part of test and takes the function with test parameters
      //.toBe() will hardcode what the result should be

test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
});

test('multiples 2 * 3 to equal 6', () => {
   expect(multiplyBy3(2)).toEqual(6);
});

test('returns correct object', ()=>{
   expect(returnOBJ()).toEqual({
      a: 1,
      sauce: true,
   })
})