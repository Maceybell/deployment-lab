

let basket = document.querySelector('.basket')

function mouseImg (evt){

    evt.target.classList.add("opacity")

}

function mouseOff (evt){
    evt.target.classList.remove("opacity")
}

basket.addEventListener('mouseover', mouseImg)
basket.addEventListener('mouseout', mouseOff)