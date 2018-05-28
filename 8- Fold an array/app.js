function foldArray(array, runs) {

    if ((array.length == 0) || (array.length == 1) || (runs == 0)) {
        return array;
    } else {
        return foldArray(fold(array), runs - 1);
    }
}

function fold(array) {
    var result = [];
    var len = array.length;
    var mid = parseInt(len / 2);

    for (var i = 0; i < mid; i++) {
        result[i] = array[i] + array[len - i - 1];
    }
    if (len % 2 == 1) {
        result[mid] = array[mid];
    }
    return result;
}

console.log(foldArray([1, 2, 3, 4, 5], 2));