function pit(description,testcases,testfunction){
    testcases.forEach(({input,expected})=>{
        it(`${description} ${JSON.stringify(input)}=> ${expected}`,()=>{
            testfunction(input,expected);
        });
    });
}
