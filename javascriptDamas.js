const tamanhoCelula = 40
let pecaId = 0
let imgid 
document.body.append(criaTabuleiro())

function criaTabuleiro() {
    const tamanho = 8
    const tabela = document.createElement('table')

    tabela.style.borderStyle = 'solid'
    tabela.style.borderSpacing = 0
    tabela.style.margin = 'auto'

    for (let i = 0; i < tamanho; i++) {
        const linha = document.createElement('tr')
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            const celula = document.createElement('td')
            celula.dataset.lin = i
            celula.dataset.col = j
            linha.append(celula)
            celula.style.width = `${tamanhoCelula}px`
            celula.style.height = `${tamanhoCelula}px`
            if (i % 2 == j % 2) {
                celula.addEventListener('dragover', permDrop)
                celula.style.backgroundColor = 'black'
                if (i * 8 + j <= 24) {
                    const peca = criaPeca('black')
                    peca.setAttribute('draggable','false')
                    celula.append(peca)
                    celula.removeEventListener('dragover', permDrop)
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red'))
                    celula.removeEventListener('dragover', permDrop)
                }
            } else {
                celula.style.backgroundColor = 'white'
            }
        }
    };
    return tabela;
}

function criaPeca(cor) {
    const imagem = document.createElement('img')
    imagem.classList.add('peca') 
    imagem.id = `p${pecaId++}`
    imagem.setAttribute('src', `img/${cor}.png`)
    imagem.setAttribute('width', `${tamanhoCelula-4}px`)
    imagem.setAttribute('height', `${tamanhoCelula-4}px`)
    imagem.addEventListener('drag', drag)
    return imagem
}

function permDrop(evento){
    evento.preventDefault()
    const imagem = document.querySelector(`#${imgid}`)
    const col_ori = imagem.parentElement.dataset.col 
    const lin_ori = imagem.parentElement.dataset.lin
    const lin_des = evento.target.dataset.lin 
    const col_des = evento.target.dataset.col
    if ((imagem.getAttribute('src') == 'img/red.png' && 
    lin_des == lin_ori-1 || 
    imagem.getAttribute('src') == 'img/black.png' && 
    lin_des-1 == lin_ori) &&
    (col_ori == col_des-1 || col_ori-1 == col_des)) {
        evento.target.addEventListener('drop', drop)
    }
}

function drag(evento) {
    imgid = evento.target.id
}

function trocaJog() {
    const pecas = document.querySelectorAll('.peca')
    pecas.forEach(peca => {
        peca.draggable = !peca.draggable
    })
}
function drop(evento) {
    const imagem = document.querySelector(`#${imgid}`)
    imagem.parentElement.addEventListener('dragover', permDrop)
    evento.target.appendChild(imagem)
    imagem.parentElement.removeEventListener('dragover', permDrop)
    trocaJog()
}
