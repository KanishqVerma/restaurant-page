import "./styles.css";
import { createHomePage } from "./home";
import { createMenu } from "./menu";
import { createContactUs } from "./contact-us";

createHomePage();

(() => {
    console.log("Hello Odinite");

    const content = document.getElementById("content");
    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");
    const contactUsButton = document.querySelector(".contact-us");

    homeButton.addEventListener("click", () => {
        content.innerHTML = "";
        createHomePage();
    });

    menuButton.addEventListener("click", () => {
        content.innerHTML = "";
        createMenu();
    });

    contactUsButton.addEventListener("click", () => {
        content.innerHTML = "";
        createContactUs();
    });
})();