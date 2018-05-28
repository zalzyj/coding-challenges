function ninjaPassed(n, k){
    var noOfCatch = parseInt((n-1) / (k+1))+1;
    
    return n-noOfCatch;
}

console.log("n=7,k=3: the number of ninjas passed is ", ninjaPassed(7,3));

console.log("n=5,k=1: the number of ninjas passed is ", ninjaPassed(5,1));

console.log("n=1000,k=0: the number of ninjas passed is ", ninjaPassed(1000,0));