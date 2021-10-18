function sum(a, b) {
   return a + b;
}

//module.exports = sum; <---- commented out because we are working on the same file
   // typically your tests will be in a separate file
   
// the test is below

test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
});