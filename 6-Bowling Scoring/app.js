function bowlingScore(frames){
    var total = 0;
    var scores = [];
    for (var i=0; i<10; i++){
        if (frames[i].first_roll==10){
            scores[i] = 10 + getNextTwoRolls(i);
        } else if (frames[i].first_roll+frames[i].second_roll==10){
            scores[i] = 10 + getNextRoll(i);
        } else {
            scores[i] = frames[i].first_roll+frames[i].second_roll;
        }
    }
    for (var i=0; i<10; i++){
        total += scores[i];
    }
    return total;
}

function getNextRoll(i){
    var score = 0;
    if (i<9){
        score += frames[i+1].first_roll;
    } else {
        score += frames[i].third_roll;
    }
    return score;
}

function getNextTwoRolls(i){
    var sum = 0;
    if (i<9){
        sum += frames[i+1].first_roll;
        if ("second_roll" in frames[i+1]){
            sum += frames[i+1].second_roll;
        } else {
            sum += frames[i+2].first_roll;
        }        
    } else {
        sum += frames[i].second_roll+frames[i].third_roll;
    }
    return sum;
}

frames = [
    {
        "id": 0,
        "first_roll" : 10
    },
    {
        "id": 1,
        "first_roll": 7,
        "second_roll": 3        
    },
    {
        "id": 2,
        "first_roll": 9,
        "second_roll": 0        
    },
    {
        "id": 3,
        "first_roll": 10    
    },
    {
        "id": 4,
        "first_roll": 0,
        "second_roll": 8        
    },
    {
        "id": 5,
        "first_roll": 8,
        "second_roll": 2        
    },
    {
        "id": 6,
        "first_roll": 0,
        "second_roll": 6        
    },
    {
        "id": 7,
        "first_roll": 10       
    },
    {
        "id": 8,
        "first_roll": 10       
    },
    {
        "id": 9,
        "first_roll": 10,
        "second_roll": 8,
        "third_roll": 1        
    }
]

console.log("The total score of the game is: ", bowlingScore(frames));