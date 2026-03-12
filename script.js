let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert(name+" added to cart")

}

function showCart(){

let cartItems=document.getElementById("cartItems")

if(!cartItems) return

let total=0

cartItems.innerHTML=""

cart.forEach(item=>{

cartItems.innerHTML+=item.name+" - ₹"+item.price+"<br>"

total+=item.price

})

document.getElementById("total").innerText=total

}

showCart()

/* SEARCH */

let search=document.getElementById("search")

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase()

let cards=document.querySelectorAll(".card")

cards.forEach(card=>{

let name=card.querySelector("h3").innerText.toLowerCase()

if(name.includes(value)){

card.style.display="block"

}else{

card.style.display="none"

}

})

})

}
