Fold an array

In this kata you have to write a method that folds a given array of integers by the middle x-times.

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

=========================================================================

Pseudocode: recursive
function foldArray(array, runs)
requires: an array & the number of times of folding the array
returens: a folded array
    if (array.length==0||array.length==1||runs==0){
        return array;
    }  else {
        return foldArray(fold(array), runs-1)
    }
    
function fold(array)
requires: an array with length>1
returens: a folded array      
    for (var i = 0; i< parseInt(len / 2); i++) {
            result[i] = array[i] + array[len - i - 1];
        }    
    if isOdd(array.length) {
        result[mid] = array[mid];
    }
    return result;
