const header = document.querySelector("header")
const hero = document.querySelector(".sectionHero")

window.addEventListener("scroll",()=>{
    if(window.scrollY > hero.clientHeight - 64){
        header.classList.add("coloredHeader")
    }else{
        header.classList.remove("coloredHeader")
    }
})