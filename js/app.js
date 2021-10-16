let navbar = document.querySelector(".navbar")
let cartItem = document.querySelector(".cart-item-container")

let searchForm = document.querySelector(".search-form")


document.getElementById("menu-icon").onclick = function(){
    navbar.classList.toggle("active"); 
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}




document.getElementById("cart-btn").onclick = function(){
    cartItem.classList.toggle("active");
    navbar.classList.remove("active")
    searchForm.classList.remove("active"); 
 
   
 
}

document.getElementById("search-btn").onclick = function(){
    searchForm.classList.toggle("active");
    navbar.classList.remove("active")
  
    cartItem.classList.remove("active");
}

window.onscroll= ()=>{
    navbar.classList.remove("active")
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}


