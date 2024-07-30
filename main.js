const hamburger = document.getElementById("hamburger")
const navlinks = document.getElementById("navlinks")

hamburger.addEventListener("click" ,()=>{

    navlinks.classList.toggle("nav-links-active");
})