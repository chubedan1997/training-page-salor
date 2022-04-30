

// attack app

const itemAttack = document.querySelectorAll(".prortfolo_control");
const itemData = document.querySelectorAll(".protfoloi-item");
const cardItems = document.querySelectorAll(".CARD");
const webItems = document.querySelectorAll(".WEB");
const appItems = document.querySelectorAll(".APP");

let index = 0;


[...itemAttack].forEach(item => item.addEventListener("click", function(event){
    [...itemAttack].forEach(e => e.classList.remove("active"));
    event.target.classList.add("active");
    
    const dataKeyword = item.getAttribute("data-keyword")
    itemData.forEach(data => {
        if(data.getAttribute("data-keyword") === dataKeyword || dataKeyword === "ALL") {
            data.classList.remove("hide-img")
        } else {
            data.classList.add("hide-img")
        }

    })
    console.log(item);
}));


