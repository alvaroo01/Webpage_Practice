

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("readyState: complete");
    app();
})


const app = () => {
    
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarLeftButtons = document.getElementById("navbar-left-buttons");
    
    navbarToggle.addEventListener("click", (event) => {
        navbarLeftButtons.classList.toggle("active");  
    })
}