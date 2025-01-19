function generateColor(){
    let colorStr = '#'
    for(let i = 1; i<7 ; i++){
        colorStr+= Math.ceil(Math.random()*9)
    }
    return colorStr;
}

let container = document.querySelector('.boxes');
function applyColor(){
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.backgroundColor = generateColor()
        container.children[i].innerText = generateColor()
    }
}