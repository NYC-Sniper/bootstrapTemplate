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
