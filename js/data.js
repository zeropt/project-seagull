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
        description: "The Western Gull is native to the upper half of the west coast of the U.S; ranging from central California to Washington. These trash goblins of the marine environment are omnivores, providing these opportunistic birds a wide variety of food sources. From fishing scraps to literal garbage dump treasure, there isn’t much these gulls won’t swallow down their gullet! In fact, they’ve also been noted to eat other adult birds and marine animal by-products! So if you or someone you know is being picky, just know this little fellow would be happy to pick up your leftovers.",
        body: {
            src: "img/western-gull-body.png",
            scale: 1.0,
            keyframes: [
                {in: (0)*_pi, x: 0, y: -106, angle: (0)*_pi}
            ]
        },
        head: {
            src: "img/western-gull-head.png",
            scale: 1.0,
            keyframes: [
                {in: (-1)*_pi, x: -400, y: -300, angle: (-3/4)*_pi},
                {in: (-1/2)*_pi, x: 0, y: -600, angle: (-1)*_pi},
                {in: (0)*_pi, x: 500, y: -400, angle: (-1/8)*_pi}
            ]
        },
        jaw: {
            src: "img/western-gull-jaw.png",
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
    },

    {
        name: "Bonaparte's Gull",
        description: "The Bonaparte’s Gull can be found in forests of Canada and Southern regions of Alaska during their nesting season and migrates south to warmer areas of North America in the winter. The audacious Bonaparte’s Gull are unique in the fact that they often nest in the trees because the ground is just not fancy enough for their taste. Unlike their thrifty cousins, the Western Gull, Bonaparte’s Gulls generally are not found foraging garbage dumps like an all-you-can-eat buffet. However, the scavenger blood still flows within them, enacting thievery against smaller coastal birds for a meal. Criminal!",
        body: {
            src: "img/bonaparte-gull-body.png",
            scale: 1.0,
            keyframes: [
                {in: (0)*_pi, x: 0, y: -106, angle: (0)*_pi}
            ]
        },
        head: {
            src: "img/bonaparte-gull-head.png",
            scale: 1.0,
            keyframes: [
                {in: (-1)*_pi, x: -400, y: -300, angle: (-3/4)*_pi},
                {in: (-1/2)*_pi, x: 0, y: -600, angle: (-1/2)*_pi},
                {in: (0)*_pi, x: 500, y: -400, angle: (-1/8)*_pi}
            ]
        },
        jaw: {
            src: "img/bonaparte-gull-jaw.png",
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
