Insertion sort
    This is the simplest sorting algorithm that builds the final sorted list one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort has the features: 1. Simple implementation; 2. O(n2) same as selection sort or bubble sort; 

Description:
    star1:  list [12, 3, 1, 5, 8]     
    step2:  list [3, 12, 1, 5, 8], i=1 j=0-1 swap(12,3)    
    step3:  list [1, 3, 12, 5, 8], i=2 j=0-2 swap(3,1) swap(12,3)   
    step4:  list [1, 3, 5, 12, 8], i=3 j=0-3 swap(12,5)
    step5:  list [1, 3, 5, 8, 12], i=4 j=0,4 swap(12,8)

Pseudocode:
    Algorithm insertionSort(list)
    requires:   an array of numbers
    returns:    the sorted list 
        var i = 1; 
        while (i < list.length){
            var j = 0;
            while (j<i){
                if list[i] < list[j]{
                    swap(list[i], list[j]);
                }
                j++;
            }
            i++;
        }
    