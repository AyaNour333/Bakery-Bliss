let ul = document.querySelector('.landing-page .header .nav .links')
let burgerIcon = document.querySelector('.burger-icon')

burgerIcon.onclick = function(){
    ul.classList.toggle("open")
}


// let list = document.querySelectorAll('.links li')
// // console.log(list);

// list.forEach(li=>{
//     li.addEventListener('click',(e)=>{
//     // removeActive(e)
//     console.log(e.target);
//     // e.target.classList.add('active')
//     })
// })

// // function removeActive(e){
    
// //         e.target.parentElement.classList.remove('active')
    
// // }


// image slider landing page
let landingContent = document.querySelector('.landing-content')
let leftButton = document.querySelector('.landing-content.hover .left')
let rightButton = document.querySelector('.landing-content.hover .right')
let imgArray = ['slider-1.webp','slider-2.webp','slider-3.webp']
let currentImage = 1


rightButton.onclick = nextImage   
leftButton.onclick = prevImage

function nextImage(){
    if(rightButton.classList.contains('no-click')){
        return false
    }else{
        currentImage++
        check()
    }
}
function prevImage(){
    if(leftButton.classList.contains('no-click')){
        return false
    }else{
        currentImage--
        check()
    }
}

function check(){
    makeBackground()
    landingContent.style.backgroundImage = `URL('../imgs/${imgArray[currentImage-1]}')`
    landingContent.style.opacity = '1'
    if(currentImage == 1){
        leftButton.classList.add("no-click")
    }else{
        leftButton.classList.remove("no-click")
    }
    if(currentImage == imgArray.length){
        rightButton.classList.add('no-click')
    }else{
        rightButton.classList.remove("no-click")
    }
}
function makeBackground(){
    for(let i = 0 ; i < 3 ; i++){
        landingContent.style.backgroundImage = `URL('../imgs/${imgArray[i]}')`; 
        landingContent.style.opacity = '0'; 
    }
}




// head top
let header = document.querySelector('.header')
let headTop = document.querySelector('.head-top')

window.onscroll = function(){
    if(window.scrollY > headTop.offsetTop){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

// pop-up video
let icon = document.querySelector('.play-video i')

icon.addEventListener("click",()=>{
    let popOverlay = document.createElement("div")
    popOverlay.className = 'pop-overlay'
    document.body.appendChild(popOverlay)
    let popBox = document.createElement('div')
    popBox.className = 'pop-box'
    let popImage = document.createElement('video')
    let source = document.createElement('source')
    source.src = './imgs/mov_big.mp4'
    source.type = "video/mp4"
    popImage.className = 'pop-image'
    popImage.controls = true
    popImage.appendChild(source)
    popBox.appendChild(popImage)
    document.body.appendChild(popBox)
    let closeButton = document.createElement('span')
    closeButton.textContent = 'x'
    closeButton.className = 'button'
    popBox.appendChild(closeButton)
})

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains('pop-overlay')){
        e.target.remove()
        document.querySelector('.pop-box').remove()
    }
    if(e.target.classList.contains('button')){
        e.target.parentNode.remove()
        document.querySelector('.pop-overlay').remove()
    }
})


// image slider feature section

let boxS = Array.from(document.querySelectorAll('.feature-cakes .box')) 
let nextButton = document.querySelector('.slider-icon .next')
let prevButton = document.querySelector('.slider-icon .prev')
let currentSlide = 1

nextButton.onclick = nextSlide
prevButton.onclick = prevSlide

checker()
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        return false
    }else{
        currentSlide++
        checker()
    }
}

function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false
    }else{
        currentSlide--
        checker()
    }
}

function checker(){
    removeAllActive(boxS)
    boxS[currentSlide-1].classList.add('active')
    if(currentSlide == 1){
        prevButton.classList.add("disabled")
    }else{
        prevButton.classList.remove("disabled")
    }
    if(currentSlide == boxS.length){
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove("disabled")
    }

}
function removeAllActive(el){
    el.forEach(box=>{
        box.classList.remove('active')
    })
}

for(let i = 0 ; i < boxS.length ; i++){
    // console.log(boxS[i]);
    boxS[i].setAttribute('data-box',i+1)
}
