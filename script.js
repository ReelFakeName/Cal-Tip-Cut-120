var bil = Number(prompt("How much was the bill"))
var tax = (bil * .07)
var tip = (bil + tax) * .05
var total = bil + tip + tax
var containerEle = document.body.querySelector(".bill")
containerEle.innerHTML ="You Should Pay: $" + total