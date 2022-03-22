body = document.getElementsByTagName('body')[0];

const container = document.createElement('div');
container.style.cssText = "background-color: blue; display: flex; height: 600px; width: 600px;";

const grid = document.createElement('div');
grid.classList.add('grid');
grid.style.cssText = "disply: grid; grid-template-columns: 4;";

for(let i = 1; i <= 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.textContent = `${i}`;
    gridItem.style.cssText = "border: 1px solid black;";
    grid.appendChild(gridItem);
}

container.appendChild(grid);

body.appendChild(container);