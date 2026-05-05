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


    // Could be sidebar or tabs
    let menuSelection = document.createElement("div");
    menuSelection.classList.add("menu-selection");
    let mainCourse = document.createElement("div");
    mainCourse.classList.add("menu-category");
    let mainCourseTitle = document.createElement("h2");
    mainCourseTitle.textContent = "Main Course";
    mainCourse.appendChild(mainCourseTitle);

    let sideDishes = document.createElement("div");
    sideDishes.classList.add("menu-category");
    let sideDishesTitle = document.createElement("h2");
    sideDishesTitle.textContent = "Side Dishes";
    sideDishes.appendChild(sideDishesTitle);

    let desserts = document.createElement("div");
    desserts.classList.add("menu-category");
    let dessertsTitle = document.createElement("h2");
    dessertsTitle.textContent = "Desserts";
    desserts.appendChild(dessertsTitle);
    
    let drinks = document.createElement("div");
    drinks.classList.add("menu-category");
    let drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "Drinks";
    drinks.appendChild(drinksTitle);

    menuSelection.appendChild(mainCourse);
    menuSelection.appendChild(sideDishes);
    menuSelection.appendChild(desserts);
    menuSelection.appendChild(drinks);

    // display area for menu items
    let menuDisplay = document.createElement("div");
    menuDisplay.classList.add("menu-display");

    let mainCourseItems = document.createElement("div");
    mainCourseItems.classList.add("menu-items");
    let mainCourseItem1 = document.createElement("div");
    mainCourseItem1.classList.add("menu-item");
    let mainCourseItem1Title = document.createElement("h3");
    mainCourseItem1Title.textContent = "Spaghetti";
    let mainCourseItem1Description = document.createElement("p");
    mainCourseItem1Description.textContent = "Classic spaghetti with tomato sauce and basil.";
    mainCourseItem1.appendChild(mainCourseItem1Title);
    mainCourseItem1.appendChild(mainCourseItem1Description);
    mainCourseItems.appendChild(mainCourseItem1);
    menuDisplay.appendChild(mainCourseItems);


    
    menuContent.appendChild(menuSelection);
    menuContent.appendChild(menuDisplay);
    menu.appendChild(menuContent);
    content.appendChild(menu);

    let contact = document.createElement("div");
    contact.id = "contact";



    content.appendChild(contact);

})();