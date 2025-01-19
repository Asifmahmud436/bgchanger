let container = document.querySelector('.boxes');
let body = document.querySelector('body')

function generateColor(){
    let colorStr = '#'
    colorStr += Math.floor(Math.random()*9)
    for(let i = 1; i<6 ; i++){
        colorStr+= Math.ceil(Math.random()*9)
    }
    return colorStr;
}

function applyColor(){
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.backgroundColor = generateColor()
        container.children[i].innerText = generateColor()
        container.children[i].addEventListener('click',(event)=>{
            body.style.backgroundColor = container.children[i].style.backgroundColor
        })
        
    }
}

applyColor()