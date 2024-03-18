
// gets the arrays I need from the Document tree from class 'color' and #current-color
const colors = document.getElementsByClassName('color');
let currentColor = document.getElementById('current-color');

// for loop that creates the Event Listener on each pallet color that adds the color attribute to #current-color
for (let color of colors)
    color.addEventListener("click", (e) => currentColor.setAttribute("style", color.style.cssText));

// grabs the cell array from the Document tree and saves it to a variable called cell
let cells = document.getElementsByClassName('cell');

// creates the event listener that sets the style attribute of the cell that is clicked to the value of cssText from the currentColor above
for (let i=0; i < cells.length; i++)
    cells[i].addEventListener("click", (e) => cells[i].setAttribute("style", currentColor.style.cssText));

// clears cell when it is deoubleclicked 
for (let i=0; i < cells.length; i++)
    cells[i].addEventListener("dblclick", (e) => cells[i].setAttribute("style", ''));

// makes all cells the same color as the pallet color when the pallet color is doubleclicked 
for (let i=0; i < colors.length; i++)
colors[i].addEventListener("dblclick", (e) => {
    for (let cell of cells)
        cell.setAttribute("style", colors[i].style.cssText);
});

for (let i=0; i < cells.length; i++)
currentColor.addEventListener("dblclick", (e) => cells[i].setAttribute("style", ''));
    
//});
