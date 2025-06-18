const imgs = document.querySelectorAll("#photos img")
const lis = document.querySelectorAll("#liste li")
let current = 0
lis.forEach((li,pos)=>{
    li.addEventListener("click",(e)=>{
        unselectImg()
        unselectLi()
        current = pos
        imgs[pos].classList.add("img-selected")
        li.classList.add("li-selected")
    })
})

function unselectImg(){
    document.querySelector(".img-selected").classList.remove("img-selected")
}

function unselectLi(){
    document.querySelector('.li-selected').classList.remove('li-selected')
}

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
        current++
        if(current >= imgs.length){
            current= 0
        }
        unselectImg()
        unselectLi()
        imgs[current].classList.add("img-selected")
        lis[current].classList.add("li-selected")
        
    },4000)
})