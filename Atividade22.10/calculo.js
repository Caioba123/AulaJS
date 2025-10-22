function Somar(num1 , num2) {
    return num1 + num2
}

function Dividir(num1 , num2) {
    if (num2 === 0) return null
    return num1 / num2
}

module.exports = {
     Somar, Dividir
}