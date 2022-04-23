// const menubar = document.querySelector('nav-menu')
// console.log('hello')
// const getStart = document.querySelector('col-btn')
// menubar.addEventListener('click', bienDoi)
// function bienDoi(){
//     getStart=document.getElementById('col-btn').style.display='none'
// }


// attack app

const itemAttack = document.querySelectorAll(".prortfolo_control");
const itemData = document.querySelectorAll(".protfoloi-item");

let index = 0;

[...itemAttack].forEach(item => item.addEventListener("click", function(event){
    [...itemAttack].forEach(e => e.classList.remove("active"));
    event.target.classList.add("active");
}));


