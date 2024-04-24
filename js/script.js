

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("readyState: complete");
    app();
})


const app = () => {
    
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarItems = document.getElementById("navbar-contents");
    
    navbarToggle.addEventListener("click", (event) => {
        navbarItems.classList.toggle("active");  
    })
}