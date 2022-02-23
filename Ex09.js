function calcular() {
    var numero = parseFloat(document.getElementById("n1").value)
    var i = 0

    if (numero % 3 == 0) {
        document.getElementById("resultado").innerHTML = `é múltiplo de 3`
        i++
    }
    if (numero % 7 == 0) {
        document.getElementById("resultado").innerHTML = `é múltiplo de 7`
        i++
    }
    if (i == 0) {
        document.getElementById("resultado").innerHTML = `Não é múltiplo de 3 e nem de 7`
    }
}