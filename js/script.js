alert('esta funcionando');



let searchForm = document.querySelectorAll('.search-form');

let shoppingCart = document.querySelectorAll('.shopping-cart');

let loginForm = document.querySelectorAll('.login-form');

let navBar = document.querySelectorAll('.navbar');

document.querySelector('#search-btn').onclick = ()=>{

    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = ()=>{
    searchForm.classList.remove('active');
    navBar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}


document.querySelector('#login-btn').onclick = ()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    
}

document.querySelector('#menu-btn').onclick = ()=>{
    navBar.classList.toggle('active');
}

window.onscroll = ()=>{

    searchForm.classList.remove('active');
    navBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

let swiper = new swiper(".product-slider",{
    loop:true,
    spaceBetween:20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    
    },
    centeredSlides:true,
    breakpoints: {
        0: {
            slidesPerView:1,
           
        },
        768: {
            slidesPerView:2,
            
        },
        1020: {
            slidesPerView:3,
            
        },
    },
)}

let swiper = new swiper(".review-slider",{
    loop:true,
    spaceBetween:20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    
    },
    centeredSlides:true,
    breakpoints: {
        0: {
            slidesPerView:1,
           
        },
        768: {
            slidesPerView:2,
            
        },
        1020: {
            slidesPerView:3,
            
        },
    },
)}