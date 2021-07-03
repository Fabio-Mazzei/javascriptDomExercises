/* Exercise 1. Print tables for 2 in the browser using JavaScript DOM to access HTML */

const bodyA = document.body
const pA = document.createElement("p")
bodyA.append(pA)
pA.innerText = "2 Tables:"

let num = 2
let res
let pB

for (i = 0; i <= 10; i++) {
    pB = document.createElement("p")
    bodyA.append(pB)
    res = num * i
    pB.innerText = `${num} x ${i} = ${res}`
}
