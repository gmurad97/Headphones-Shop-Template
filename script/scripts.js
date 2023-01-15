function showNavbar() {
    var navbarBurger = document.querySelector(".fa-custom-navbar");
    var navbarBurgerClasses = document.getElementById("navToggler");
    var navbar = document.querySelector(".h-hidden-navbar");
    var navbarVisibleState = window.getComputedStyle(navbar, null).visibility;
    if (navbarVisibleState == "hidden") {
        navbarBurgerClasses.classList.remove("fa-bars");
        navbarBurgerClasses.classList.add("fa-xmark");
        navbar.style.setProperty("visibility", "visible");
        navbar.style.setProperty("opacity", "1");
        navbarBurger.style.setProperty("z-index", "2");
    }
    else {
        navbarBurgerClasses.classList.remove("fa-xmark");
        navbarBurgerClasses.classList.add("fa-bars");
        navbar.style.setProperty("visibility", "hidden");
        navbar.style.setProperty("opacity", "0");
        navbarBurger.style.setProperty("z-index", "0");
    }
}