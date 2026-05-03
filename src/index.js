import "./styles.css";
import carbonara from "./image_341fbfb5.png";

(function createHomeContent() {
    const content = document.getElementById("content");

    let home = document.createElement("div");
    home.id = "home";

    // Create home content container
    let homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    // Create and append image and text elements
    let display = document.createElement("img");
    display.src = carbonara;
    display.alt = "Carbonara Image";

    let textContainer = document.createElement("div");
    let homeTitle = document.createElement("h1");
    homeTitle.textContent = "Welcome to Strings!";
    let homeDescription = document.createElement("p");
    homeDescription.textContent = "Experience the authentic taste of Italy with our handcrafted pasta dishes, made from the finest ingredients and traditional recipes.";
    textContainer.appendChild(homeTitle);
    textContainer.appendChild(homeDescription);
    homeContent.appendChild(display);
    homeContent.appendChild(textContainer);

    home.appendChild(homeContent);
    content.appendChild(home);

    let menu = document.createElement("div");
    menu.id = "menu";

    let menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    content.appendChild(menu);

    let contact = document.createElement("div");
    contact.id = "contact";



    content.appendChild(contact);

})();