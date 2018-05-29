function palindrome(str){
    var reg = /[\W_]/g;
    var smallStr = str.toLowerCase().replace(reg, "");
    console.log(smallStr);

    var reverseStr = "";
    for (var i=str.length-1; i>=0; i--){
        reverseStr += str[i];
    }
    if (reverseStr===str){
        return true;
    }else{
        return false;
    }
    
}

console.log(palindrome("ey2$  e)--1"));