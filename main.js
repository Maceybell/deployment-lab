let basket = document.querySelector('.basket')

function mouseImg (evt){

    evt.target.classList.add("opacity")

    rollbar.info('scrolled over picture')
}

function mouseOff (evt){
    evt.target.classList.remove("opacity")
}

basket.addEventListener('mouseover', mouseImg)
basket.addEventListener('mouseout', mouseOff)