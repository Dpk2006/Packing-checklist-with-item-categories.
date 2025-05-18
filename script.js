'use strict'

// Elements - From Main one
const main = document.querySelector(".main")
const btn = document.querySelector("#btn")
const insideGlass = document.querySelector(".insideGlass");
const glass = document.querySelector(".glass")

// From Main two
const insideMain = document.querySelector(".insideMain")

// For First
btn.addEventListener("click", () => {
    insideGlass.classList.add("opacityZero")
    setTimeout(() => {
        insideGlass.remove()
    }, 600)
    glass.style.height = "0vh"
    setTimeout(() => {
        glass.remove()
        insideMain.style.display = "flex"
        insideMain.classList.add("opacityOne")
    }, 1100)
})

const done = document.querySelector("#submitBtn")
done.addEventListener("click",function(){
    insideMain.remove()
    main.textContent = "Lets Go"
    main.style.fontSize = "100px"
       main.style.fontFamily = "Korcy"
})