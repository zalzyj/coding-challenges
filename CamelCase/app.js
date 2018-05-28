module.exports = {
    toCamelCase: function(str) {
        var result = "";
        for (var i = 0; i < str.length; i++) {
            if ((str.charAt(i) == "-") || (str.charAt(i) == "_")) {
                i++;
                result += str.charAt(i).toUpperCase();
            } else {
                result += str.charAt(i);
            }
        }
        return result;
    }
}