function buttonPressed() {
    var nav = document.getElementById("navbar");
    var background = document.getElementById("background-navbar");
    var icon = document.getElementById("icon");
    if (window.innerWidth < 768) {
        if (nav.style.display == "flex") {
            nav.style.display = "none";
            background.style.height = "10vh";
            background.style.backgroundColor = "rgb(255, 255, 255)";
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>';
        } else {
            nav.style.display = "flex";
            background.style.height = "450px";
            background.style.backgroundColor = "#ffffff";
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>'
        }
    } 
}

function closeSidebar() {
    var nav = document.getElementById("navbar");
    var background = document.getElementById("background-navbar");
    var icon = document.getElementById("icon");

    if (window.innerWidth < 768) {
        nav.style.display = "none";
        background.style.height = "10vh";
        background.style.backgroundColor = "rgb(255,255,255)";
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>';    
    }
}

window.addEventListener('resize', () => {
    body.style.width = window.innerWidth;
});