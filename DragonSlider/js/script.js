
const bigImage = document.querySelectorAll(".slider .list-images .item");
const smallImage = document.querySelectorAll(".thumbnails .item");
let itemActive = 0;
let length = smallImage.length;

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("readyState: complete");
    app();
    timedSlide();
})

let timedSlide = () => {
    intervalId = setInterval(() => {
        itemActive = itemActive + 1;
        if (itemActive >= length) {
            itemActive = 0;
        }
        // Call showBigImage to display the updated active image
        showBigImage();
    }, 10000)
}

const showBigImage = () => {

    const activeSmallImage = document.querySelector(".thumbnails .item.active");
    const activeBigImage = document.querySelector(".slider .list-images .item.active");

    activeBigImage.classList.remove("active");
    activeSmallImage.classList.remove("active");

    bigImage[itemActive].classList.add('active');
    smallImage[itemActive].classList.add("active");

    clearInterval(intervalId);
    timedSlide();
}






const app = () => {


    smallImage.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showBigImage();
        })
    })

}