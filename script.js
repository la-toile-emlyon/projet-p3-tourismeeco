const header = document.querySelector("header")
const hero = document.querySelector(".sectionHero")
const heroDoc = document.querySelector(".heroDoc")

window.addEventListener("scroll",()=>{
    if(window.scrollY > hero.clientHeight - 64){
        header.classList.add("coloredHeader")
    }else{
        header.classList.remove("coloredHeader")
    }
})

window.addEventListener("scroll",()=>{
    if(window.scrollY > heroDoc.clientHeight - 64){
        header.classList.add("coloredHeaderDoc")
    }else{
        header.classList.remove("coloredHeader")
    }
})

