const menuButton = document.querySelector(".menu-button");
const menuPanel = document.querySelector(".menu-panel");

if (menuButton && menuPanel) {

    menuButton.addEventListener("click", () => {

        menuPanel.classList.toggle("open");

    });

}