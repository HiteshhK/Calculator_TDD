"use strict";
function add(numbers) {
    if (numbers === '')
        return 0;
    var splitParameters = /[\n,]/;
    if(numbers.charAt(0)==='/' && numbers.charAt(1)==='/'){
        const params = numbers.indexOf("\n");
        splitParameters = new RegExp(numbers.substring(2,params));
        numbers= numbers.substring(params+1);
    }
    var numberArr = numbers.split(splitParameters);
    return numberArr.reduce(function (acc, curr) {
        var number = parseInt(curr);
        return acc + number;
    }, 0);
}

function getNumbersFromString(numbers,splitParameters){
   
}

exports["default"] = add;
console.log(add("1,2,3,4,5"));
