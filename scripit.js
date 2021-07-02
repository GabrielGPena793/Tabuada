function gerar() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector("#txtt")

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
        
    }else {
        let valornum = Number(num.value)
        tab.innerHTML = '' //sempre que voltar vai apagar o texto
        for(c = 1; c <= 10 ; c++) {
            
            let item = document.createElement('option') // criando um elmento.
            item.text = `${valornum} x ${c} = ${valornum*c}`
            item.value = `tab ${c}`//não faz muita diferença no JS, mas em outras linguagens faz.
            tab.appendChild(item)// Lembrar sempre de colocar quando criar um elemento pelo JS, se não não vai funcionar o elemento criado.
        }
    }

}


