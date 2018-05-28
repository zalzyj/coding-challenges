Count the number of Duplicates

Write a function duplicateCount(text) that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

Algorithm duplicateCount(text)
requires: a string
returns: the number of letters or numbers that appear more than once

for each letter in the string. if the letter is not in the hash table insert it else increament the counter of the letter.
lastly walk through the hash table and count the items that the counter is greater than 1. [time complexity: O(n) Use associate array]