// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Smooth scroll for navigation links
var navlinks = document.querySelectorAll('nav ul li a');
var sidemenu = document.querySelector('nav ul');

for (let link of navlinks) {
    link.addEventListener('click', function() {
        sidemenu.style.right = '-200px';
    });
}

// Mobile menu toggle
var menuIcon = document.querySelector('nav .fa-bars');
var closeIcon = document.querySelector('nav .fa-times');

if (menuIcon) {
    menuIcon.addEventListener('click', function() {
        sidemenu.style.right = '0';
    });
}

if (closeIcon) {
    closeIcon.addEventListener('click', function() {
        sidemenu.style.right = '-200px';
    });
}
