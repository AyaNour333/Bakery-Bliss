let list = document.querySelectorAll('.links li')



let ul = document.querySelector('.page .header .nav .links')
let burgerIcon = document.querySelector('.burger-icon')

burgerIcon.onclick = function(){
    ul.classList.toggle("open")
}