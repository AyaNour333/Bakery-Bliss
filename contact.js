let header = document.querySelector('.header')
let headTop = document.querySelector('.head-top')

window.onscroll = function(){
    if(window.scrollY > headTop.offsetTop){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}


let ul = document.querySelector('.page .header .nav .links')
let burgerIcon = document.querySelector('.burger-icon')

burgerIcon.onclick = function(){
    ul.classList.toggle("open")
}