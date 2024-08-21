"use strict";
function add(numbers) {
    if (numbers === '')
        return 0;
    var splitParameters = ","
    var numberArr = numbers.split(splitParameters);
    return numberArr.reduce(function (acc, curr) {
        var number = parseInt(curr);
        return acc + number;
    }, 0);
}

exports["default"] = add;
console.log(add("1,2,4,5"));
