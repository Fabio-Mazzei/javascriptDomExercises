/* Exercise 2. Print the multiplication table for 7 in the browser and paint the background in any color only for the operations that result in an odd number. */

const bodyHTML = document.body
const p1 = document.createElement("p")
bodyHTML.append(p1)
p1.innerText = "7 Multiplication Table:"

let num = 7
let res
let p2

for (i = 0; i < 11; i++) {
    p2 = document.createElement("p")
    bodyHTML.append(p2)
    res = num * i
    p2.innerText = `${num} x ${i} = ${res}`
    if (res % 2 === 1) {
        p2.style.backgroundColor = "yellow"
    }
}