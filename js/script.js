/**
 * Authors: Alexa Marquez,Jonathan Graber,Lokinah Khan,Marlene Lopez,Riley Mann
 * Created: 16 NOV 2021
 * License: Public Domain
 */

/******************** Runs Initially ********************/
let popupMode = false;
let leftCyclerSrc = "img/left-cycler.png";
let rightCyclerSrc = "img/right-cycler.png";

//Set initial sign text
setSignText(birds[birdIndex].name);

//sign click event handler
$("#sign").click(signClicked);

//keypress handler
$(document).on("keydown", function(event) {
    if (event.key == "Escape") escapeClicked();
});

/******************** Sign Functions ********************/

/* Sets the sign innertext */
function setSignText(txt) {
    $("#sign").text(txt);
}

function signClicked() {
    if (!popupMode) {
        popupMode = true;
        ENABLED = false;
        createPopup();
    }
}

/******************** Bird Popup ********************/

/* Creates the popup div */
function createPopup() {
    //create the outer div
    $("body").append("<div id=popup-div>");
    let div = $("#popup-div");

    //Append the exit button
    div.append("<p id=exit-button>[X]");
    $("#exit-button").click(exitButtonClicked);

    //Append the left cycler
    div.append("<img id=left-cycler src=" + leftCyclerSrc + ">");
    $("#left-cycler").click(cycleLeft);

    //Append the inner div
    div.append("<div id=info-div>");
    let infoDiv = $("#info-div")
    infoDiv.append("<h2 id=name>");
    infoDiv.append("<p id=description>");
    updateInfo();

    //Append the right cycler
    div.append("<img id=right-cycler src=" + rightCyclerSrc + ">");
    $("#right-cycler").click(cycleRight);
}

/* updates the h2 and p in #info-div */
function updateInfo() {
    $("#name").text(birds[birdIndex].name);
    $("#description").text(birds[birdIndex].description);
}

/* removes the popup div */
function closePopup() {
    $("#popup-div").remove();
}

function exitButtonClicked() {
    popupMode = false;
    ENABLED = true;
    closePopup();
}

function escapeClicked() {
    if (popupMode) {
        popupMode = false;
        ENABLED = true;
        closePopup();
    }
}

function cycleLeft() {
    birdIndex -= 1;
    if (birdIndex < 0) birdIndex = birds.length-1;
    updateInfo();
    setSignText(birds[birdIndex].name);
}

function cycleRight() {
    birdIndex += 1;
    if (birdIndex >= birds.length) birdIndex = 0;
    updateInfo();
    setSignText(birds[birdIndex].name);
}
