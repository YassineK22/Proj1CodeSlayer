const SubEl = document.getElementById("btn");
const thanksContainer = document.getElementById("thx-container");
const valueRated = document.getElementById("value-rated");
const R1 = document.getElementById("R1");
const R2 = document.getElementById("R2");
const R3 = document.getElementById("R3");
const R4 = document.getElementById("R4");
const R5 = document.getElementById("R5");

value = 0;

SubEl.addEventListener("click", ()=>{
    thanksContainer.classList.add("active")
})

// R1.addEventListener("click", ()=>{
//     R1.classList.add("hoverC")
//     value = 1;
// })

// R2.addEventListener("click", ()=>{
//     R2.classList.add("hoverC");
//     value = 2;
// })

// R3.addEventListener("click", ()=>{
//     R3.classList.add("hoverC");
//     value = 3;
// })

// R4.addEventListener("click", ()=>{
//     R4.classList.add("hoverC")
//     value = 4;
// })

// R5.addEventListener("click", ()=>{
//     R5.classList.add("hoverC")
//     value = 5;
// })

valueRated.innerText = value;
