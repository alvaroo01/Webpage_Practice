document.addEventListener("DOMContentLoaded", (event) => {
    console.log("readyState: complete");
    app();
})

//Favorites array

const favorites = [
    {
        id: 1,
        img: "img/coffe.webp",
        title: "Customize your drink",
        text: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.",
    },
    {
        id: 2,
        img: "img/coffe2.webp",
        title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
        text: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
    },
    {
        id: 3,
        img: "img/coffe3.webp",
        title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
        text: "Make your drink just right withTurn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
    },
    {
        id: 4,
        img: "img/coffe4.webp",
        title: "Sandwich, protein box or at-home coffee",
        text: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
    },
    {
        id: 5,
        img: "img/coffe5.webp",
        title: "Select Starbucks® merchandise",
        text: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
    },

]

//Adds Green underline to selected button and removes every other
const updateGreenUnderline = (button, buttonArray) => {
    for (const btn of buttonArray) {
        if (btn == button) {
            btn.classList.add("under-border");
        } else {
            btn.classList.remove("under-border");
        }
    }
}

// Updates the contents
const updateBox = (index, elementsArray) => {
    const fav = favorites[index];
    elementsArray[0].src = fav.img;
    elementsArray[1].textContent = fav.title;
    elementsArray[2].textContent = fav.text;
}



const app = () => {

    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarItems = document.getElementById("navbar-contents");
    const button25 = document.getElementById("button25");
    const button100 = document.getElementById("button100");
    const button200 = document.getElementById("button200");
    const button300 = document.getElementById("button300");
    const button400 = document.getElementById("button400");

    const image = document.getElementById("contents-image");
    const title = document.getElementById("contents-title");
    const text = document.getElementById("contents-text");

    const buttonArray = [button25, button100, button200, button300, button400];
    const elementsArray = [image, title, text];

    navbarToggle.addEventListener("click", (event) => {
        navbarItems.classList.toggle("active");
    })

    button25.addEventListener("click", (event) => {
        updateGreenUnderline(button25, buttonArray);
        updateBox(0, elementsArray);
    })

    button100.addEventListener("click", (event) => {
        updateGreenUnderline(button100, buttonArray);
        updateBox(1, elementsArray);
    })

    button200.addEventListener("click", (event) => {
        updateGreenUnderline(button200, buttonArray);
        updateBox(2, elementsArray);
    })

    button300.addEventListener("click", (event) => {
        updateGreenUnderline(button300, buttonArray);
        updateBox(3, elementsArray);
    })

    button400.addEventListener("click", (event) => {
        updateGreenUnderline(button400, buttonArray);
        updateBox(4, elementsArray);
    })
}