const header=document.querySelector("nav");
const nav=document.querySelector(".navigation");
const linkNav=document.querySelectorAll(".navigation a");
const searchContent=document.querySelector(".search-content");
const btnSearch=document.querySelector("#btn-search");
const btnBurger=document.querySelector("#burger-menu");
const sections=document.querySelectorAll("section")

if(window.scrollY==0){
header.classList.toggle("active")
}

btnBurger.addEventListener("click",()=>{
    nav.classList.toggle("active")
    btnBurger.classList.toggle("bx-x")
    searchContent.classList.remove("active")
})

linkNav.forEach(link=>{
    link.addEventListener("click",()=>{
   nav.classList.remove("active")
    btnBurger.classList.remove("bx-x")
    })
});


btnSearch.addEventListener("click", ()=>{
    searchContent.classList.toggle("active")
    nav.classList.remove("active")
    btnBurger.classList.remove("bx-x")
});

window.addEventListener("scroll", ()=>{
    nav.classList.remove("active")
    btnBurger.classList.remove("bx-x")
});
window.addEventListener("scroll", ()=>{
    header.classList.toggle("active, window.scrollY>0")
})


const scrollActive=()=>{
    sections.forEach(section=>{
        let top=window.scrollY;
        let offset=section.offsetTop-250;
        let height=section.offsetHeight;
        let id=section.getAttribute("id");
        if(top>=offset && top<offset+height){
           linkNav.forEach(links=>{
            links.classList.remove("active")
            document.querySelector(`.navigation a[href*=${id}]`).classList.add("active")
           }) 
        }
    })

}
window.addEventListener("scroll",scrollActive)


