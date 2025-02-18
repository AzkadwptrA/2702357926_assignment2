document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");

    // Menu Animation (Fade in effect)
    menu.style.opacity = "0";
    setTimeout(() => {
        menu.style.opacity = "1";
    }, 500);

});
