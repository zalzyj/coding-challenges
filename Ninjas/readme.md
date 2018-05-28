Ninjas
There are N ninjas trying to get inside, one at a time. You wait and watch carefully, grabbing the first one who comes past. However, in the time it takes you to securely tie up this first ninja, K other ninjas manage to sneak past you. Nevertheless, you persevere, grabbing the next ninja. Again, while you tie them up, K more ninjas sneak past. This continues until all of the ninjas have tried to get in.

In the above example, K=2. That is, for each ninja you tie up, the following two ninjas will sneak past. You catch the first ninja who comes past, and then ninjas #2 and #3 sneak past you. You catch ninja #4, and then ninjas #5 and #6 sneak past you. This repeats until all N ninjas have either been caught or have snuck past you.

Your task is to write a program that reads in the values of N and K, and calculates the number of ninjas who sneak past you.

Constraints
To evaluate your solution, the judges will run your program against several different input files. All of these files will adhere to the following bounds:

0 <= N <= 10,000, where N is the number of ninjas trying to get inside.
0 <= K <= 10,000, where K is the number of ninjas who sneak past you every time you catch one.
Input
Your program should read from the file ninjain.txt. This file will consist of a single line containing the two integers N and K separated by a single space.

Output
Your program should write to the file ninjaout.txt. Your output file should consist of a single integer: the number of ninjas who sneak past you.

Sample Input 1
7 3
Sample Output 1
5
Sample Input 2
5 1
Sample Output 2
2
Sample Input 3
10000 0
Sample Output 3
0

Explanation
In the first sample you catch the 1st and 5th ninjas, while the other five, (the 2nd, 3rd, 4th, 6th and 7th ninjas), sneak past.
In the second sample for each ninja you catch, you miss one. This means you catch the 1st, 3rd and 5th ninjas, missing the 2nd and 4th ninjas.

In the last sample you have learnt how to tie ninjas up super fast, and so you are able to get back in position in time to catch the next ninja. As a result, not a single ninja manages to get through.