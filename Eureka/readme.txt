Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....Eureka!!

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!

--------------------------------------------------------
Pseudocode:
Algorithm sumDigPow(a,b)
requires:   two positive integer a<b 
returns:    a list of numbers that satisfy the condition
    var result = [];
    for(var i=a; i<=b; i++){
        if isEureka(i){
            result.push(i);
        }        
    }
    return result;

Algorithm isEureka(n)
requires:   a number n
returns:    true if n is Eureka or false otherwise
    1. convert n to an array of digits with the reverse order:  function digitize(n)
    2. pop up the first number add to sum
    3. pop up the second number then square and add to sum
    ...
    4. keep doing this until the stack is empty.
    5. compare the sum and n if they are the same return true else return false.
    var sum = 0;
    for (var i=1; i<=arr.length;i++){
        sum += (arr.pop())^i;
    }
    if (sum==n) {
        return true;
    }else{
        return false;
    }

