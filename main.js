
let colorBox = document.querySelector(".colorbox")
let playIt = document.getElementById("play")
let stopIt = document.getElementById("stop")

let base = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f" ]

const randEl = (a) => {
    return a[Math.floor(Math.random(a)*a.length)]
}

let randomColor = () => {
    let q = randEl(base);
    let w = randEl(base);
    let e = randEl(base);
    let r = randEl(base);
    let t = randEl(base);
    let y = randEl(base);

    colorBox.style.background = `#${q}${w}${e}${r}${t}${y}`
}

let playing = setInterval(randomColor, 800);
// let check = () => {
//     if (true){
//         playing()
//     }
//     else {
//         clearInterval(playing)
//     }
// }

// replay = () => {
//     clearInterval(playing);
//     replay = setInterval(randomColor, 800);
// }

playIt.addEventListener("click", () => {
    playing = setInterval(randomColor, 800);
})

stopIt.addEventListener("click", () => {
    clearInterval(playing)
})






// let x = setInterval(randomColor, 800)








//  0,1,2,3,4,5,6,7,8,9, a,b,c,d,e,f.
// length max 6 