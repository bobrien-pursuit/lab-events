const colors = document.getElementsByClassName('color');
let currentColor = document.getElementById('current-color');

for (let color of colors)
    color.addEventListener("click", (e) => currentColor.setAttribute("style", color.style.cssText));