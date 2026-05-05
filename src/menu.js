export default function loadMenu() {
    const content = document.getElementById("content");

    let menu = document.createElement("div");
    menu.id = "menu";

    let menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    let menuSelection = document.createElement("div");
    menuSelection.classList.add("menu-selection");

    const categories = [
        "Main Course",
        "Side Dishes",
        "Desserts",
        "Drinks"
    ];

    categories.forEach((categoryText) => {
        let category = document.createElement("div");
        category.classList.add("menu-category");
        let categoryTitle = document.createElement("h2");
        categoryTitle.textContent = categoryText;
        category.appendChild(categoryTitle);
        menuSelection.appendChild(category);
    });

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
}
