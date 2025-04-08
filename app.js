const body = document.querySelector("body")
const button = document.querySelectorAll(".button")

button.forEach(button =>{
    button.addEventListener("click", (e)=>{
        if(e.target.id === "beige"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "cadetblue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "burlywood"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "crimson"){
            body.style.backgroundColor = e.target.id;
        }
    })
})