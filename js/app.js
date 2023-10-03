const navLinksLi = document.querySelectorAll(".nav__links li");
navLinksLi.forEach((li) =>
  li.addEventListener("click", () => {
    navLinksLi.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
  })
);

const checkArea = document.querySelector(".check__flex");
const lessButton = document.querySelector(".less");
const moreButton = document.querySelector(".more");
moreButton.addEventListener("click", function () {
  checkArea.style.display = "none";
  lessButton.style.display = "flex";
  moreButton.style.display = "none";
});
lessButton.addEventListener("click", function () {
  checkArea.style.display = "flex";
  lessButton.style.display = "none";
  moreButton.style.display = "flex";
});
const formDiv = document.querySelector(".form__div");
const navSessions = document.querySelectorAll(".nav__sessions");
for (let i = 0; i < navSessions.length; i++)
  navSessions[i].addEventListener("click", function () {
    formDiv.style.display = "block";
  });
const cancelButton = document.querySelector(".cancel-button");
cancelButton.addEventListener("click", function () {
  formDiv.style.display = "none";
});
AOS.init();
