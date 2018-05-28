Human readable working hours
============================

Your task in order to complete this Kata is to write a function which formats a working hours schedule, given as an array of objects, in a human-friendly way.
The function must accept an unsorted array. If the array is empty, it just returns an empty array. Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

The output format for one day should be SUN: 11:00 - 23:00.
If two or more days of the week in a row have the same working hours they should be concatenated and have the following format: MON - WED: 11:00 - 23:00. It is much easier to understand with an example:

Input:

const data = [
    {
        "day": "sat",
        "from": "10:00",
        "to": "23:00"
    },
    {
        "day": "mon",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "tue",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "wed",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "thu",
        "from": "12:00",
        "to": "23:00"
    },
    {
        "day": "fri",
        "from": "12:00",
        "to": "23:00"
    },
    {
        "day": "sun",
        "from": "11:00",
        "to": "23:00"
    }
]
Output:

MON - WED: 11:00 - 23:00
THU - FRI: 12:00 - 23:00
SAT: 10:00 - 23:00
SUN: 11:00 - 23:00
Be careful because some days may be missed. You may be given an array only of Monday and Friday with the same hours, but they shouldn't be concatenated.

_____________________________________________________________________________________________________________

Pseudocode:
Algorithm  readableTimetable(arr)
requires:   an array of objects
returns:    a human readable string
    Walk through each obj of the given array, if "from" and "to" properties of current obj are the same as from and to vars and "day" property is the next of currentDay var, concatenate these two (simply replace currentDay by "day" property of the current object), else insert a piece of human readable string and start a new concatenation (need to save vars startDay,currentDay, from and to). 

    var readableStr = [];
    var startDay = arr[0].day;
    var currentDay = arr[0].day;        
    var from = arr[0].from;
    var to = arr[0].to;

    for (var i=1; i<arr.length; i++){
        
        if (arr[i].from == from) & (arr[i].to == to) & (isNext(currentDay, arr[i].day)){
            currentDay = arr[i].day;
        } else {
            readableStr += makeStr(startDay, currentDay,from, to);
            startDay = arr[i].day;
            currentDay = arr[i].day;        
            from = arr[i].from;
            to = arr[i].to;
        }
    }
    readableStr += makeStr(startDay, currentDay,from, to);
    return readableStr;

    Algorithm isNext(day1, day2)
    requires:   2 strings day1 and day2
    returns:    true if day2 is the next day of day1 or false Otherwise
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        if ((days.indexOf(day1)+1)%7 == days.indexOf(day2)){
            return true;
        } else {
            return false;
        }

    Algorithm makeStr(startDay, currentDay,from, to){
        if (currentDay == startDay) {
            return toUpperCase(startDay) + ": " + from + " - " + to + "\n";
        } else {
            return toUpperCase(startDay) + " - " +  toUpperCase(currentDay) + ": " + from + " - " + to + "\n";
        }
    }
