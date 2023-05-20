var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("Samantha")
var bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    samantha.style.display = "flex"
    setaDireita.style.display = "none"
    setaEsquerda.style.display = "flex"
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    samantha.style.display = "none"
    setaDireita.style.display = "flex"
    setaEsquerda.style.display = "none"
}