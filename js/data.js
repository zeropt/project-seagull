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
            scale: 2.0,
            keyframes: [
                {in: (0)*_pi, x: 0, y: -106, angle: (0)*_pi}
            ]
        },
        head: {
            src: "img/test-head.jpg",
            scale: 2.0,
            keyframes: [
                {in: (-1)*_pi, x: -400, y: -300, angle: (-3/4)*_pi},
                {in: (-1/2)*_pi, x: 0, y: -600, angle: (-1/2)*_pi},
                {in: (0)*_pi, x: 500, y: -400, angle: (-1/8)*_pi}
            ]
        },
        jaw: {
            src: "img/test-head.jpg",
            scale: 1.0,
            keyframes: [
                {in: (-1)*_pi, x: 0, y: 80, angle: (-1/4)*_pi},
                {in: (0)*_pi, x: 0, y: 120, angle: (1/4)*_pi},
            ]
        },
        neck: {
            color: "#FFFFFF",
            bodyEnd: {
                width: 160,
                keyframes: [
                    {in: (0)*_pi, x: 80, y: -60, angle: (-3/8)*_pi, mag: 100}
                ]
            },
            headEnd: {
                width: 80,
                keyframes: [
                    {in: (0)*_pi, x: -120, y: 80, angle: (3/4)*_pi, mag: 20}
                ]
            }
        }
    }

];