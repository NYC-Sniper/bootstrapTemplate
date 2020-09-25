gsap.from(".title", {
    opacity: 0,
    x: -90,
    duration: 2, 
})
gsap.from(".partTwo", {
    opacity: 0,
    x: 90,
    duration: 2, 
})
gsap.from(".navbar", {
    opacity: 0,
    y: -90,
    duration: 2, 
})


// add blur class to navbar
window.onscroll = function () {
    mainHeader()
};

function mainHeader() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navi").className = "navbar blur sticky-top navbar-expand-lg navbar-light";
    } else {
        document.getElementById("navi").className = "navbar navbar-expand-lg navbar-light";
    }
};