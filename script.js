function CreateSquareDiv() {
const container = document.querySelector('#container');
const squareDiv = document.createElement('div');
squareDiv.classList.add('squareDiv');
squareDiv.style.cssText = 'height: 50px; width: 50px; background-color: red;border:1px;margin: 10px;'
container.appendChild(squareDiv);
}
CreateSquareDiv();

for (let index = 0; index < 16; index++) {
    CreateSquareDiv();
    
    
}