module.exports = {
    hello: function() {
        return "Hello Jacky";
    },
    insertionSort: function(list) {
        var i = 1;
        while (i < list.length) {
            var j = 0;
            while (j < i) {
                if (list[i] < list[j]) {
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
                j++;
            }
            i++;
        }
        return list;
    }
}