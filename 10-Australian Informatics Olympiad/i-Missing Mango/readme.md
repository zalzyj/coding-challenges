Missing Mango

===========================

Ishraq and Clement have lost their mango and need help finding it again! Ishraq and Clement are standing on a straight line. Their positions are denoted by a single integer specifying how far they are from the left-hand end of the line. The mango is also on the line, but its exact location is unknown. Both Ishraq and Clement know how far away from the mango they are, but they don't know what direction the mango is in. Given the location of Ishraq and Clement, and their respective distances to the mango, determine the location of the mango. It is guaranteed that there will always be a single possible location for the mango.

Input
The first and only line of input will contain the four non-negative integers Ix, Cx, Id, and Cd, representing Ishraq's location, Clement's location, Ishraq's distance to the mango, and Clement's distance to the mango, respectively.
Output
Output should be a single integer, the location of the mango. You should note that this value might be less than zero.

Sample Input 1
2 6 1 3
Sample Output 1
3
Sample Input 2
8 3 7 2
Sample Output 2
1
Sample Input 3
23 40 17 0
Sample Output 3
40

Explanation 1
The first two numbers in the input respectively give Ishraq's and Clement's locations. So we can see that they are standing at locations 2 and 6. Now, we also know that Ishraq is distance 1 away from the mango, so the mango must either be at location 1 or 3. Clement knows that the mango is distance 3 away from him, so we can see that the mango has to be at location 3.

Explanation 2
Here, Ishraq is standing at 8 and Clement is standing at 3. The mango has to be distance 7 from location 8 and distance 2 from location 3. Therefore the mango must be at location 1.

Explanation 3
In this case, Clement is standing on the mango.