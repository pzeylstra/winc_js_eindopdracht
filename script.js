// Menu passief //
let toggleNavStatus = false;

// Functies voor klikken //
document.querySelector(".btn-toggle-menu").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-menu");

    // Menu zichtbaar //
    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        toggleNavStatus = false;
    }

    // Menu verborgen //
    else if (toggleNavStatus === true) {
        getSidebar.style.visibility = "hidden";
        toggleNavStatus = true;
    }
});

// Grijze achtergrond //
document.getElementById("basisAchtergrond").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-menu");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'grey';
});

// Rode achtergrond //
document.getElementById("rodeAchtergrond").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-menu");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'rgb(230, 79, 79)';
});

// Oranje achtergrond //
document.getElementById("oranjeAchtergrond").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-menu");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'rgb(187, 130, 25)';
});

// Paarse achtergrond //
document.getElementById("paarseAchtergrond").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-menu");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'rgb(105, 34, 105)';
});

// Groene achtergrond //
document.getElementById("groeneAchtergrond").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-menu");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'rgb(14, 90, 14)';
});