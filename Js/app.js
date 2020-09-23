gsap.from('.title', {
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    x: -90,
});

const wordsArray = ["We are Design Duty", "We are a UI/UX Agency."];

let cursor = gsap.to('.cursor', {
opacity: 0,
repeat: -1,
ease: "power2.inOut",
duration: .7
})

gsap.registerPlugin(TextPlugin)

let wordsTimeline = gsap.timeline({
repeat: -1,
});
wordsArray.forEach(word => {
let i = gsap.timeline({
    repeat: 1,
    yoyo: true,
    delay: 1, 
    repeatDelay: 1
});
i.to(".textArray", {
    duration: 1, 
    text: word,
});
wordsTimeline.add(i);
});

gsap.from('.navigation', {
    duration: 1,
    opacity: 0,
    y: -90
})

// add blur class to navbar
window.onscroll = function () {
    mainHeader()
};

function mainHeader() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navi").className = "navigation blur sticky-top";
    } else {
        document.getElementById("navi").className = "navigation";
    }
};
