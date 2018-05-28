function duplicateCount(text) {
    var counter = 0;
    var counts = {};
    var keys = [];
    var str = "";
    var tokens = text.toLowerCase().split("");

    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i];
        if (counts[word] === undefined) {
            counts[word] = 1;
            keys.push(word);
        } else {
            counts[word]++;
        }
    }


    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (counts[key] > 1) {
            counter++;
        }

    }

    return counter;

}

console.log(duplicateCount("aabB"));