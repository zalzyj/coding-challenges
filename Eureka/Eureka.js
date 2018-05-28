//Gien a number the function returns the list of all digits in a reverse order
function digitize(n) {
    var initialArray = ("" + n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
        reversedArray[i] = parseInt(initialArray.shift(), 10);
    }
    return reversedArray;
}

//find the sum of arr that satisfy the rule
function sumArray(arr) {
    var sum = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        sum += Math.pow(arr.pop(), i + 1);
    }
    return sum;
}

// Algorithm isEureka(n)
// requires:   a number n
// returns:    true if n is Eureka or false otherwise
function isEureka(n) {
    if (sumArray(digitize(n)) == n) {
        return true;
    } else {
        return false;
    }
}

// Algorithm sumDigPow(a,b)
// requires:   two positive integer a<b 
// returns:    a list of numbers that satisfy the condition

function sumDigPow(a, b) {
    var result = [];
    for (var i = a; i <= b; i++) {
        if (isEureka(i)) {
            result.push(i);
        }
    }
    return result;
}
console.log(sumDigPow(1, 1000));