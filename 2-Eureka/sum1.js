function sumArray(arr) {
    var sum = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        sum += Math.pow(arr.pop(), i + 1);
    }

    return sum;
}

console.log(sumArray([4, 8, 9]));