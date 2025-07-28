/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10//function resets
 * counter() // 11 function decrement
 * counter() // 12 function increment
 */