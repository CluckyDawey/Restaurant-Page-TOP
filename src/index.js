import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const tabHandlers = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact,
};

function clearContent() {
    const content = document.getElementById("content");
    content.textContent = "";
}

function setActiveTab(button) {
    document.querySelectorAll(".navlink").forEach((navbutton) => {
        navbutton.classList.toggle("active", navbutton === button);
    });
}

function switchTab(tabName, button) {
    const handler = tabHandlers[tabName];
    if (!handler) return;

    clearContent();
    handler();
    if (button) setActiveTab(button);
}

function initializeTabs() {
    const navButtons = document.querySelectorAll(".navlink");
    navButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const tabName = button.dataset.tab;
            switchTab(tabName, button);
        });
    });

    const defaultButton = document.querySelector(".navlink[data-tab='home']");
    if (defaultButton) {
        defaultButton.classList.add("active");
    }
    loadHome();
}

document.addEventListener("DOMContentLoaded", initializeTabs);
