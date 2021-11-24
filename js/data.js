/**
 * Authors: Alexa Marquez,Jonathan Graber,Lokinah Khan,Marlene Lopez,Riley Mann
 * Created: 24 NOV 2021
 * License: Public Domain
 */

//This object stores all the data for the individual birds
//keyframe data currently must be sorted by [in] lowest -> highest
let birds = [
    {
        name: "Western Gull",
        description: "",
        keyframes: {
            body: [
                {in: -3, x: 0, y: 0, angle: 0},
                {in: 0, x: 100, y: -100, angle: 6.28}
            ],
            head: [
                {in: 0, x: 0, y: 0, angle: 0}
            ],
            jaw: [
                {in: 0, x: 0, y: 0, angle: 0}
            ]
        }
    }
];