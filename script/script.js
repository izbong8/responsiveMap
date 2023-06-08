var toggleBtn = document.querySelector(".navbar-toggleBtn");
var menu = document.querySelector(".navbar-menu");
var icons = document.querySelector(".navbar-icons");

toggleBtn.addEventListener("click",() => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});
// toggle() 선택한 요소가 보이면 숨기고, 숨겨져 잇으면 나타남