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
let bird_i;

//Animation Heading
let animationHeading = {
    theta: 0.0,
    spMin: 0.0,
    spMax: 7.0,
    w: 0.0,
    kP: 0.2, //Springiness
    kD: 0.3, //Dampener
    wLimit: 0.4, //rad/cycle
    update: function (sp) {
        //Limit sp
        if (sp < this.spMin) sp = this.spMin;
        if (sp > this.spMax) sp = this.spMax;

        //Calculate Angular Acceleration
        let error = sp - this.theta;
        let a = this.kP*error - this.kD*this.w;

        //Update Angular Velocity
        this.w += a;
        if (this.w > this.wLimit) this.w = this.wLimit;
        if (this.w < -this.wLimit) this.w = -this.wLimit;

        //Update heading
        this.theta += this.w;
    },
    get: function () {
        return this.theta;
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

    //Set initial bird index
    bird_i = 0;

    //Image Elements
    createBirdElements();
    loadSrc(birds[bird_i]);

    //Animation Heading
    animationHeading.spMin = -(7/8)*PI;
    animationHeading.spMax = -(1/8)*PI;

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
    let theta = animationHeading.get();

    //Draw the animation
    drawBird(birds[bird_i], theta);
}

/* Create the image elements */
function createBirdElements() {
    if (DEBUG) console.log("creating image elements");
    //Create the elements
    let body = createImg("", "");
    let head = createImg("", "");
    let jaw = createImg("", "");

    //Set the class
    body.class("animation");
    head.class("animation");
    jaw.class("animation");

    //Set the IDs
    body.id("body-img");
    head.id("head-img");
    jaw.id("jaw-img");
}

/* assigns the image sources */
function loadSrc(bird) {
    if (DEBUG) console.log("setting the image sources");
    select("#body-img").attribute("src", bird.body.src);
    select("#head-img").attribute("src", bird.head.src);
    select("#jaw-img").attribute("src", bird.jaw.src);
}

/* Draws the animation */
function drawBird(bird, input) {
    //Position the body
    let bodyPos = keyframeMap(bird.body.keyframes, input);
    let vBody = createVector(bodyPos.x, bodyPos.y);
    vBody.add(pivot);
    let body = select("#body-img");
    positionElement(body, vBody.x, vBody.y);
    rotateElement(body, bodyPos.angle);

    //Position the head
    let headPos = keyframeMap(bird.head.keyframes, input);
    let vHead = createVector(headPos.x, headPos.y);
    vHead.add(pivot);
    let head = select("#head-img");
    positionElement(head, vHead.x, vHead.y);
    rotateElement(head, headPos.angle);
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

/* Calculates position based on input and keyframes */
function keyframeMap(kfData, input) {
    //output object
    let output = {
        x: 0,
        y: 0,
        angle: 1
    };

    //if the input is outside the keyframing space,
    //set the output to the first or last frame
    if (input <= kfData[0].in) {
        output.x = kfData[0].x;
        output.y = kfData[0].y;
        output.angle = kfData[0].angle;

    } else if (input >= kfData[kfData.length - 1].in) {
        output.x = kfData[kfData.length - 1].x;
        output.y = kfData[kfData.length - 1].y;
        output.angle = kfData[kfData.length - 1].angle;

    } else { //use the two frames around it to produce a value
        for (let i = 1; i < kfData.length; i++) {

            //grab the surrounding frames
            let lo = kfData[i - 1];
            let hi = kfData[i];

            //if input is in-between them
            if (lo.in <= input && input < hi.in) {
                let p = (input - lo.in) / (hi.in - lo.in);
                output.x = lo.x + (hi.x - lo.x) * p;
                output.y = lo.y + (hi.y - lo.y) * p;
                output.angle = lo.angle + (hi.angle - lo.angle) * p;
            }
        }
    }

    return output;
}

/* Position an element about its center */
function positionElement(element, x, y) {
    //center the element
    x -= element.width/2;
    y -= element.height/2;

    //set using the position(x, y) function
    element.position(x, y);
}

/* Rotate an element about its center in radians */
function rotateElement(element, theta) {
    //Rotate the element using a css property
    element.style("transform", "rotate(" + theta + "rad)");
}
