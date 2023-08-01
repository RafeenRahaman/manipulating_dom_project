let pbutton = document.getElementById("p-button")
let imgbutton = document.getElementById("img-button")
let p = document.createElement("p")
let pdiv = document.getElementById("p-div")
let img = document.createElement("img")
let imgdiv = document.getElementById("img-div")

function pfunction() {
    imgdiv.style.display = "none"
    img.style.display = "none"
    let p = document.createElement("p")
    p.innerText = "Hot chocolate is bad today"
    p.style.backgroundColor = "black"
    p.style.color = "white"
    p.style.paddingTop = "10px"
    p.style.paddingBottom = "10px"
    let pdiv = document.getElementById("p-div")
    pdiv.appendChild(p)
    pdiv.style.display = "block"
    p.style.visibility = "visible"
}

function imgfunction() {
    pdiv.style.display = "none"
    p.style.display = "none"
    let img = document.createElement("img")
    img.src = "pik_partner.png"
    img.style.maxHeight = "140px"
    let imgdiv = document.getElementById("img-div")
    imgdiv.appendChild(img)
    img.style.display = "inline"
    imgdiv.style.display = "block"
    imgdiv.style.visibility = "visible"
}

pbutton.addEventListener("click", pfunction)
imgbutton.addEventListener("click", imgfunction)