//get input element (color) 
const colorPicker = document.getElementById('colorPicker');
//get input element (canvas height)
const inputCanvasHeight = document.getElementById('inputHeight');
//get input element (canvas width)
const inputCanvasWidth = document.getElementById('inputWidth');
//get form element
const form = document.getElementById('sizePicker');
//get table element
const canvas = document.getElementById('pixelCanvas');
//function to create canvas
function makeGrid() {
    //clear canvas when inputs are submitted
    canvas.innerHTML = '';
    //loop through height input value and add rows to table element
    for (let a = 0; a < inputCanvasHeight.value; a++) {
        let row = canvas.insertRow(a);
        //loop through width input value and add cells to row elements
        for (let b = 0; b < inputCanvasWidth.value; b++) {
            let cell = row.insertCell(b);
            //add 'click' event type to 'cell' event target and call function to apply color to clicked cell
            cell.addEventListener('click', function(e){
                e.target.style.backgroundColor = colorPicker.value;
            });
        }
    }
}
//add 'submit' event type to 'form' event target and call canvas building function
form.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});
