const nextJay = document.querySelector(".next");
const gridArea = document.querySelectorAll(".grid--area1");
for (let i = 0; i < gridArea.length; i++)
  gridArea[i].addEventListener("click", function () {
    window.location.href = "time.html";
  });
nextJay.addEventListener("click", function () {
  window.location.href = "index.html";
});
AOS.init();
