"use strict"
window.addEventListener("DOMContentLoaded", ()=> {
    //   for swipper silde js start 
    const swiper = new Swiper('.banner .swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });
    // for swipper slide js end 








    const miniMenu = document.querySelector('.headerTop nav ul.mainList li:last-child'),
        miniMenuLink = document.querySelector('.headerTop nav ul.mainList li:last-child a'),
        openMenu = document.querySelector('.headerTop nav .fullMenu'),
        navigationIcon = document.querySelector('.headerTop nav ul li a .navigationIcon'),
        itemIndex = document.querySelectorAll('.headerMiddle .itemIndex')

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


        itemIndex.forEach((item)=>{
            if(item.textContent > 0){
                item.style = `
                    background-color: #EEEE36;
                    color: #3A3F43;
                `
            }
        })

        const headerBottomHoverMenu = document.querySelector('.bottomMoreMenu'),
              headerBottomOpenBtn = document.querySelector('.headerBottom ul  li.lastChild'),
              navigationIconSecond = document.querySelector('.headerBottom ul  li.lastChild .navigationIcon'),
              secondUlLinks = document.querySelectorAll('.bottomMoreMenu ul.second li .linkItem')

        headerBottomOpenBtn.addEventListener("mouseenter",()=>{
            headerBottomHoverMenu.style.display = 'block'
            navigationIconSecond.style.display = 'block'
        })
        headerBottomOpenBtn.addEventListener("mouseleave",()=>{
            headerBottomHoverMenu.style.display = 'none'
            navigationIconSecond.style.display = 'none'
        })

    



})