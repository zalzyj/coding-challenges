How to Score in 10-pin bowling game

Game
A game consists of 10 frames. A maximum of two deliveries is made in each frame except in the 10th frame, when three deliveries are made if the player has scored a strike or a spare in that frame.

Strike
A strike is scored when all the pins are knocked down by the first ball rolled in a frame. It is marked with an X.  Because a strike earns 10 pins plus a bonus of all the pins knocked down by the next two balls, no figure is entered until the next two balls are rolled. A strike in the 10th frame earns two extra rolls.

Spare
A spare is scored when all pins are knocked down with two deliveries. It is marked with a /.  Because a spare earns 10 pins plus a bonus of all the pins knocked down by the next single ball, no score is entered until the first ball of the next frame is rolled.  A spare in the 10th frame earns one extra roll.

Open Frame
An open frame occurs when there are pins left standing after two balls. There is no penalty for an open frame, other than that of failing to gain the bonuses for a strike or a spare. When an open frame is made simply add those pins knocked down to the total in the previous frame.

=================================================

Pseudocode:
Algorithm bowlingScore(frames)
requires: an array of Javascript objects
returns: the total score of the game

eg. frames = [
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

the function will return 167