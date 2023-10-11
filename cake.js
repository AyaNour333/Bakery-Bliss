let header = document.querySelector('.header')
let headTop = document.querySelector('.head-top')

window.onscroll = function(){
    if(window.scrollY > headTop.offsetTop){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}


// filter cakes
let switcherLis = document.querySelectorAll(".cakes ul li")
let boxS = Array.from(document.querySelectorAll(".box")) 


switcherLis.forEach((li)=>{
    // addEventListeners run at the same time
    li.addEventListener("click",removeActive)
    li.addEventListener("click",manageImage)
})

// remove active class from all lis and to current 
function removeActive(){
    switcherLis.forEach((li)=>{
        li.classList.remove("active")
        this.classList.add("active")
    })
}

//mange images
function manageImage(){
    boxS.forEach((el)=>{
        el.style.display = "none"
    })
    document.querySelectorAll(this.dataset.cake).forEach((el)=>{
        el.style.display = "block"
    })
}


// popup box image

// let imgs = Array.from(document.querySelectorAll(".box .img")) 

// let image = `<div class ='pop-img'>
//                     ${this}
//             </div>`
// imgs.forEach(img=>{
//     img.addEventListener('click',()=>{
//         let overlay = `<div class ='lay'></div>`
//         document.body.appendChild(overlay)
//     })
    
//     // console.log(img);
// })


let imgs = Array.from(document.querySelectorAll(".box .img")) 


imgs.forEach(img=>{
        img.addEventListener('click',()=>{
            let overlay = document.createElement('div')
            overlay.className = 'pop-overlay'
            document.body.appendChild(overlay)
            let image = document.createElement('img')
            image.className = 'pop-im'
            image.src = img.firstElementChild.src
            document.body.appendChild(image)
            let closeButton = document.createElement('span')
            closeButton.textContent = 'x'
            closeButton.className = 'c-button'
            overlay.appendChild(closeButton)


        })
    })


document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('c-button')){
        e.target.parentElement.remove()
        document.querySelector('.pop-im').remove()
    }
    if(e.target.classList.contains('pop-overlay')){
        e.target.remove()
        document.querySelector('.pop-im').remove()
    }
})


let ul = document.querySelector('.page .header .nav .links')
let burgerIcon = document.querySelector('.burger-icon')

burgerIcon.onclick = function(){
    ul.classList.toggle("open")
}