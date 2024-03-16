const colors = document.getElementsByClassName('color');
let currentColor = document.getElementById('current-color');

for (let color of colors)
    color.addEventListener("click", (e) => currentColor.setAttribute("style", color.style.cssText));

let cell = document.getElementsByClassName('cell');

for (let i=0; i < cell.length; i++)
    cell[i].addEventListener("click", (e) => cell[i].setAttribute("style", currentColor.style.cssText));
