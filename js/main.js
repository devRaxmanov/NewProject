"use strict"
window.addEventListener("DOMContentLoaded", ()=> {
    const miniMenu = document.querySelector('.headerTop nav ul.mainList li:last-child'),
        miniMenuLink = document.querySelector('.headerTop nav ul.mainList li:last-child a'),
        openMenu = document.querySelector('.headerTop nav .fullMenu'),
        navigationIcon = document.querySelector('.headerTop nav ul li a .navigationIcon')
        miniMenu.addEventListener('mouseenter', ()=>{
            miniMenuLink.style.background = "#EEEE36"
            miniMenuLink.style.borderRadius = "5px"
            openMenu.style.display = "block"
            navigationIcon.style.display = "block"
        })
        miniMenu.addEventListener('mouseleave', ()=>{
            miniMenuLink.style.background = "none"
            openMenu.style.display = "none"
            navigationIcon.style.display = "none"
        })
        openMenu.addEventListener('mouseenter', ()=>{
            openMenu.style.display = "block"
            navigationIcon.style.display = "block"
            miniMenuLink.style.background = "#EEEE36"
            miniMenuLink.style.borderRadius = "5px"
        })
        openMenu.addEventListener('mouseleave', ()=>{
            openMenu.style.display = "none"
            navigationIcon.style.display = "none"
            miniMenuLink.style.background = "none"
        })
})