/**
 * Authors: Alexa Marquez,Jonathan Graber,Lokinah Khan,Marlene Lopez,Riley Mann
 * Created: 16 NOV 2021
 * License: Public Domain
 */

//Debug
const DEBUG = true;

//Global variables
let canvas;

/* Runs on startup */
function setup() {
    if (DEBUG) console.log("Running Setup!");

    //Canvas Setup!
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0); //move canvas to the origin
    if (DEBUG) console.log(
        "Created New Canvas: (" + windowWidth + ", " + windowHeight + ")");
}

/* Runs on screen resize */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    if (DEBUG) console.log(
        "Canvas Resized: (" + windowWidth + ", " + windowHeight + ")");
}

/* Runs every cycle */
function draw() {
    background(200, 200, 255);
}
