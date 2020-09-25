// animating the first section
gsap.from(".h-title", {
    opacity: 0,
    x: -90,
    duration: 2, 
    stagger: 0.3,
    delay: 1
})
// animating snd part
gsap.from(".partTwo", {
    opacity: 0,
    x: 90,
    duration: 2, 
})
// animating the navbar
gsap.from(".navbar", {
    opacity: 0,
    y: -90,
    duration: 2, 
})

gsap.registerPlugin(ScrollTrigger);

gsap.from(".c-cards", {
    scrollTrigger: {
        trigger: ".c-cards",
        toggleActions: "play resume reverse restart",
    },
    stagger: 0.7,
    ease: "ease", 
    delay: 1, 
    x: -90,
    duration: 2,
    opacity: 0,
})

gsap.from(".c-card", {
    stagger: 0.2,
    ease: "ease", 
    delay: 1, 
    x: -90,
    duration: 1,
    opacity: 0,
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