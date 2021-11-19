/**
 * Authors: Alexa Marquez,Jonathan Graber,Lokinah Khan,Marlene Lopez,Riley Mann
 * Created: 16 NOV 2021
 * License: Public Domain
 */

//Debug
const DEBUG = true;

//Global variables
let canvas;
let pivot;

//Animation Heading
let animationHeading = {
    theta: 0.0,
    w: 0.0,
    kP: 0.2, //Springiness
    kD: 0.3, //Dampener
    wLimit: 0.4, //rad/cycle
    update: function(pv) {
        //Calculate Angular Acceleration
        let error = pv - this.theta;
        let a = this.kP*error - this.kD*this.w;

        //Update Angular Velocity
        this.w += a;
        if (this.w > this.wLimit) this.w = this.wLimit;
        if (this.w < -this.wLimit) this.w = -this.wLimit;

        //Update heading
        this.theta += this.w;
    }
};

/* Runs on startup */
function setup() {
    if (DEBUG) console.log("Running Setup!");

    //Canvas Setup!
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0); //move canvas to the origin
    if (DEBUG) console.log("Created New Canvas: (" + 
        windowWidth + ", " + windowHeight + ")");

    //Set the pivot point
    pivot = createVector(0, 0);
    updatePivot();

    //p5 settings
    noStroke(); //No Stroke border
}

/* Runs on screen resize */
function windowResized() {
    //Update the Canvas
    resizeCanvas(windowWidth, windowHeight);
    if (DEBUG) console.log(
        "Canvas Resized: (" + windowWidth + ", " + windowHeight + ")");

    //Update the pivot position
    updatePivot();
}

/* Runs every cycle */
function draw() {
    //Clear the screen
    clear();

    //Calculate the pointer heading
    let pointerTheta = pointerHeading(pivot);

    //Calculate the animation heading
    animationHeading.update(pointerTheta);

    //Draw the animation
    let v = createVector(1, 0);
    v.setMag(height*0.8);
    v.setHeading(animationHeading.theta);
    push();
    strokeWeight(32);
    stroke('White');
    line(pivot.x, pivot.y, pivot.x + v.x, pivot.y + v.y);
    pop();
}

/* Updates the pivot position */
function updatePivot() {
    pivot.set(width/2, height);
}

/* Calculates the the pointer heading */
function pointerHeading(origin) {
    //Create a vector from the origin to the pointer
    let v = createVector(mouseX - origin.x, mouseY - origin.y);

    //Return the vector heading
    return v.heading();
}
