//Step1: Impor our functions from main.js 

const modules = require('./main')
//console.log(modules)

// const isEven = modules.isEven
const divide = modules.divide
//This is where all of our test cases belong.
//TEST CASE FOR IS EVEN 

// test("it should return true when called with an even number", () => {
//     expect(isEven(4)).toBe(true);
// })

//TEST CASE FOR DIVIDE 
test("It should return a number when called that was divided"), () => {
    expect(typeof divide(4, 2).toBe("number"));
}