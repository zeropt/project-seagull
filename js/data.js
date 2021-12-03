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
            scale: 3.0,
            keyframes: [
                {in: (0)*_pi, x: 0, y: -160, angle: (0)*_pi}
            ]
        },
        head: {
            src: "img/test-head.jpg",
            scale: 3.0,
            keyframes: [
                {in: (-1)*_pi, x: -600, y: -450, angle: (-3/4)*_pi},
                {in: (-1/2)*_pi, x: 0, y: -600, angle: (-1/2)*_pi},
                {in: (0)*_pi, x: 900, y: -900, angle: (-1/8)*_pi}
            ]
        },
        jaw: {
            src: "img/test-head.jpg",
            scale: 1.5,
            keyframes: [
                {in: (-1)*_pi, x: 0, y: 120, angle: (-1/4)*_pi},
                {in: (0)*_pi, x: 0, y: 180, angle: (1/4)*_pi},
            ]
        },
        neck: {
            color: "#FFFFFF",
            bodyEnd: {
                width: 240,
                keyframes: [
                    {in: (0)*_pi, x: 120, y: -90, angle: (-3/8)*_pi, mag: 150}
                ]
            },
            headEnd: {
                width: 120,
                keyframes: [
                    {in: (0)*_pi, x: -180, y: 120, angle: (3/4)*_pi, mag: 30}
                ]
            }
        }
    }

];