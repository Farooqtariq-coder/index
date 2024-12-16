const menubtn = document.getElementById('menu-btn');
const navlinks = document.getElementById('nav-links');
const menubtnicon = document.querySelector("i");
menubtn.addEventListener("click",(e)=>{
navlinks.classList.toggle("open");
const isopen = navlinks.classList.contains("open");
menubtnicon.setAttribute("class", isopen ? "ri-close-line": "ri-menu-line");

})
