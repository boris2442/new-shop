const header=document.querySelector("nav");
const nav=document.querySelector(".navigation");
const linkNav=document.querySelectorAll(".navigation a");
const searchContent=document.querySelector(".search-content");
const btnSearch=document.querySelector("#btn-search");
const btnBurger=document.querySelector("#burger-menu");

btnBurger.addEventListener("click",()=>{
    nav.classList.toggle("active")
})

