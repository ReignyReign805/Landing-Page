function startPage(){
    let gridSize = 0;

    while (gridSize < 2 || gridSize > 100 || isNaN(gridSize)){
        gridSize = window.prompt("Enter a grid size from 2-100: ");
    } 

    const gridName = document.createElement('h3');
    gridName.innerHTML = gridSize + " x " + gridSize;
    gridName.className = "grid_name";
    document.body.appendChild(gridName);
    const sketchDiv = document.createElement('div');
    sketchDiv.className = "sketch_div";

    function createInnerDiv(){
        const innerColumn = document.createElement('div');
        innerColumn.className = "inner_column";
        
        for (let i = 0; i < gridSize; i++){
            innerColumn.appendChild(createInnerPixel());
            
        }
        return innerColumn;
    }

    function createInnerPixel(){
        const innerPixel = document.createElement('div');
        innerPixel.className = "inner_pixel";
        innerPixel.style.width = `${650 / gridSize}px`;
        innerPixel.style.height = `${650 / gridSize}px`;

        return innerPixel;
    }

    for (let j = 0; j < gridSize; j ++) {
        sketchDiv.appendChild(createInnerDiv());
    }
//STOP
    let body = document.querySelector('body');
    body.appendChild(sketchDiv);
    // document.body.appendChild(sketchDiv);

    let pixels = document.getElementsByClassName("inner_pixel");

    for(let x = 0; x < pixels.length; x++){
        pixels[x].addEventListener('mouseover', function () {
            pixels[x].style.backgroundColor = 'red';
        });
    }

    const btndiv = document.createElement('div');
    btndiv.className = "btn_div";

    function clear(){
        for(let z = 0; z < pixels.length; z++) {
            pixels[z].style.backgroundColor = '#ffffff';
        }
    }

    const btnclear = document.createElement('button');
    btnclear.innerHTML = "Clear";
    btnclear.className = "btn_clear"
    btnclear.addEventListener("click", clear);
    btndiv.appendChild(btnclear);

    function reloadPage(){
        location.reload(true);
    }

    const btnnew = document.createElement('button');
    btnnew.innerHTML = "New";
    btnnew.className = "btn_new"
    btnnew.addEventListener("click", reloadPage);
    btndiv.appendChild(btnnew);

    document.body.appendChild(btndiv);
}
document.addEventListener('DOMContentLoaded', startPage);
