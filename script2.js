let titulo
let tam = 2
for (let i = 1; i < 7; i++) {
  titulo = document.querySelector(`h${i}`)
  if (titulo != null) {
    criabotao()
    break
  }
}
function criabotao() {
  const aumentar = document.createElement(null)
  aumentar.innerHTML = `<button type='button' onclick="clique('mais')" id='botao'>+</button>`
  const diminuir = document.createElement(null)
  diminuir.textContent = "-"
  diminuir.innerHTML = `<button type='button' onclick="clique('menos')" id='botao'>-</button>`
  const br = document.createElement("br")
  titulo.parentNode.insertBefore(br, titulo.nextSibling)
  titulo.parentNode.insertBefore(diminuir, titulo.nextSibling)
  titulo.parentNode.insertBefore(aumentar, titulo.nextSibling)
  const botao = document.querySelectorAll('#botao')
  for(let i = 0; i < 2; i++){
    botao[i].style.borderRadius = '10px'
    botao[i].style.width = '30px'
    botao[1].style.marginLeft = '20px'
  }
}
function clique(btn) {
  if (btn == "mais" && tam < 6) {
    tam += 0.5
  } else if(btn == 'menos' && tam > 1) {
    tam -= 0.5}
  titulo.style.fontSize = `${tam}em`
}
