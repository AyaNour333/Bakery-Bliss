// tabs
let list = document.querySelectorAll('.tab ul li')
let content = document.querySelectorAll('.tab .content > div')

list.forEach(li=>{
    li.addEventListener('click',(e)=>{
        list.forEach(li=>{
            li.classList.remove('active')
        })
        e.target.classList.add('active')
        content.forEach(div=>{
            div.style.display = 'none'
        })
        document.querySelector(e.target.dataset.tab).style.display = 'block'
    })
})

let header = document.querySelector('.page .header')
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