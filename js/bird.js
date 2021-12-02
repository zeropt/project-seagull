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
    birdIndex = 0;

    //Image Elements
    createBirdElements();
    loadSrc(birds[birdIndex]);

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
    drawBird(birds[birdIndex], theta);
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

/* Sclaes the image elements */
function setSizes(bird) {
    select("#body-img").size(bird.body.width, bird.body.height);
    select("#head-img").size(bird.head.width, bird.head.height);
    select("#jaw-img").size(bird.jaw.width, bird.jaw.height);
}

/* Draws the animation */
function drawBird(bird, input) {
    //Set the size of the images
    setSizes(bird);
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

    //Position the jaw
    let jawPos = keyframeMap(bird.jaw.keyframes, input);
    let vJaw = createVector(jawPos.x, jawPos.y);
    vJaw.rotate(headPos.angle);
    vJaw.add(vHead);
    let jaw = select("#jaw-img");
    positionElement(jaw, vJaw.x, vJaw.y);
    rotateElement(jaw, headPos.angle + jawPos.angle);

    //Draw the neck
    //body neck
    let bodyNeckPos = keyframeMap(bird.neck.bodyEnd.keyframes, input);
    let p1 = createVector(bodyNeckPos.x, bodyNeckPos.y);
    p1.rotate(bodyPos.angle);
    p1.add(vBody);
    let c1 = createVector(bodyNeckPos.mag, 0);
    c1.setHeading(bodyPos.angle + bodyNeckPos.angle);
    //head neck
    let headNeckPos = keyframeMap(bird.neck.headEnd.keyframes, input);
    let p2 = createVector(headNeckPos.x, headNeckPos.y);
    p2.rotate(headPos.angle);
    p2.add(vHead);
    let c2 = createVector(headNeckPos.mag, 0);
    c2.setHeading(headPos.angle + headNeckPos.angle);
    //draw!
    //console.log(`1: (${p1.x}, ${p1.y}), (${c1.x}, ${c1.y}), ${bird.neck.bodyEnd.width}`);
    //console.log(`2: (${p2.x}, ${p2.y}), (${c2.x}, ${c2.y}), ${bird.neck.headEnd.width}`);
    drawNeck(bird.neck.color, p1, c1, bird.neck.bodyEnd.width,
        p2, c2, bird.neck.headEnd.width);
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
        angle: 0,
        mag: 0
    };

    //if the input is outside the keyframing space,
    //set the output to the first or last frame
    if (input <= kfData[0].in) {
        output.x = kfData[0].x;
        output.y = kfData[0].y;
        output.angle = kfData[0].angle;
        output.mag = kfData[0].mag;

    } else if (input >= kfData[kfData.length - 1].in) {
        output.x = kfData[kfData.length - 1].x;
        output.y = kfData[kfData.length - 1].y;
        output.angle = kfData[kfData.length - 1].angle;
        output.mag = kfData[kfData.length - 1].mag;

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
                output.mag = lo.mag + (hi.mag - lo.mag) * p;
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

/* Draws the neck using two bezier curves */
/* (ColorString, point1, directionVector1, neckWidth1,
    point2, directionVector2, neckWidth2) */
function drawNeck(color, p1, c1, w1, p2, c2, w2) {
    push(); //beginning
    //Set the color
    stroke(color);
    noFill();
    //Calculate and set the stroke weight
    let weight;
    if (w2 > w1) weight = w2/2;
    else weight = w1/2;
    strokeWeight(weight);

    //first end
    let offset1 = c1.copy();
    offset1.rotate(PI/2);
    offset1.setMag((w1-weight)/2);
    let a1 = p1.copy().add(offset1);
    let b1 = p1.copy().sub(offset1);

    //second end
    let offset2 = c2.copy();
    offset2.rotate(-PI/2);
    offset2.setMag((w2-weight)/2);
    let a2 = p2.copy().add(offset2);
    let b2 = p2.copy().sub(offset2);

    //Draw the curves
    bezier(a1.x, a1.y, a1.x + c1.x, a1.y + c1.y,
        a2.x + c2.x, a2.y + c2.y, a2.x, a2.y);
    bezier(b1.x, b1.y, b1.x + c1.x, b1.y + c1.y,
        b2.x + c2.x, b2.y + c2.y, b2.x, b2.y);
    pop(); //end
}