let t = Math.floor(Math.random() * 9) + 1
console.log(t)
let input = document.querySelector(".inpt")
let btn = document.querySelector(".btn")
let p = document.querySelector("p")
let h = document.querySelector("h3")
let priz = document.querySelector(".set")
let main = document.querySelector(".main")
let scream = document.querySelector(".scream ")
btn.onclick = function () {
    if (t == input.value) {
        priz.style.display = 'inline-block'

    } else {
        h.innerHTML = "Вы проиграли"
        setTimeout(function () {
            h.innerHTML = ""
        }, 2000)
    }
    p.innerHTML = t
    t = Math.floor(Math.random() * 9) + 1
}
priz.onclick = function () {
    main.style.display = "none"
    scream.style.display = "block"
    let audio = new Audio()
    audio.src = "ezz.mp3"
    audio.autoplay = true
    audio.volume = "1"
}
