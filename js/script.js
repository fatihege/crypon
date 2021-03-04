var header = document.querySelectorAll(".header")[0];
window.onscroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

var disableds = document.querySelectorAll(".disabled");
for (disabled = 0; disabled < disableds.length; disabled++) {
    disableds[disabled].onclick = function (e) {
        e.preventDefault();
        return false;
    }
}

var invites = document.querySelectorAll(".invite");
for (invite = 0; invite < invites.length; invite++) {
    invites[invite].onclick = function (e) {
        e.preventDefault();
        window.open("https://discord.com/oauth2/authorize?client_id=815184711416152094&scope=bot&permissions=8", "_blank");
    }
}

var sidebar = document.querySelectorAll(".sidebar")[0];
var open = document.querySelectorAll(".menu-icon")[0];
var close = document.querySelectorAll(".close")[0];
open.onclick = function () {
    sidebar.style.left = "0";
    close.style.top = "7px";
    close.style.opacity = "1";
}

close.onclick = function () {
    sidebar.style.left = "-100%";
    close.style.top = "-100%";
    close.style.opacity = "0";
}

var closables = document.querySelectorAll(".closable");
for (closable = 0; closable < closables.length; closable++) {
    closables[closable].onclick = function () {
        sidebar.style.left = "-100%";
        close.style.top = "-100%";
        close.style.opacity = "0";
    }
}
