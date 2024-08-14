var container = document.querySelector('.container');
var gridSize = 16;
let resetBtn = document.querySelector('button');

resetBtn.addEventListener("mouseenter", button => {
    resetBtn.classList.add('over');
});
resetBtn.addEventListener("mouseleave", button => {
    resetBtn.classList.remove('over');
});
resetBtn.addEventListener("click", handleClick);

function handleClick() {
    gridSize = +prompt('How many rows and columns?');
    generateGrid(gridSize);
}
function generateGrid(){
    generateRows(gridSize);
    generateCells(gridSize);
    draw();
}

function generateRows(gridSize){
    container.innerHTML = '';
    for(i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}
function generateCells(gridSize){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        for(i = 0; i < gridSize; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    });
}
function draw() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = 'black';
        })
    });    
}

generateGrid();