const header = document.querySelector("header")
const hero = document.querySelector(".sectionHero")


window.addEventListener("scroll",()=>{
    if(window.scrollY > hero.clientHeight - 64){
        header.classList.add("coloredHeader")
    }else{
        header.classList.remove("coloredHeader")
    }
})



/* swipper */

const swiper = new Swiper('.swiper', {
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
