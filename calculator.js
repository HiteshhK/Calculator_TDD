"use strict";
function add(numbers) {
    if (numbers === '')
        return 0;
    var splitParameters = /[\n,]/;
    if(numbers.charAt(0)==='/' && numbers.charAt(1)==='/'){
        numbers = getNumbersFromString(numbers,splitParameters);
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
console.log(add("1,2,4,5"));
