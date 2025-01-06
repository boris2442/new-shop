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

window.addEventListener("scroll",scrollActive)
const title=document.getElementById("title")
const app=new Typewriter (title, {
    loop:true,
    delay:100
})
.typeString("La Galerie <br>des Sacs <span style='color:black'> élégants!</span>")
.pauseFor(2000)
.deleteAll()
.start();



// partie destinee au swiper library 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    delay:2500,
    autoplay:{
        disableOnInteraction: false, 
    },
  speed:500,
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



//   partie destinee au code scrollREveal

const sr= ScrollReveal({
    duration:1500,
    distance:"30px",
    reset:true,
   origin:"top"

})

sr.reveal("button, .home, .about, .products, .avis, .nouvelles-arrivages, .footer-box", {interval:200})