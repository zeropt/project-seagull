/**
 * Authors: Alexa Marquez,Jonathan Graber,Lokinah Khan,Marlene Lopez,Riley Mann
 * Created: 24 NOV 2021
 * License: Public Domain
 */

let birdIndex = 0;

let _pi = 3.14159265;

//This object stores all the data for the individual birds
//keyframe data currently must be sorted by [in] lowest -> highest
let birds = [

    {
        name: "Western Gull",
        description: "",
        body: {
            src: "img/test-body.jpg",
            keyframes: [
                {in: (0)*_pi, x: 0, y: -60, angle: (0)*_pi}
            ]
        },
        head: {
            src: "img/test-head.jpg",
            keyframes: [
                {in: (-1)*_pi, x: -200, y: -100, angle: (-3/4)*_pi},
                {in: (-1/2)*_pi, x: 0, y: -200, angle: (-1/2)*_pi},
                {in: (0)*_pi, x: 300, y: -300, angle: (-1/8)*_pi}
            ]
        },
        jaw: {
            src: "",
            keyframes: [
                {in: (0)*_pi, x: 0, y: 0, angle: (0)*_pi}
            ]
        }
    }

];