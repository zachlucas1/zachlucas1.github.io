var dont = document.getElementById("text");
var angry = document.getElementById("angry-image")

// ------------------------ MOUSE ---------------------- //
// Build safezone
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var happy = true;


// event handler function
function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    // React to mouse
    if (pageY < screenHeight * .10) {
        dont.style.color = 'rgb(255, 0, 0)';
        dont.style.fontSize = '5em';
        dont.innerText = "I SAID DON'T LEAVE!"
        angry.style.display = 'initial';
        happy = false;
    }
    else if (pageY < screenHeight * .20) {
        dont.style.fontSize = '4em';
        dont.innerText = "PLEASE DON'T LEAVE"
        angry.style.display = 'none';
        happy = true;
    }
    else {
        dont.style.fontSize = '3em';
        dont.innerText = "PLEASE DON'T LEAVE"
        angry.style.display = 'none';
        happy = true;
    }

    //console.log(pageX, pageY);
}

// attach handler to the click event of the document
if (document.attachEvent) document.attachEvent('mousemove', handler);
else document.addEventListener('mousemove', handler);

// ----------------- R G B ----------------- //
var red = 0;
var redDirection = 'positive';
var green = 85;
var greenDirection = 'positive';
var blue = 170;
var blueDirection = 'positive';

var switchSpeed = 1;

// Is going to create a loop for us
function animate() {
    requestAnimationFrame(animate);
        if (happy) {
            // Adjust RED color
            if (red >= 255) {
                redDirection = 'negative';
            } else if (red <= 0) {
                redDirection = 'positive'
            }
            if (redDirection == 'positive') {
                red += switchSpeed;
            } else {
                red -= switchSpeed;
            }

            // Adjust GREEN color
            if (green >= 255) {
                greenDirection = 'negative';
            } else if (green <= 0) {
                greenDirection = 'positive'
            }
            if (greenDirection == 'positive') {
                green += switchSpeed;
            } else {
                green -= switchSpeed;
            }

            // Adjust BLUE color
            if (blue >= 255) {
                blueDirection = 'negative';
            } else if (blue <= 0) {
                blueDirection = 'positive'
            }
            if (blueDirection == 'positive') {
                blue += switchSpeed;
            } else {
                blue -= switchSpeed;
            }

            // Make sure they are valid colors
            if (red > 255) {red = 255}
            if (red < 0) {red = 0}
            if (green > 255) {green = 255}
            if (green < 0) {green = 0}
            if (blue > 255) {blue = 255}
            if (blue < 0) {blue = 0}

            // Display color
            dont.style.color = `rgb(${red}, ${green}, ${blue})`;
        }
}

animate();