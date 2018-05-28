function makeStr(startDay, currentDay, from, to) {
    if (currentDay == startDay) {
        return startDay.toUpperCase() + ": " + from + " - " + to + "\n";
    } else {
        return startDay.toUpperCase() + " - " + currentDay.toUpperCase() + ": " + from + " - " + to + "\n";
    }
}

function isNext(day1, day2) {
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    if ((days.indexOf(day1) + 1) % 7 == days.indexOf(day2)) {
        return true;
    } else {
        return false;
    }

}

function readableTimetable(arr) {

    var readableStr = [];
    var startDay = arr[0].day;
    var currentDay = arr[0].day;
    var from = arr[0].from;
    var to = arr[0].to;

    for (var i = 1; i < arr.length; i++) {
        if ((arr[i].from == from) && (arr[i].to == to) && (isNext(currentDay, arr[i].day))) {
            currentDay = arr[i].day;
        } else {
            readableStr += makeStr(startDay, currentDay, from, to);
            startDay = arr[i].day;
            currentDay = arr[i].day;
            from = arr[i].from;
            to = arr[i].to;
        }
    }
    readableStr += makeStr(startDay, currentDay, from, to);
    return readableStr;
}
console.log(readableTimetable([
    { "day": "mon", "from": "11:00", "to": "23:00" },
    { "day": "tue", "from": "11:00", "to": "23:00" },
    { "day": "wed", "from": "11:00", "to": "23:00" },
    { "day": "thu", "from": "12:00", "to": "23:00" },
    { "day": "fri", "from": "12:00", "to": "23:00" },
    { "day": "sat", "from": "10:00", "to": "23:00" },
    { "day": "sun", "from": "11:00", "to": "23:00" }
]));