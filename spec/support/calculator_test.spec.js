const calc = require('../../calculator.js');
function pit(description,testcases,testfunction){
    testcases.forEach(({input,expected})=>{
        it(`${description} ${JSON.stringify(input)}=> ${expected}`,()=>{
            testfunction(input,expected);
        });
    });
}
describe("AddStringCalculator",()=>{
    const testCases = [{input:"",expected:0},
        {input:"1",expected:1},
        {input:"1,2,3,4,5",expected:15},
        {input:"1\n2,3",expected:6},
        {input:"//;\n1;2",expected:3},
        {input:"1000,2,3\n4",expected:1009},
    ];

    pit("should return the correct sum for input",testCases,(input,expected)=>{
        expect(calc.add(input)).toBe(expected);
    });
})