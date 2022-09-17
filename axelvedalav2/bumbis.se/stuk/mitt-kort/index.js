window.addEventListener("load", () => {
    const card = document.getElementById("card")
    card.onclick = () => {
        if(card.className == "flipped") {
            card.className = ""
        }
        else {
            card.className = "flipped"
        }
    }
    setInterval(update, 1000 / 30)

    const name = document.getElementById("name").childNodes[0]
    const pnr = document.getElementById("pnr").childNodes[0]
    const knr = document.getElementById("knr").childNodes[0]

    name.innerText = window.localStorage.getItem("name")
    pnr.innerText = window.localStorage.getItem("pnr")
    knr.innerText = window.localStorage.getItem("knr")
})

const stuk = []
let tick = 0

const update = () => {
    const animation = document.getElementById("animation")
    if(tick % 100 == 0) {
        const elmt = document.createElement("img")
        let top = window.innerHeight / 2 - 10
        let left = window.innerWidth / 2 - 75
        let dir = Math.random() * Math.PI * 2
        let speed = Math.random() * 3 + 1
        elmt.src = "../img/stuk-white.png"
        elmt.style.width = "150px"
        stuk.push({elmt, top, left, dir, speed })
        animation.appendChild(elmt)
    }
    for(let obj of stuk) {
        let { elmt, dir, speed } = obj
        let x = Math.cos(dir)
        let y = Math.sin(dir)
        obj.left += x * speed
        obj.top += y * speed
        elmt.style.top = obj.top + "px"
        elmt.style.left = obj.left + "px"
    }
    tick++
}