import carbonara from "./image_341fbfb5.png";

export default function loadHome() {
    const content = document.getElementById("content");

    let home = document.createElement("div");
    home.id = "home";

    let homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

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
}
