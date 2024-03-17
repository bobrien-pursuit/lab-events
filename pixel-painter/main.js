
// gets the arrays I need from the Document tree from class 'color' and #current-color
const colors = document.getElementsByClassName('color');
let currentColor = document.getElementById('current-color');

// for loop that creates the Event Listener on each pallet color that adds the color attribute to #current-color
for (let color of colors)
    color.addEventListener("click", (e) => currentColor.setAttribute("style", color.style.cssText));

// grabs the cell array from the Document tree and saves it to a variable called cell
let cell = document.getElementsByClassName('cell');

// creates the event listener that sets the style attribute of the cell that is clicked to the value of cssText from the currentColor above
for (let i=0; i < cell.length; i++)
    cell[i].addEventListener("click", (e) => cell[i].setAttribute("style", currentColor.style.cssText));
