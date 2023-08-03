"use strict"
window.addEventListener("DOMContentLoaded", ()=> {

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

        // This js for banner slider btn link start
        const bannerBtn = document.querySelectorAll('.banner .slideItem a'),
              animationIcon = document.querySelectorAll('.banner .slideItem a .animationIcon')
        
        bannerBtn.forEach((item)=>{
            item.addEventListener('mouseenter', ()=>{
                animationIcon.forEach((item)=>{
                    item.classList.add('active')
                })
            })
            item.addEventListener('mouseleave', ()=>{
                animationIcon.forEach((item)=>{
                    item.classList.remove('active')
                })
            })
        })

        // This js for banner slider btn link end
        

        const mySlider = document.querySelector('.mySlider'),
            sliderWrapper = document.querySelector('.sliderWrapper'),
            sliderItem = document.querySelectorAll('.sliderWrapper .slideItem'),
            width = getComputedStyle(sliderWrapper).width, // 306px
            active = document.querySelector('#active'),
            circle01 = document.querySelector('#circle01'),
            circle02 = document.querySelector('#circle02'),
            circle03 = document.querySelector('#circle03'),
            prevBtn = document.querySelector('.secondBanner .prevBtn'),
            nextBtn = document.querySelector('.secondBanner .nextBtn');

        let offset = 0;

        nextBtn.addEventListener('click', ()=>{
            
            if (offset == (+width.slice(0, width.length - 2) * (sliderItem.length - 1))) {
                offset = 0;
            }else{
                offset += +width.slice(0, width.length - 2)
            }
            sliderWrapper.style.transform = `translateX(-${offset}px)`
            if (sliderWrapper.style.transform == "translateX(-612px)") {
                active.style.transform = "translateX(20px)"
            }else if (sliderWrapper.style.transform == "translateX(-306px)") {
                active.style.transform = "translateX(0px)"
            }else if (sliderWrapper.style.transform == "translateX(0)"){
                active.style.transform = "translateX(-20px)"
            }
            
        }) 
        prevBtn.addEventListener('click', ()=>{
            if (offset == 0) {
                offset = (+width.slice(0, width.length - 2) * (sliderItem.length - 1))
            }else{
                offset -= +width.slice(0, width.length - 2)
            }
            sliderWrapper.style.transform = `translateX(-${offset}px)`

            if (sliderWrapper.style.transform == "translateX(-612px)") {
                active.style.transform = "translateX(20px)"
            }else if (sliderWrapper.style.transform == "translateX(-306px)") {
                active.style.transform = "translateX(0)"
            }else{
                active.style.transform = "translateX(-20px)"
            }
        }) 

            sliderWrapper.style.width = 100 * sliderItem.length + '%';
            sliderItem.forEach(slide =>{
                slide.style.width = width;
            })
            circle01.addEventListener('click', ()=>{
                sliderWrapper.style.transform = "translateX(0)"
                active.style.transform = "translateX(-20px)"
            })
            circle02.addEventListener('click', ()=>{
                sliderWrapper.style.transform = "translateX(-306px)"
                active.style.transform = "translateX(0px)"
            })
            circle03.addEventListener('click', ()=>{
                sliderWrapper.style.transform = "translateX(-612px)"
                active.style.transform = "translateX(20px)"
            })

            
            
            
        
        

        //   for swipper silde js start 

        new Swiper('.swiper', {
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


        

})
