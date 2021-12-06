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
        description: "The Western Gull is native to the upper half of the west coast of the U.S; ranging from central California to Washington. These trash goblins of the marine environment are omnivores, providing these opportunistic birds a wide variety of food sources. From fishing scraps to literal garbage dump treasure, there isn’t much these gulls won’t swallow down their gullet! In fact, they’ve also been noted to eat other adult birds and marine animal bi-products! So if you or someone you know is being picky, just know this little fellow would be happy to pick up your leftovers.",
        body: {
            src: "img/western-gull-body.png",
            scale: 0.8,
            keyframes: [
                {in: (0)*_pi, x: -80, y: -150, angle: (0)*_pi}
            ]
        },
        head: {
            src: "img/western-gull-head.png",
            scale: 0.8,
            keyframes: [
                {in: (-0.85)*_pi, x: -350, y: -280, angle: (-9/8)*_pi},
                {in: (-0.75)*_pi, x: -300, y: -300, angle: (-9/8)*_pi},
                {in: (-0.38)*_pi, x: 200, y: -550, angle: (-4/8)*_pi},
                {in: (-0.25)*_pi, x: 450, y: -450, angle: (-1/4)*_pi},
                {in: (-0.15)*_pi, x: 500, y: -400, angle: (-1/4)*_pi}
            ]
        },
        jaw: {
            src: "img/western-gull-jaw.png",
            scale: 0.8,
            keyframes: [
                {in: (-0.75)*_pi, x: 20, y: 78, angle: (0.06)*_pi},
                {in: (-0.6)*_pi, x: 65, y: 22, angle: (0.0)*_pi},
                {in: (-0.5)*_pi, x: 65, y: 22, angle: (0.0)*_pi},
                {in: (-0.25)*_pi, x: 20, y: 78, angle: (0.06)*_pi}
            ]
        },
        eye: {
            src: "img/lens-flare.png",
            scale: 1.5,
            x: -50,
            y: 30,
            angle: (0.5)*_pi
        },
        neck: {
            color: "#FFFFFF",
            bodyEnd: {
                width: 240,
                keyframes: [
                    {in: (-3/4)*_pi, x: 210, y: -20, angle: (-0.5)*_pi, mag: 150},
                    {in: (-1/4)*_pi, x: 230, y: -20, angle: (-0.25)*_pi, mag: 10}
                ]
            },
            headEnd: {
                width: 120,
                keyframes: [
                    {in: (-3/4)*_pi, x: -110, y: -10, angle: (0.9)*_pi, mag: 100},
                    {in: (-1/4)*_pi, x: -50, y: 15, angle: (1.0)*_pi, mag: 300}
                ]
            }
        }
    },

    {
        name: "Bonaparte's Gull",
        description: "The Bonaparte’s Gull can be found in forests of Canada and Southern regions of Alaska during their nesting season and migrates south to warmer areas of North America in the winter. The audacious Bonaparte’s Gull are unique in the fact that they often nest in the trees because the ground is just not fancy enough for their taste. Unlike their thrifty cousins, the Western Gull, Bonaparte’s Gulls generally are not found foraging garbage dumps like an all-you-can-eat buffet. However, the scavenger blood still flows within them, enacting thievery against smaller coastal birds for a meal. Criminal!",
        body: {
            src: "img/bonaparte-gull-body.png",
            scale: 0.8,
            keyframes: [
                {in: (0)*_pi, x: -80, y: -150, angle: (0)*_pi}
            ]
        },
        head: {
            src: "img/bonaparte-gull-head.png",
            scale: 0.8,
            keyframes: [
                {in: (-0.85)*_pi, x: -350, y: -280, angle: (-9/8)*_pi},
                {in: (-0.75)*_pi, x: -300, y: -300, angle: (-9/8)*_pi},
                {in: (-0.38)*_pi, x: 200, y: -550, angle: (-4/8)*_pi},
                {in: (-0.25)*_pi, x: 450, y: -450, angle: (-1/4)*_pi},
                {in: (-0.15)*_pi, x: 500, y: -400, angle: (-1/4)*_pi}
            ]
        },
        jaw: {
            src: "img/bonaparte-gull-jaw.png",
            scale: 0.8,
            keyframes: [
                {in: (-0.75)*_pi, x: 34, y: 82, angle: (0.06)*_pi},
                {in: (-0.6)*_pi, x: 79, y: 26, angle: (0.0)*_pi},
                {in: (-0.5)*_pi, x: 79, y: 26, angle: (0.0)*_pi},
                {in: (-0.25)*_pi, x: 34, y: 82, angle: (0.06)*_pi}
            ]
        },
        neck: {
            color: "#FFFFFF",
            bodyEnd: {
                width: 240,
                keyframes: [
                    {in: (-3/4)*_pi, x: 210, y: -20, angle: (-0.5)*_pi, mag: 150},
                    {in: (-1/4)*_pi, x: 230, y: -20, angle: (-0.25)*_pi, mag: 10}
                ]
            },
            headEnd: {
                width: 120,
                keyframes: [
                    {in: (-3/4)*_pi, x: -110, y: -10, angle: (0.9)*_pi, mag: 100},
                    {in: (-1/4)*_pi, x: -50, y: 15, angle: (1.0)*_pi, mag: 300}
                ]
            }
        }
    }

];
