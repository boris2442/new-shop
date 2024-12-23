const header=document.querySelector("nav");
const nav=document.querySelector(".navigation");
const linkNav=document.querySelectorAll(".navigation a");
const searchContent=document.querySelector(".search-content");
const btnSearch=document.querySelector("#btn-search");
const btnBurger=document.querySelector("#burger-menu");

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
})

