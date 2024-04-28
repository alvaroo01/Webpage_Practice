const coords = {x: 0 , y: 0}
const circles = document.querySelectorAll(".circle");

//Use https://www.learnui.design/tools/gradient-generator.html do choose color gradient
const gradientColors = ["#a44c3c", "#ae5c43", "#b76c4c", "#bf7c56", "#c88c61", "#d09c6d", "#d8ac7a", "#e0bc89"];

const factor = 0.40;

//Give x and y variables to each circle.
circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = gradientColors[index % gradientColors.length]
});

//Event Listener
window.addEventListener("mousemove", (event) => {
    coords.x = event.clientX + window.scrollX;
    coords.y = event.clientY + window.scrollY;
    // console.log(`X${coords.x}:Y${coords.y}`)
});


const circleAnimation = () => {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function(circle, index){
        // Updates the position of each circle.
        circle.style.left = x - 12 + "px"; 
        circle.style.top = y - 12 + "px"; 

        // The next circles are smaller. 
        circle.style.scale = (circles.length - index) / 9;

        circle.x = x;
        circle.y = y;
        
        // Find out what the next circle is. If it is the last, go back to 0.
        const nextCircle = circles[index + 1] || circles[0];
        // Update its position.
        x += (nextCircle.x - x) * factor;
        y += (nextCircle.y - y) * factor;
        
    });

    // By doing this, it doesnt bug when the mouse leaves the page
    requestAnimationFrame(circleAnimation);
}

circleAnimation();